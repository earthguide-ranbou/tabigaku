import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const audit = JSON.parse(await readFile('dist/seo-audit.json', 'utf8'));
const sitemap = await readFile('dist/public/sitemap.xml', 'utf8');
const robots = await readFile('dist/public/robots.txt', 'utf8');
assert.ok(robots.includes(`Sitemap: ${audit.origin}/sitemap.xml`));
assert.ok(!/Disallow:\s*\/$/m.test(robots));
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
assert.equal(urls.length, audit.indexedRoutes.length);
const titles = new Set();
for (const route of audit.generatedRoutes) {
  const file = route === '/' ? 'index.html' : route.slice(1) + '.html';
  const html = await readFile(`dist/public/${file}`, 'utf8');
  const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
  assert.ok(head, `${route}: head missing`);
  const foundTitles = [...head.matchAll(/<title>(.*?)<\/title>/g)];
  assert.equal(foundTitles.length, 1, `${route}: exactly one title`);
  assert.ok(!titles.has(foundTitles[0][1]), `${route}: duplicate title`); titles.add(foundTitles[0][1]);
  assert.equal((head.match(/name="description"/g) ?? []).length, 1, `${route}: description count`);
  const canonical = [...head.matchAll(/rel="canonical" href="([^"]+)"/g)].map(m => m[1]);
  if (audit.indexedRoutes.includes(route)) {
    assert.deepEqual(canonical, [audit.origin + route], `${route}: canonical must match the requested public page`);
    assert.ok(urls.includes(audit.origin + route), `${route}: missing sitemap URL`);
    assert.ok(!/name="robots" content="noindex/.test(head), `${route}: unexpected noindex`);
    const ld = [...head.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.equal(ld.length, 1, `${route}: one structured-data graph`);
    const graph = JSON.parse(ld[0][1])['@graph'];
    assert.ok(graph.some(x => x['@type'] === 'WebPage' && x.url === audit.origin + route));
  } else assert.match(head, /name="robots" content="noindex/);
  assert.ok(!html.includes('<div id="root"></div>'), `${route}: empty client-only shell`);
  if (route === '/') { assert.match(html, /<h1[\s>]/, 'Homepage needs a readable main heading'); assert.ok(html.length > 10000, 'Homepage must include its real content'); }
}
assert.match(await readFile('dist/public/404.html','utf8'), /name="robots" content="noindex/);
assert.match(await readFile('dist/public/app-shell.html','utf8'), /name="robots" content="noindex/);
assert.ok(!urls.some(url => /\/admin|\/api\/|\/forms\/|\/subscribe|\/apply$/.test(url)), 'Private/transactional pages must stay out of the sitemap');
const vercel = JSON.parse(await readFile('vercel.json','utf8'));
assert.ok(!vercel.rewrites.some(x => x.source === '/(.*)'), 'Unknown URLs must return 404 rather than the homepage');
for (const route of audit.generatedRoutes.filter(x => x !== '/')) assert.ok(vercel.rewrites.some(x => x.source === route && x.destination === route + '.html'), `${route}: public static routing missing`);
console.log(`SEO checks passed for ${audit.generatedRoutes.length} pages: rendered content, unique metadata, canonical URLs, sitemap, noindex and routing.`);
