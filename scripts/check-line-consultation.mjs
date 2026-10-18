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

for (const [route, account] of Object.entries(destinations)) {
  const file = route === "/" ? "index" : route.slice(1);
  const html = await readFile(`dist/public/${file}.html`, "utf8");
  const floaters = [
    ...html.matchAll(
      /<aside\b[^>]*class="line-consult-floating[^>]*>([\s\S]*?)<\/aside>/g
    ),
  ];
  assert.equal(
    floaters.length,
    1,
    `${route}: exactly one consultation control`
  );
  const link = floaters[0][1].match(/<a\b[^>]*>/)?.[0];
  assert.ok(link, `${route}: native anchor`);
  assert.ok(
    link.includes(`href="https://lin.ee/${account}"`),
    `${route}: preserved account`
  );
  assert.match(link, /target="_blank"/);
  assert.match(link, /rel="noopener noreferrer"/);
  assert.match(floaters[0][1], /aria-label="固定のLINE相談ボタンを閉じる"/);
  assert.match(html, /href="\/line-consult.css"/);
}

for (const file of ["earth-family-journey", "404"]) {
  const html = await readFile(`dist/public/${file}.html`, "utf8");
  assert.doesNotMatch(
    html,
    /class="line-consult-floating/,
    `${file}: no unrelated or duplicate floating CTA`
  );
}
const home = await readFile("dist/public/index.html", "utf8");
const spring = await readFile("dist/public/efj.html", "utf8");
assert.match(home, /自分に合う旅をLINEで相談する/);
assert.match(home, /初参加の不安をLINEで相談する/);
assert.match(spring, /参加のかたちをLINEで相談する/);
assert.match(
  spring,
  /src="https:\/\/earthguide.tabigaku.party\/forms\/efj-spring-2027"/
);
console.log(
  "LINE consultation checks passed: 12 page-specific destinations, secure native links, dismiss controls, inline prompts and iframe/404 exclusions."
);
