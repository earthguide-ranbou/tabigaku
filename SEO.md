# SEO maintenance

Public page metadata is defined in `client/src/seo-config.ts`. The production build renders the actual React page content into HTML, then generates canonical metadata, structured data, robots.txt and sitemap.xml. The same manifest controls client navigation.

- Run the existing build; `scripts/check-seo.mjs` is a required build gate.
- Add new public routes to the manifest and explicit `vercel.json` rewrites. Unknown URLs should remain real 404s.
- Preserve existing API routes, authentication, security headers, customer data and form behavior. Transactional and administrator pages use noindex and stay outside the sitemap.
- Use accurate visible content. Do not invent reviews, availability, offers, opening hours or search actions.
- Submit `/sitemap.xml` under the canonical domain in Google Search Console after owner sign-in and ownership verification; inspect the homepage and main program pages. No Search Console submission has been claimed or automated by this code.
- Search position depends on Google; metadata and sitemap changes do not guarantee ranking or indexing.

## October 2026 quality checks

- `/earth-family-journey` preserves its embedded experience and a direct-open fallback. Its canonical points to the official `https://dao.tabigaku.party/`; the wrapper stays out of this domain's sitemap.
- The standalone Thai 2027 page receives metadata from the same manifest as its structured data at build time. Do not promise specific village workshops that remain subject to local arrangements.
- `scripts/check-journey-flows.mjs` is also a required build gate: headings, local assets, image alternatives, fragment links, Thai calculator cases, and Juku fixed-action visibility. These are offline checks, not proof of production form/email delivery.
- External Asumeru forms are administered separately. Sponsor: `no=fmefIRnMo`; children’s henro: `no=fncikq`; shinsoku henro: `no=fkdlxy`. Do not infer their email templates from public form HTML.

## 2026-10-24: homepage identity and editorial handoff

- The homepage opening identifies the location and subject (children's nature experiences and travel learning). A visible FAQ explains what travel learning means using the existing walking/camping program.
- Homepage editorial text lives in `client/src/data/home-copy.json`; metadata and React content use the same source. See `docs/claude-content-workflow.md` for the owner-mediated Claude/ChatGPT round trip and conflict checks.
- Organization structured data identifies 旅する学校 at its own canonical URL, with the public 神山町 location and contact details. No school accreditation, rating, stock, fake testimonials or rich-result eligibility claims are added.
- The October 2026 children's henro description is marked as a completed program. Existing archive content and links to current journeys remain available.
- Direct `.html` aliases redirect permanently to their clean public URLs. Existing www normalization, Google verification, sitemap, unknown-page 404s and other routes remain intact.
- Google Search Console ownership/sitemap submission had prior owner-workflow records, but this release does not claim a fresh submission, live performance measurement or a ranking increase. Evaluate Google results separately after recrawling.
