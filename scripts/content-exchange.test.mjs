import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { digest, target, contentFile, exportMarkdown, parseExchange, changesBetween } from './content-exchange.mjs';
const original = await readFile(contentFile, 'utf8');
const current = JSON.parse(original);
const bundle = () => ({ format:'tabigaku-home-copy-v1', target, baseSha256:digest(original), content:structuredClone(current) });
test('Claude Markdown and JSON round trips retain all public text', () => {
  assert.deepEqual(parseExchange(exportMarkdown(original), original), current);
  assert.deepEqual(parseExchange(JSON.stringify(bundle()), original), current);
});
test('review identifies changed fields without touching other copy', () => {
  const b=bundle(); b.content.contact.intro='旅のことを、気軽に相談してください。';
  const next=parseExchange(JSON.stringify(b),original);
  assert.deepEqual(changesBetween(current,next),[{field:'content.contact.intro',before:current.contact.intro,after:b.content.contact.intro}]);
});
test('stale exports and wrong sites cannot replace current copy', () => {
  const b=bundle();
  assert.throws(()=>parseExchange(JSON.stringify(b),original+' '),/homepage has changed/);
  b.target='https://dao.tabigaku.party/';
  assert.throws(()=>parseExchange(JSON.stringify(b),original),/not for/);
});
test('unexpected fields, missing content, code and overlong titles are rejected', () => {
  for(const alter of [b=>b.content.links={apply:'https://example.com'},b=>delete b.content.hero,b=>b.content.hero.eyebrow='<script>alert(1)</script>',b=>b.content.seo.title='あ'.repeat(81),b=>b.content.faqs.push({question:'?',answer:'x'}),b=>b.content.about.paragraphs[0]='']) {
    const b=bundle(); alter(b); assert.throws(()=>parseExchange(JSON.stringify(b),original));
  }
});
test('ambiguous Markdown, invalid JSON and oversized files fail before writing', () => {
 assert.throws(()=>parseExchange(exportMarkdown(original)+'\n```json\n{}\n```\n',original));
 assert.throws(()=>parseExchange('{ invalid',original));
 assert.throws(()=>parseExchange('x'.repeat(100001),original));
});
