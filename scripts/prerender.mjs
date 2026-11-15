/**
 * Static prerender (runs after `vite build` + the SSR build — see `npm run build`).
 *
 *  - Renders every route in src/routes.js to real HTML with its own <head>
 *    (title, description, canonical, OG/Twitter, JSON-LD) → dist/<route>.html
 *  - Renders the not-found page → dist/404.html (Vercel serves it with HTTP 404)
 *  - Writes dist/sitemap.xml and dist/robots.txt
 */
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

let template = await readFile(path.join(dist, 'index.html'), 'utf8');

// Inline the (small) global stylesheet to remove a render-blocking request.
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssLink) {
  const css = await readFile(path.join(dist, cssLink[1]), 'utf8');
  template = template.replace(cssLink[0], () => `<style>${css}</style>`);
}
const { render, ROUTES, NOT_FOUND_RENDER_PATH, SITE } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const fill = (url) => {
  const { html, head } = render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

const outFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

for (const { path: route } of ROUTES) {
  const file = path.join(dist, outFile(route));
  await mkdir(path.dirname(file), { recursive: true });
  const html = fill(route);
  await writeFile(file, html);
  console.log(`  prerendered ${route.padEnd(18)} → dist/${outFile(route)}`);
  // A route with child pages (e.g. /blog and /blog/my-post) also gets blog/index.html,
  // so /blog resolves correctly whether the host prefers the file or the folder.
  if (route !== '/' && ROUTES.some((r) => r.path.startsWith(`${route}/`))) {
    await mkdir(path.join(dist, route.slice(1)), { recursive: true });
    await writeFile(path.join(dist, route.slice(1), 'index.html'), html);
  }
}

await writeFile(path.join(dist, '404.html'), fill(NOT_FOUND_RENDER_PATH));
console.log('  prerendered 404                → dist/404.html');

// sitemap.xml ---------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => r.sitemap !== false)
  .map(
    (r) => `  <url>
    <loc>${SITE.url}${r.path}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n');
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

// robots.txt ----------------------------------------------------------------
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /thank-you\n\nSitemap: ${SITE.url}/sitemap.xml\n`
);
console.log('  wrote sitemap.xml + robots.txt');

await rm(ssrDir, { recursive: true, force: true });
