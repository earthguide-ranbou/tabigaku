import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { scanRoots } from './check-public-secrets.mjs';
const cli = fileURLToPath(new URL('./check-public-secrets.mjs', import.meta.url));
async function fixture(run) {
  const dir = await mkdtemp(path.join(tmpdir(), 'public-gate-'));
  try { await run(dir); } finally { await rm(dir, { recursive: true, force: true }); }
}
const synthetic = 'sk_' + 'live_' + 'Z'.repeat(32);
test('ordinary public content, phone and bank information pass', () => fixture(async dir => {
  await writeFile(path.join(dir, 'page.html'), '<p>Phone 090-1234-5678; Bank 1234567</p><a href="https://example.com">Public</a>');
  assert.deepEqual((await scanRoots({ public: [dir], env: {} })).findings, []);
}));
for (const [label, content, expected] of [
  ['provider', synthetic, 'provider-token'],
  ['private key', '-----BEGIN ' + 'RSA PRIVATE KEY-----', 'private-key'],
  ['database', 'postgresql://' + 'someone:synthetic-password@db.example.invalid/demo', 'authenticated-database-url'],
  ['browser reference', 'import.meta.env.' + 'VITE_FRONTEND_FORGE_API_KEY', 'browser-secret-reference'],
  ['literal assignment', 'const apiKey = "' + 'not-a-real-credential-123' + '";', 'literal-secret-assignment'],
]) test(`blocks ${label}`, () => fixture(async dir => {
  await writeFile(path.join(dir, 'asset.bin'), content);
  assert.ok((await scanRoots({ source: [dir], env: {} })).findings.includes(expected));
}));
test('inspects large binary data and chunk boundaries', () => fixture(async dir => {
  await writeFile(path.join(dir, 'image.bin'), Buffer.concat([Buffer.alloc(65530), Buffer.from(synthetic), Buffer.alloc(2 * 1024 * 1024)]));
  assert.ok((await scanRoots({ public: [dir], env: {} })).findings.includes('provider-token'));
}));
test('checks known build secrets and their URL-encoded representation', () => fixture(async dir => {
  const secret = 'synthetic/credential+private?123';
  await writeFile(path.join(dir, 'bundle.js'), encodeURIComponent(secret));
  assert.ok((await scanRoots({ public: [dir], env: { SERVICE_TOKEN: secret } })).findings.includes('build-environment-secret'));
}));
for (const name of ['.env', '.env.production', '.git/config', 'database.sql', 'backup.zip', 'identity.pem', '.npmrc', 'bundle.js.map', 'bundle.br', 'backup.xz', 'archive.bz2', 'data.zst', '.env~', 'service-account-prod.json', 'app.credentials.json']) {
  test(`blocks private public path ${name}`, () => fixture(async dir => {
    const file = path.join(dir, name); await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, 'ordinary');
    assert.ok((await scanRoots({ public: [dir], env: {} })).findings.includes('private-public-path'));
  }));
}
test('rejects symlinks', () => fixture(async dir => {
  await writeFile(path.join(dir, 'a'), 'ordinary'); await symlink(path.join(dir, 'a'), path.join(dir, 'b'));
  assert.ok((await scanRoots({ public: [dir], env: {} })).findings.includes('symbolic-link'));
}));
test('missing and empty required roots fail closed', () => fixture(async dir => {
  await assert.rejects(scanRoots({ public: [path.join(dir, 'missing')], env: {} }));
  await assert.rejects(scanRoots({ public: [dir], env: {} }));
}));
test('CLI blocks with redacted output and exits nonzero', () => fixture(async dir => {
  await writeFile(path.join(dir, synthetic + '.js'), synthetic);
  const result = spawnSync(process.execPath, [cli, '--public', dir], { encoding: 'utf8', env: {} });
  assert.equal(result.status, 1);
  assert.ok(!`${result.stdout}${result.stderr}`.includes(synthetic));
  assert.match(result.stderr, /BLOCKED/);
  const missing = spawnSync(process.execPath, [cli, '--public', path.join(dir, synthetic)], { encoding: 'utf8', env: {} });
  assert.equal(missing.status, 1); assert.ok(!missing.stderr.includes(synthetic));
}));
test('CLI clean fixture exits zero; invalid usage fails', () => fixture(async dir => {
  await writeFile(path.join(dir, 'index.html'), 'Hello');
  assert.equal(spawnSync(process.execPath, [cli, '--public', dir], { env: {} }).status, 0);
  assert.equal(spawnSync(process.execPath, [cli], { env: {} }).status, 1);
}));
test('known environment secrets remain blocked across a chunk boundary', () => fixture(async dir => {
  const value = 'only-a-synthetic-env-value-123456';
  await writeFile(path.join(dir, 'asset.bin'), Buffer.concat([Buffer.alloc(65530), Buffer.from(value)]));
  assert.ok((await scanRoots({ public: [dir], env: { BUILD_SECRET: value } })).findings.includes('build-environment-secret'));
}));
test('unreadable/missing inputs fail alongside valid inputs', () => fixture(async dir => {
  await writeFile(path.join(dir, 'safe.txt'), 'ordinary');
  await assert.rejects(scanRoots({ source: [dir, path.join(dir, 'missing')], env: {} }));
}));
test('ordinary configuration does not trigger', () => fixture(async dir => {
  await writeFile(path.join(dir, 'config.js'), 'const publicProjectId = "public-project-example"; const url = "https://example.com";');
  assert.deepEqual((await scanRoots({ source: [dir], env: {} })).findings, []);
}));

