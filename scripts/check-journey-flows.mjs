import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const root = 'dist/public';
const audit = JSON.parse(await readFile('dist/seo-audit.json', 'utf8'));
let references = 0;
for (const route of audit.generatedRoutes) {
  const html = await readFile(path.join(root, route === '/' ? 'index.html' : route.slice(1) + '.html'), 'utf8');
  assert.match(html, /<h1[\s>]/, `${route}: readable page heading`);
  assert.ok(!/%VITE_[A-Z_]+%/.test(html), `${route}: unresolved environment placeholder`);
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const [tag] of html.matchAll(/<(?:img|script|source|video|link)\b[^>]*>/g)) {
    if (tag.startsWith('<img')) assert.match(tag, /\balt="[^"]*"/, `${route}: image alt text`);
    const url = tag.match(/\bsrc="([^"]+)"/)?.[1] ?? (tag.startsWith('<link') && /rel="(?:stylesheet|preload|modulepreload)"/.test(tag) ? tag.match(/\bhref="([^"]+)"/)?.[1] : null);
    if (!url?.startsWith('/') || url.startsWith('//') || url.startsWith('/_vercel/')) continue;
    references++;
    await access(path.join(root, url.split(/[?#]/)[0])).catch(() => { throw Error(`${route}: missing asset ${url}`); });
  }
  for (const match of html.matchAll(/<a\b[^>]*href="#([^"]+)"/g)) {
    assert.ok(ids.has(match[1]), `${route}: missing anchor #${match[1]}`);
  }
}

// Exercise the exact standalone-page calculator without DOM, network, or mail.
const thai = await readFile('client/public/thai-2027.html', 'utf8');
const cfgStart = thai.indexOf('  const CFG = {');
const cfgEnd = thai.indexOf('  // ================================================================================', cfgStart);
const stateStart = thai.indexOf("  const S = { course: 'A'");
const calcEnd = thai.indexOf('  function renderSim()', stateStart);
assert.ok(cfgStart >= 0 && cfgEnd > cfgStart && stateStart > cfgEnd && calcEnd > stateStart, 'calculator extraction bounds');
const context = vm.createContext({});
vm.runInContext(`${thai.slice(cfgStart, cfgEnd)}\n${thai.slice(stateStart, calcEnd)}\nglobalThis.qa = {CFG,S,calc};`, context);
const { CFG, S, calc } = context.qa;
for (const course of ['A', 'B', 'SPECIAL']) {
  S.course = course; S.adult = 1; S.kid = 0; S.infant = 0; S.dao = false;
  assert.equal(calc(true).total, CFG[course].sup + 30000);
  assert.equal(calc(false).total - calc(true).total, 20000);
  S.kid = 1; assert.equal(calc(true).total, 30000 + CFG[course].sup * 1.5);
  S.infant = 1; assert.equal(calc(true).infantFee, 0);
  S.infant = 2; assert.equal(calc(true).infantFee, CFG[course].infant);
  S.dao = true; S.daoPlan = 'lite'; S.daoType = null; assert.equal(calc(true).dao, 22000);
  S.adult = 1; S.kid = 0; S.infant = 0; assert.equal(calc(true).dao, 11000);
}

// A copied or new-tab application URL must carry the current simulator state.
const links = [
  { href: 'https://earthguide.tabigaku.party/forms/efj-thai-2027?course=A', dataset: {}, hasAttribute: key => key === 'data-from-sim' },
  { href: 'https://earthguide.tabigaku.party/forms/efj-thai-2027?course=B', dataset: {course:'B'}, hasAttribute: () => false },
];
context.URL = URL;
context.document = { querySelectorAll: selector => selector === 'a[data-apply]' ? links : [] };
const syncStart = thai.indexOf('  function updateApplicationLinks()');
const syncEnd = thai.indexOf("  document.querySelectorAll('[role=", syncStart);
assert.ok(syncStart > 0 && syncEnd > syncStart);
vm.runInContext(thai.slice(syncStart, syncEnd), context);
S.course = 'SPECIAL'; S.adult = 1; S.kid = 1; S.infant = 2; S.dao = true; S.daoPlan = 'std'; S.daoType = 'family';
vm.runInContext('updateApplicationLinks()', context);
let application = new URL(links[0].href);
assert.equal(application.searchParams.get('course'), 'SPECIAL');
assert.equal(application.searchParams.get('adults'), '1');
assert.equal(application.searchParams.get('children'), '1');
assert.equal(application.searchParams.get('infants'), '2');
assert.equal(application.searchParams.get('daoPlan'), 'std');
assert.equal(new URL(links[1].href).searchParams.get('course'), 'B');
S.dao = false; vm.runInContext('updateApplicationLinks()', context);
assert.equal(new URL(links[0].href).searchParams.has('daoPlan'), false);
assert.equal(new URL(links[0].href).searchParams.has('daoType'), false);
assert.match(thai, /updateApplicationLinks\(\);\s*\}\s*document\.querySelectorAll\('\.step button'\)/);

// Fixed Juku CTA starts hidden and only appears between the hero and full CTA.
const juku = await readFile('client/src/pages/Juku.tsx', 'utf8');
assert.match(juku, /hidden=\{!showSticky\}/);
const effectStart = juku.indexOf('  useEffect(() => {', juku.indexOf('const [showSticky'));
const effectEnd = juku.indexOf('  useEffect(() => {', effectStart + 1);
let sticky = false, observed = [], callback, disconnected = false;
const hero = {}, apply = {};
const observerContext = vm.createContext({
  document: { querySelector: () => hero, getElementById: () => apply },
  window: { IntersectionObserver: true },
  IntersectionObserver: class { constructor(cb) { callback = cb; } observe(el) { observed.push(el); } disconnect() { disconnected = true; } },
  setShowSticky: value => { sticky = value; },
  useEffect: effect => { observerContext.cleanup = effect(); },
});
vm.runInContext(juku.slice(effectStart, effectEnd), observerContext);
assert.equal(sticky, false); assert.equal(observed.length, 2);
callback([{target:hero,isIntersecting:false}]); assert.equal(sticky, true);
callback([{target:apply,isIntersecting:true}]); assert.equal(sticky, false);
callback([{target:apply,isIntersecting:false}]); assert.equal(sticky, true);
callback([{target:hero,isIntersecting:true}]); assert.equal(sticky, false);
observerContext.cleanup(); assert.equal(disconnected, true);
console.log(`Journey checks passed: ${audit.generatedRoutes.length} headings/anchors, ${references} local assets, calculator boundaries and Juku CTA visibility. No production submissions or mail.`);
