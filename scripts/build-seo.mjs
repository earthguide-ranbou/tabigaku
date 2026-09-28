import { build } from 'esbuild';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd(), output = path.join(root, 'dist/public');
const temporary = path.join(root, 'dist/.seo-build');
await mkdir(temporary, { recursive: true });
try {
  await build({
    entryPoints: ['client/src/seo-render.tsx'], outfile: path.join(temporary, 'render.mjs'),
    bundle: true, platform: 'node', format: 'esm', packages: 'external', jsx: 'automatic',
    alias: { '@': path.join(root, 'client/src'), '@shared': path.join(root, 'shared') },
    loader: { '.css': 'empty' },
    define: { 'import.meta.env': JSON.stringify({ BASE_URL: '/', MODE: 'production', PROD: true, DEV: false, SSR: true }), 'process.env.NODE_ENV': '"production"' },
    logLevel: 'warning',
  });
  const { renderPage, site, pages, seoHead, seoForPath } = await import(pathToFileURL(path.join(temporary, 'render.mjs')).href);
  const original = await readFile(path.join(output, 'index.html'), 'utf8');
  const stripHead = html => html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:[^"']+|twitter:[^"']+)["'][^>]*>/gi, '')
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');
  const template = stripHead(original);
  if (!/<div id="root"><\/div>/.test(template)) throw new Error('Expected the original empty app root before prerendering');
  await writeFile(path.join(output, 'app-shell.html'), template.replace('</head>', `${seoHead('/__app-shell')}\n</head>`));
  for (const route of Object.keys(pages)) {
    const html = await renderPage(route);
    if (!html.trim()) throw new Error(`Empty page: ${route}`);
    const rendered = template.replace('</head>', `${seoHead(route)}\n</head>`).replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
    const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    await mkdir(path.dirname(path.join(output, filename)), { recursive: true });
    await writeFile(path.join(output, filename), rendered);
  }
  const errorPage = template.replace('</head>', `${seoHead('/404')}\n</head>`).replace('<div id="root"></div>', '<div id="root"><main><h1>ページが見つかりません</h1><p>URLをご確認ください。</p><a href="/">ホームに戻る</a></main></div>');
  await writeFile(path.join(output, '404.html'), errorPage);
  const urls = Object.keys(pages).filter(route => !seoForPath(route).noindex).map(route => seoForPath(route).url);
  const xmlEscape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${xmlEscape(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${site.origin}/sitemap.xml\n`;
  for (const dir of [output, path.join(root, 'client/public')]) { await writeFile(path.join(dir, 'sitemap.xml'), sitemap); await writeFile(path.join(dir, 'robots.txt'), robots); }
  await writeFile(path.join(root, 'dist/seo-audit.json'), JSON.stringify({ origin: site.origin, indexedRoutes: Object.keys(pages).filter(route => !pages[route].noindex), generatedRoutes: Object.keys(pages) }, null, 2));
  console.log(`SEO: ${Object.keys(pages).length} public HTML pages generated; ${urls.length} canonical URLs in sitemap.`);
} finally { await rm(temporary, { recursive: true, force: true }); }
