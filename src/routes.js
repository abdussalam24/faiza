/**
 * Every route that gets prerendered to static HTML at build time.
 * `sitemap: false` keeps utility pages out of sitemap.xml.
 * Add new pages here AND in App.jsx.
 */
import { getPosts } from './data/posts';

export const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/recruitment-executive-search', changefreq: 'monthly', priority: '0.9' },
  { path: '/fractional-hr', changefreq: 'monthly', priority: '0.9' },
  { path: '/global-mobility', changefreq: 'monthly', priority: '0.9' },
  { path: '/career-services', changefreq: 'monthly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/hr-health-check', changefreq: 'monthly', priority: '0.8' },
  { path: '/book-demo', changefreq: 'monthly', priority: '0.7' },
  { path: '/careers', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/accessibility', changefreq: 'yearly', priority: '0.3' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/announcements', changefreq: 'weekly', priority: '0.6' },
  // Every published post (src/content/posts/*.md) is prerendered and added to the sitemap automatically.
  ...getPosts().map((p) => ({ path: p.path, changefreq: 'monthly', priority: '0.6', lastmod: p.date })),
  { path: '/thank-you', sitemap: false },
];

/** Rendered to dist/404.html — Vercel serves it with a real 404 status for unknown URLs. */
export const NOT_FOUND_RENDER_PATH = '/__not-found__';
