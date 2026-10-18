import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
test('home search title and concrete description are configured once', () => {
 const source=read('client/src/seo-config.ts');
 assert.equal(source.split('旅する学校｜子どもの自然体験・旅育・歩きお遍路').length-1,1);
 assert.ok(source.includes('日程・対象年齢・参加方法をご案内します。'));
 assert.ok(source.includes('"origin": "https://www.tabigaku.party"'));
});
test('home learning FAQ is visible JSX, natural and scoped to interest', () => {
 const source=read('client/src/pages/Home.tsx');
 for(const word of ['フリースクール','オルタナティブスクール','ワールドスクール']) assert.equal(source.split(word).length-1,1);
 assert.ok(source.includes('対象年齢や過ごし方は企画によって異なります。'));
 assert.ok(source.includes('自然体験と旅育の企画・参加条件を見る'));
 assert.ok(source.includes('id="journeys"'));
 assert.ok(!source.includes('認定校'));
});
test('production HTML exposes matching SEO without JavaScript', () => {
 const html=read('dist/public/index.html');
 const title='旅する学校｜子どもの自然体験・旅育・歩きお遍路';
 assert.ok(html.includes(`<title>${title}</title>`));
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 assert.ok(html.includes('rel="canonical" href="https://www.tabigaku.party/"'));
 assert.ok(html.includes('学校の外での学びに関心があります'));
 assert.ok(!/<meta[^>]*noindex/.test(html));
 const json=JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
 assert.equal(json['@graph'].find(x=>x['@type']==='WebPage').name,title);
});
