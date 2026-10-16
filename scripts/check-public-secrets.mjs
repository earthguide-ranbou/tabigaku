import { open, lstat, readdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Dependency-free release gate. No matched content, paths, env names, or errors
// are logged: filenames and error messages can themselves contain credentials.
const sensitiveName = /(?:SECRET|TOKEN|PASSWORD|PASSWD|PRIVATE_KEY|API_KEY|DATABASE_URL|DB_URL|CONNECTION_STRING|CREDENTIAL|ACCESS_KEY)/i;
const rules = [
  ['private-key', /-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY-----/],
  ['provider-token', /(?:\b(?:sk|rk)_(?:live|test)_[A-Za-z0-9]{16,}|\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{20,}|\bgh[pousr]_[A-Za-z0-9]{20,}|\bgithub_pat_[A-Za-z0-9_]{20,}|\bxox[baprs]-[A-Za-z0-9-]{16,}|\b(?:AKIA|ASIA)[A-Z0-9]{16}\b|\bAIza[A-Za-z0-9_-]{35}\b|\bSG\.[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{16,}|\bre_[A-Za-z0-9]{20,})/],
  ['authenticated-database-url', /(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis(?:s)?|mssql):\/\/[^\s\x00"'<>/@:]{1,256}:[^\s\x00"'<>/@]{1,1024}@/i],
  ['browser-secret-reference', /\b(?:VITE_|NEXT_PUBLIC_|REACT_APP_|PUBLIC_)[A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|PASSWD|PRIVATE_KEY|API_KEY|DATABASE_URL|DB_URL|CONNECTION_STRING|CREDENTIAL|ACCESS_KEY)[A-Z0-9_]*\b/],
  ['literal-secret-assignment', /(?:["']?\b(?:[A-Za-z0-9_]*(?:api[_-]?key|secret(?:[_-]?key)?|token|password|passwd|private[_-]?key))["']?\s*[:=]\s*["'`])([^\r\n"'`]{8,2048})["'`]/gi],
];
function privatePath(name) {
  return /^(?:\.env(?:\..*|~)?|\.git|\.svn|\.hg|\.aws|\.ssh|\.npmrc|\.netrc|\.htpasswd|\.DS_Store|credentials(?:\..*)?|secrets?(?:\..*)?|id_(?:rsa|dsa|ecdsa|ed25519)(?:\..*)?)$/i.test(name)
    || /^(?:service[-_]account.*|.*\.credentials)\.json$/i.test(name)
    || /\.(?:pem|key|p12|pfx|keystore|jks|map|sqlite3?|db|sql|dump|bak|backup|old|orig|swp|zip|tar|tgz|gz|br|bz2|xz|zst|7z|rar)$/i.test(name);
}
function knownSecrets(env) {
  const found = new Set();
  for (const [name, value] of Object.entries(env)) {
    if (!sensitiveName.test(name) || typeof value !== 'string' || value.length < 8) continue;
    if (value.length > 8192) throw new Error('Unsupported secret size');
    found.add(value);
    found.add(Buffer.from(value).toString('base64'));
    found.add(Buffer.from(value).toString('base64url'));
    found.add(encodeURIComponent(value));
    found.add(JSON.stringify(value).slice(1, -1));
  }
  return [...found];
}
function inspect(text, known, findings) {
  for (const [rule, pattern] of rules) {
    pattern.lastIndex = 0;
    if (rule === 'literal-secret-assignment') {
      if (pattern.test(text)) findings.add(rule);
    } else if (pattern.test(text)) findings.add(rule);
  }
  if (known.some(value => text.includes(value))) findings.add('build-environment-secret');
}

export async function scanRoots({ source = [], public: publicRoots = [], env = process.env } = {}) {
  const findings = new Set();
  let files = 0;
  const known = knownSecrets(env);
  const overlap = Math.max(16384, ...known.map(value => Buffer.byteLength(value) * 2));
  async function visit(target, strict) {
    const stat = await lstat(target);
    if (stat.isSymbolicLink()) { findings.add('symbolic-link'); return; }
    if (strict && privatePath(path.basename(target))) findings.add('private-public-path');
    if (stat.isDirectory()) {
      for (const entry of await readdir(target)) await visit(path.join(target, entry), strict);
    } else if (stat.isFile()) {
      files++;
      const handle = await open(target, 'r');
      try {
        const chunk = Buffer.alloc(64 * 1024);
        let tail = Buffer.alloc(0);
        for (;;) {
          const { bytesRead } = await handle.read(chunk, 0, chunk.length, null);
          if (!bytesRead) break;
          const combined = Buffer.concat([tail, chunk.subarray(0, bytesRead)]);
          // Inspect every byte, including unknown extensions and binary assets.
          const text = combined.toString('utf8');
          inspect(text, known, findings);
          // JSON-escaped embedded source must not bypass literal assignment checks.
          inspect(text.replace(/\\["'`]/g, match => match.slice(1)), known, findings);
          tail = Buffer.from(combined.subarray(Math.max(0, combined.length - overlap)));
        }
      } finally { await handle.close(); }
    } else findings.add('unsupported-file-type');
  }
  if (!source.length && !publicRoots.length) throw new Error('No roots');
  for (const root of source) await visit(root, false);
  for (const root of publicRoots) await visit(root, true);
  if (!files) throw new Error('No files');
  return { files, findings: [...findings].sort() };
}

async function main(args) {
  const options = { source: [], public: [] };
  try {
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i] === '--source' ? 'source' : args[i] === '--public' ? 'public' : null;
      if (!key || !args[i + 1] || args[i + 1].startsWith('--')) throw new Error('Arguments');
      options[key].push(args[i + 1]);
    }
    const result = await scanRoots(options);
    if (result.findings.length) {
      console.error(`Public secret check BLOCKED: ${result.findings.join(', ')}. Values and paths withheld.`);
      process.exitCode = 1;
    } else console.log(`Public secret check passed (${result.files} files).`);
  } catch {
    console.error('Public secret check FAILED: could not completely inspect required inputs. Details withheld.');
    process.exitCode = 1;
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await main(process.argv.slice(2));
