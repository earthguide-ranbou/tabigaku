import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const destinations = {
  "/": "odygMT3",
  "/guide": "odygMT3",
  "/award": "odygMT3",
  "/sponsor": "odygMT3",
  "/saijai": "odygMT3",
  "/earth-family": "odygMT3",
  "/henro": "odygMT3",
  "/henro-shinsoku": "p3CvLfQ",
  "/juku": "p3CvLfQ",
  "/thai": "p3CvLfQ",
  "/thai-2027": "p3CvLfQ",
  "/efj": "N9eyIcP",
};

// LINE share links have a different purpose and are deliberately excluded.
const accountLinks = html => [
  ...html.matchAll(
    /<a\b(?=[^>]*\bhref="https:\/\/(?:lin\.ee\/|line\.me\/(?:R\/)?ti\/p\/))[^>]*>[\s\S]*?<\/a>/g
  ),
];
const brandImages = html => [
  ...html.matchAll(/<img\b[^>]*\bsrc="\/images\/line-brand-icon\.png"[^>]*>/g),
];

for (const [route, account] of Object.entries(destinations)) {
  const file = route === "/" ? "index" : route.slice(1);
  const html = await readFile(`dist/public/${file}.html`, "utf8");
  const floaters = [
    ...html.matchAll(
      /<aside\b[^>]*class="line-consult-floating[^>]*>([\s\S]*?)<\/aside>/g
    ),
  ];
  assert.equal(floaters.length, 1, `${route}: one floating consultation icon`);
  const links = accountLinks(html);
  assert.equal(links.length, 1, `${route}: exactly one official-account CTA`);
  const link = links[0][0];
  assert.ok(floaters[0][1].includes(link), `${route}: CTA is the floating icon`);
  assert.ok(link.includes(`href="https://lin.ee/${account}"`), `${route}: preserved account`);
  assert.match(link, /target="_blank"/);
  assert.match(link, /rel="noopener noreferrer"/);
  assert.match(link, /aria-label="公式LINE（新しいタブで開きます）"/);
  assert.equal(link.replace(/<[^>]*>/g, "").trim(), "", `${route}: icon has no visible label`);
  assert.equal(brandImages(html).length, 1, `${route}: one LINE logo, including decoration`);
  assert.match(link, /<img\b(?=[^>]*\balt="")(?=[^>]*\bwidth="40")(?=[^>]*\bheight="40")[^>]*>/);
  assert.doesNotMatch(floaters[0][1], /<button\b|<svg\b/, `${route}: no extra close or arrow icon`);
  assert.doesNotMatch(html, /class="line-consult-(?:prompt|close)\b/, `${route}: no empty consultation panel or close control`);
  assert.match(html, /href="\/line-consult.css"/);
}

for (const file of ["earth-family-journey", "404"]) {
  const html = await readFile(`dist/public/${file}.html`, "utf8");
  assert.doesNotMatch(html, /class="line-consult-floating/, `${file}: no unrelated overlay`);
  assert.equal(accountLinks(html).length, 0, `${file}: no duplicate account CTA`);
}
const spring = await readFile("dist/public/efj.html", "utf8");
assert.match(spring, /src="https:\/\/earthguide.tabigaku.party\/forms\/efj-spring-2027"/);
assert.ok((await readFile("dist/public/images/line-brand-icon.png")).length > 0);

console.log(
  "LINE consultation checks passed: one accessible official icon per 12 pages, preserved accounts, no repeated CTA/label/close controls, and iframe/404 exclusions."
);