test('known environment values are not exempted for placeholder-like prefixes or encoding', () => fixture(async dir => {
  const value = 'test-real-secret-may-start-like-this';
  await writeFile(path.join(dir, 'config.js'), Buffer.from(value).toString('base64'));
  assert.ok((await scanRoots({ public: [dir], env: { SERVICE_PASSWORD: value } })).findings.includes('build-environment-secret'));
}));
test('short literal passwords are blocked', () => fixture(async dir => {
  await writeFile(path.join(dir, 'config.js'), 'const password = "Abc12345";');
  assert.ok((await scanRoots({ source: [dir], env: {} })).findings.includes('literal-secret-assignment'));
}));

test('placeholder-looking secret literals are not exempt', () => fixture(async dir => {
  await writeFile(path.join(dir, 'config.js'), 'const password = "example-real-password";');
  assert.ok((await scanRoots({ source: [dir], env: {} })).findings.includes('literal-secret-assignment'));
}));
test('public source maps with escaped source content are blocked', () => fixture(async dir => {
  await writeFile(path.join(dir, 'bundle.js.map'), JSON.stringify({ sourcesContent: ['const password = "synthetic-password-value";'] }));
  assert.ok((await scanRoots({ public: [dir], env: {} })).findings.includes('private-public-path'));
}));

test('backtick credential literals are blocked', () => fixture(async dir => {
  await writeFile(path.join(dir, 'config.js'), 'const apiKey = `synthetic-credential-value`;');
  assert.ok((await scanRoots({ source: [dir], env: {} })).findings.includes('literal-secret-assignment'));
}));
test('labels and help text are not credential assignments', () => fixture(async dir => {
  await writeFile(path.join(dir, 'config.js'), 'const passwordLabel = "Choose a password"; const apiKeyHelp = "Enter the provider key";');
  assert.deepEqual((await scanRoots({ source: [dir], env: {} })).findings, []);
}));
test('JSON escaped secret assignments are blocked outside source maps', () => fixture(async dir => {
  await writeFile(path.join(dir, 'bundle.json'), JSON.stringify({ source: 'const password = "synthetic-password-value";' }));
  assert.ok((await scanRoots({ public: [dir], env: {} })).findings.includes('literal-secret-assignment'));
}));

test('short known build passwords are blocked', () => fixture(async dir => {
  await writeFile(path.join(dir, 'asset.txt'), 'Abc12345');
  assert.ok((await scanRoots({ public: [dir], env: { SERVICE_PASSWORD: 'Abc12345' } })).findings.includes('build-environment-secret'));
}));
test('temporary AWS credential identifiers are blocked', () => fixture(async dir => {
  await writeFile(path.join(dir, 'asset.txt'), 'ASIA' + 'Z'.repeat(16));
  assert.ok((await scanRoots({ public: [dir], env: {} })).findings.includes('provider-token'));
}));
