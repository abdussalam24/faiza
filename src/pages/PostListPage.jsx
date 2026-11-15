import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema } from '../components/seo/schema';
import { getPosts, formatDate } from '../data/posts';
import { SITE } from '../config/site';

const COPY = {
  blog: {
    path: '/blog',
    name: 'Blog',
    title: 'HR Insights & Blog',
    subtitle: 'Practical guidance on HR, hiring, careers and global mobility from the FABZ HR team.',
    seoTitle: 'HR Blog & Insights | FABZ HR International Inc.',
    description: 'Practical articles on HR, recruitment, career growth and global mobility from FABZ HR International Inc., an Ontario HR consultancy based in Toronto.',
    empty: 'New articles are on the way. Check back soon.',
    other: { to: '/announcements', label: 'See company announcements' },
  },
  announcement: {
    path: '/announcements',
    name: 'Announcements',
    title: 'Announcements',
    subtitle: 'News and updates from FABZ HR International Inc.',
    seoTitle: 'Announcements & News | FABZ HR International Inc.',
    description: 'The latest news, service updates and announcements from FABZ HR International Inc., an HR consultancy registered in Toronto, Ontario, Canada.',
    empty: 'There are no announcements yet. Check back soon.',
    other: { to: '/blog', label: 'Read our HR blog' },
  },
};

const PostListPage = ({ type }) => {
  const c = COPY[type];
  const posts = getPosts(type);
  const Icon = type === 'announcement' ? Megaphone : BookOpen;

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'announcement' ? 'CollectionPage' : 'Blog',
    name: c.title,
    url: `${SITE.url}${c.path}`,
    publisher: { '@type': 'Organization', name: SITE.legalName },
    ...(type === 'blog'
      ? { blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE.url}${p.path}`, datePublished: p.date })) }
      : {}),
  };

  return (
    <>
      <Seo title={c.seoTitle} description={c.description} path={c.path} jsonLd={[breadcrumbSchema([{ name: c.name, path: c.path }]), listSchema]} />
      <PageHero eyebrow="RESOURCES" title={c.title} subtitle={c.subtitle} breadcrumbs={[{ name: c.name }]} />

      <section className="section-wrapper" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          {posts.length === 0 ? (
            <p className="posts-empty">{c.empty}</p>
          ) : (
            <ul className="posts-grid">
              {posts.map((p, i) => (
                <AnimatedSection as="li" key={p.slug} delay={i * 0.05}>
                  <article className="post-card">
                    <div className="post-card-meta">
                      <span className="post-card-type"><Icon size={14} aria-hidden="true" /> {c.name === 'Blog' ? 'Article' : 'Announcement'}</span>
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                    </div>
                    <h2 className="post-card-title">
                      <Link to={p.path}>{p.title}</Link>
                    </h2>
                    {p.excerpt && <p className="post-card-excerpt">{p.excerpt}</p>}
                    <span className="post-card-more" aria-hidden="true">
                      Read more <ArrowRight size={16} />
                    </span>
                  </article>
                </AnimatedSection>
              ))}
            </ul>
          )}
          <p className="posts-other">
            <Link to={c.other.to} className="text-link">{c.other.label} →</Link>
          </p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .posts-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .post-card {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: var(--cream);
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          border-radius: 16px;
          padding: 1.75rem;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .post-card:hover {
          border-color: var(--navy);
          border-top-color: var(--lime);
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
        }
        .post-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 0.9rem;
        }
        .post-card-type {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.72rem;
          color: var(--navy);
        }
        .post-card-title {
          font-size: 1.35rem;
          text-align: left;
          margin: 0 0 0.75rem;
          max-width: none;
          line-height: 1.3;
        }
        /* Whole card is clickable via the title link */
        .post-card-title a::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
        }
        .post-card-title a { min-height: 0; }
        .post-card-title a:focus-visible { outline: none; box-shadow: none; }
        .post-card:focus-within {
          outline: 3px solid var(--lime);
          outline-offset: 2px;
          box-shadow: 0 0 0 2px var(--navy);
        }
        .post-card-excerpt {
          color: var(--navy-80);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.25rem;
        }
        .post-card-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--navy);
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }
        .posts-empty {
          text-align: center;
          color: var(--navy-80);
          font-size: 1.1rem;
          padding: 3rem 0;
        }
        .posts-other {
          text-align: center;
          margin-top: 3rem;
        }
        @media (max-width: 576px) {
          .posts-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </>
  );
};

export default PostListPage;
