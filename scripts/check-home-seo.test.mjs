import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const copy=JSON.parse(read('client/src/data/home-copy.json'));
const html=read('dist/public/index.html');
const graph=JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1])['@graph'];
test('published title, social metadata and structured data use the editable homepage copy', () => {
 assert.ok(copy.seo.title.includes('旅する学校'));
 assert.ok(html.includes(`<title>${copy.seo.title}</title>`));
 assert.ok(html.includes(`name="description" content="${copy.seo.description}"`));
 assert.ok(html.includes(`property="og:title" content="${copy.seo.title}"`));
 assert.equal(graph.find(x=>x['@type']==='WebPage').name,copy.seo.title);
});
test('the main learning terms and first-visit guidance are visible without JavaScript', () => {
 const body=html.split('<body>')[1];
 for(const text of [copy.hero.eyebrow,copy.about.label,copy.tabiikuFaq.question,copy.tabiikuFaq.answer,copy.learningFaq.question,copy.learningFaq.answer,copy.learningFaq.linkLabel]) assert.ok(body.includes(text),text);
 assert.match(body,/href="#journeys"/);
 assert.equal((body.match(/<h1\b/g)||[]).length,1);
 assert.ok(!body.includes('認定校'));
});
test('site identity and contact data identify the school at the canonical origin', () => {
 assert.ok(html.includes('rel="canonical" href="https://www.tabigaku.party/"'));
 assert.ok(!/<meta[^>]*noindex/.test(html));
 const org=graph.find(x=>x['@id']==='https://www.tabigaku.party/#organization');
 assert.equal(org.name,'旅する学校');
 assert.equal(org.address.addressLocality,'神山町');
 assert.equal(org.email,'earthguide.jpn@gmail.com');
 assert.equal(graph.find(x=>x['@type']==='WebSite').publisher['@id'],org['@id']);
});
test('ended henro remains discoverable as an archive with a route to current journeys', () => {
 const past=read('dist/public/henro.html');
 assert.match(past,/<title>2026年10月・子どもの歩きお遍路【開催終了】/);
 assert.ok(past.includes('この日程の開催は終了しました。'));
 assert.ok(past.includes('href="/#journeys"'));
});
test('HTML aliases permanently redirect to their public URLs without a catch-all', () => {
 const config=JSON.parse(read('vercel.json'));
 for(const route of config.rewrites) {
  const redirect=config.redirects.find(r=>r.source===route.destination);
  assert.equal(redirect.destination,route.source);
  assert.equal(redirect.permanent,true);
 }
 assert.ok(!config.redirects.some(r=>r.source==='/(.*)'));
});
