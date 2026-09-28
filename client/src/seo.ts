import { site, pages } from './seo-config';

export function seoForPath(path: string) {
  const pathname = path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const page = pages[pathname];
  const title = page?.title ?? `ページを確認してください｜${site.name}`;
  const description = page?.description ?? '';
  const url = page?.canonical ?? `${site.origin}${pathname}`;
  const image = new URL(page?.image ?? site.image, site.origin).href;
  const noindex = !page || !!page.noindex;
  const graph: Record<string, unknown>[] = noindex ? [] : [
    { '@type': 'Organization', '@id': 'https://earthguide.tabigaku.party/#organization', name: 'あーすガイド', url: 'https://earthguide.tabigaku.party/' },
    { '@type': 'WebSite', '@id': `${site.origin}/#website`, name: site.name, alternateName: site.alternateName, url: `${site.origin}/`, inLanguage: 'ja', publisher: { '@id': 'https://earthguide.tabigaku.party/#organization' } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, name: title, description, url, inLanguage: 'ja', isPartOf: { '@id': `${site.origin}/#website` }, primaryImageOfPage: { '@type': 'ImageObject', url: image } },
  ];
  if (!noindex && pathname !== '/') graph.push({
    '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: site.name, item: `${site.origin}/` },
      { '@type': 'ListItem', position: 2, name: page.label, item: url },
    ],
  });
  return { pathname, title, description, url, image, noindex, robots: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large', jsonLd: { '@context': 'https://schema.org', '@graph': graph } };
}

export const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function seoHead(path: string) {
  const s = seoForPath(path), e = escapeHtml;
  const tags = [
    `<title>${e(s.title)}</title>`,
    `<meta name="description" content="${e(s.description)}">`,
    `<meta name="robots" content="${e(s.robots)}">`,
    ...(!s.noindex ? [`<link rel="canonical" href="${e(s.url)}">`] : []),
    ...Object.entries({ 'og:title': s.title, 'og:description': s.description, 'og:url': s.url, 'og:image': s.image, 'og:type': 'website', 'og:site_name': site.name, 'og:locale': 'ja_JP' }).map(([k,v]) => `<meta property="${k}" content="${e(v)}">`),
    ...Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': s.title, 'twitter:description': s.description, 'twitter:image': s.image }).map(([k,v]) => `<meta name="${k}" content="${e(v)}">`),
  ];
  if (!s.noindex) tags.push(`<script type="application/ld+json" data-site-seo="true">${JSON.stringify(s.jsonLd).replace(/</g, '\\u003c')}</script>`);
  return tags.join('\n');
}

export function applySeo(path: string) {
  const s = seoForPath(path);
  document.title = s.title;
  const set = (kind: 'name' | 'property', key: string, value: string) => {
    const all = [...document.head.querySelectorAll<HTMLMetaElement>(`meta[${kind}="${key}"]`)];
    const el = all.shift() ?? document.head.appendChild(document.createElement('meta'));
    el.setAttribute(kind, key); el.content = value; all.forEach(e => e.remove());
  };
  set('name', 'description', s.description); set('name', 'robots', s.robots);
  for (const [k,v] of Object.entries({ 'og:title': s.title, 'og:description': s.description, 'og:url': s.url, 'og:image': s.image, 'og:type': 'website', 'og:site_name': site.name, 'og:locale': 'ja_JP' })) set('property', k, v);
  for (const [k,v] of Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': s.title, 'twitter:description': s.description, 'twitter:image': s.image })) set('name', k, v);
  const links = [...document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')];
  if (s.noindex) links.forEach(e => e.remove());
  else { const el = links.shift() ?? document.head.appendChild(document.createElement('link')); el.rel = 'canonical'; el.href = s.url; links.forEach(e => e.remove()); }
  document.head.querySelectorAll('script[type="application/ld+json"]').forEach(e => e.remove());
  if (!s.noindex) { const el = document.createElement('script'); el.type = 'application/ld+json'; el.dataset.siteSeo = 'true'; el.textContent = JSON.stringify(s.jsonLd); document.head.appendChild(el); }
}
