/**
 * Blog posts and announcements live as Markdown files in src/content/posts/.
 * File name = URL slug. Front matter (between the --- lines) sets the metadata:
 *
 *   ---
 *   title: My post title
 *   date: 2026-11-16
 *   type: blog            # blog | announcement
 *   excerpt: One or two sentences shown on the listing page and in search results.
 *   author: Faiza Hussain # optional
 *   draft: true           # optional — drafts are not published
 *   ---
 *   The post body in Markdown…
 *
 * Markdown is converted to HTML at build time by the plugin in vite.config.js.
 */
const files = import.meta.glob('../content/posts/*.md', { import: 'default', eager: true });

const toPost = (path, mod) => {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  const type = mod.type === 'announcement' ? 'announcement' : 'blog';
  return {
    slug,
    type,
    title: mod.title || slug,
    date: mod.date || '1970-01-01',
    excerpt: mod.excerpt || '',
    author: mod.author || 'FABZ HR International Inc.',
    draft: mod.draft === 'true',
    readingMinutes: mod.readingMinutes || 1,
    path: `/${type === 'announcement' ? 'announcements' : 'blog'}/${slug}`,
    html: mod.html,
  };
};

const ALL = Object.entries(files)
  .map(([path, mod]) => toPost(path, mod))
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPosts = (type) => (type ? ALL.filter((p) => p.type === type) : ALL);
export const getPost = (type, slug) => ALL.find((p) => p.type === type && p.slug === slug);

/** Format an ISO date (YYYY-MM-DD) without time-zone drift, e.g. "November 16, 2026". */
export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};
