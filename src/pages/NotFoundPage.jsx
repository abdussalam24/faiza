import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/seo/Seo';
import { StatusStyles } from './ThankYouPage';
import { SERVICES } from '../data/services';

/**
 * Prerendered to dist/404.html; Vercel serves it with a real HTTP 404 status
 * for any URL that doesn't match a static page.
 */
const NotFoundPage = () => (
  <>
    <Seo
      title="Page Not Found | FABZ HR Consulting"
      description="The page you were looking for could not be found. Explore FABZ HR services: recruitment, fractional HR, global mobility and career coaching in Canada."
      path="/404"
      noindex
      canonical={false}
    />
    <section className="status-page">
      <div className="container status-inner">
        <p className="status-code" aria-hidden="true">4<span>0</span>4</p>
        <h1 className="status-title">Page not found</h1>
        <p className="status-copy">
          Sorry, we couldn't find that page. It may have moved, or the link may be mistyped. Try one of our services below.
        </p>
        <ul className="status-links">
          {SERVICES.map((s) => (
            <li key={s.path}>
              <Link to={s.path}>
                <strong>{s.name}</strong>
                <span>{s.short}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="status-actions">
          <Link to="/book-demo" className="btn btn-primary">
            Book a Free Consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/" className="btn btn-ghost">Back to Home</Link>
        </div>
      </div>
    </section>
    <StatusStyles />
  </>
);

export default NotFoundPage;
