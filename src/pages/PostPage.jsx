import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema } from '../components/seo/schema';
import { getPost, formatDate } from '../data/posts';
import { SITE } from '../config/site';
import NotFoundPage from './NotFoundPage';

const SECTION = {
  blog: { name: 'Blog', path: '/blog', back: 'All articles' },
  announcement: { name: 'Announcements', path: '/announcements', back: 'All announcements' },
};

const PostPage = ({ type }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(type, slug);
  if (!post) return <NotFoundPage />;
  const section = SECTION[type];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'announcement' ? 'NewsArticle' : 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE.url}${post.path}`,
    mainEntityOfPage: `${SITE.url}${post.path}`,
    image: `${SITE.url}/og-image.png`,
    author: post.author === SITE.legalName
      ? { '@type': 'Organization', name: SITE.legalName }
      : { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: SITE.legalName, logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` } },
  };

  // Internal links inside the Markdown body navigate client-side instead of reloading the page.
  const onBodyClick = (e) => {
    const a = e.target.closest('a');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <>
      <Seo
        title={`${post.title} | FABZ HR International Inc.`}
        description={post.excerpt || SITE.description}
        path={post.path}
        type="article"
        jsonLd={[breadcrumbSchema([{ name: section.name, path: section.path }, { name: post.title, path: post.path }]), articleSchema]}
      />

      <PageHero
        eyebrow={type === 'announcement' ? 'ANNOUNCEMENT' : 'BLOG'}
        title={post.title}
        breadcrumbs={[{ name: section.name, path: section.path }, { name: post.title }]}
        door={false}
      >
        <p className="post-byline">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {type === 'blog' && (<><span aria-hidden="true">·</span><span>{post.readingMinutes} min read</span></>)}
        </p>
      </PageHero>

      <section className="post-section">
        <div className="container">
          <article className="post-body" onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="post-footer">
            <Link to={section.path} className="btn btn-ghost">
              <ArrowLeft size={16} aria-hidden="true" /> {section.back}
            </Link>
            <Link to="/hr-health-check" className="btn btn-primary">
              Free HR Health Check <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .post-byline {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          color: var(--cream-80);
          margin-bottom: 1.25rem;
          font-size: 0.98rem;
        }
        .post-section {
          background: var(--cream);
          padding: 4rem 0 6rem;
        }
        .post-body {
          max-width: 740px;
          margin: 0 auto;
          color: var(--navy-80);
          font-size: 1.1rem;
        }
        .post-body > * + * { margin-top: 1.1rem; }
        .post-body p, .post-body li { line-height: 1.8; }
        .post-body h2 {
          font-size: clamp(24px, 3vw, 30px);
          text-align: left;
          margin: 2.5rem 0 0.25rem;
          max-width: none;
        }
        .post-body h3 { font-size: 1.25rem; margin-top: 2rem; }
        .post-body ul, .post-body ol { padding-left: 1.4rem; }
        .post-body li + li { margin-top: 0.4rem; }
        .post-body li::marker { color: var(--navy); }
        .post-body strong { color: var(--navy); }
        .post-body a {
          color: var(--navy);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        .post-body blockquote {
          border-left: 4px solid var(--lime);
          background: var(--surface-alt);
          padding: 1rem 1.25rem;
          border-radius: 8px;
        }
        .post-body img { border-radius: 12px; }
        .post-body em { color: var(--muted); }
        .post-footer {
          max-width: 740px;
          margin: 3.5rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
      ` }} />
    </>
  );
};

export default PostPage;
