import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, MapPin, Phone, Mail, Building2, BadgeCheck } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../../config/site';
import { SERVICES } from '../../data/services';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        {/* Col 1 — brand */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo" aria-label={`${SITE.legalName} — home`}>
            <Logo variant="color" height={72} />
          </Link>
          <p className="footer-tagline">{SITE.tagline}</p>
          <p className="footer-desc">
            HR consulting for organizations and professionals — recruitment and executive search, fractional HR, global mobility and career coaching.
          </p>
          <a
            href={SITE.social.linkedin}
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FABZ HR on LinkedIn (opens in a new tab)"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </div>

        {/* Col 2 — services */}
        <nav className="footer-col" aria-labelledby="footer-services">
          <h2 className="footer-title" id="footer-services">Services</h2>
          <ul className="footer-links">
            {SERVICES.map((s) => (
              <li key={s.path}><Link to={s.path}>{s.name}</Link></li>
            ))}
          </ul>
        </nav>

        {/* Col 3 — company */}
        <nav className="footer-col" aria-labelledby="footer-company">
          <h2 className="footer-title" id="footer-company">Company</h2>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/book-demo">Book a Consultation</Link></li>
          </ul>
        </nav>

        {/* Col 4 — contact */}
        <div className="footer-col">
          <h2 className="footer-title">Contact</h2>
          <ul className="contact-info">
            <li>
              <Mail size={18} className="contact-icon" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" aria-hidden="true" />
              <a href={`tel:${SITE.phone.href}`}>{SITE.phone.display}</a>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" aria-hidden="true" />
              <span>{SITE.location}</span>
            </li>
            <li>
              <Building2 size={18} className="contact-icon" aria-hidden="true" />
              <span>{SITE.registration}</span>
            </li>
            <li>
              <BadgeCheck size={18} className="contact-icon" aria-hidden="true" />
              <span>
                {SITE.recruiterLicence.label}
                {SITE.recruiterLicence.number && <> · No. {SITE.recruiterLicence.number}</>}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>&copy; {SITE.copyrightYear} {SITE.legalName}</p>
        <ul className="footer-legal">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/accessibility">Accessibility</Link></li>
          <li><a href="/sitemap.xml">Sitemap</a></li>
        </ul>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .footer {
        background-color: var(--navy);
        color: var(--cream-80);
        padding-top: 5rem;
        border-top: 4px solid var(--lime);
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr 1.5fr;
        gap: 3rem;
        margin-bottom: 4rem;
      }
      /* Same full-colour logo as the header, on a cream plate so it reads on navy */
      .footer-logo {
        display: inline-flex;
        margin-bottom: 1.25rem;
        background: var(--cream);
        padding: 10px 16px;
        border-radius: 10px;
        border-bottom: 3px solid var(--lime);
      }
      .footer-tagline {
        font-family: var(--font-heading);
        font-weight: 700;
        color: var(--lime);
        letter-spacing: 0.04em;
        margin-bottom: 0.75rem;
      }
      .footer-desc {
        color: var(--cream-80);
        font-size: 0.95rem;
        line-height: 1.65;
        margin-bottom: 1.25rem;
        max-width: 340px;
      }
      .footer-social {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid var(--cream-15);
        color: var(--cream);
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
      .footer-social:hover {
        background-color: var(--lime);
        border-color: var(--lime);
        color: var(--navy);
      }
      .footer-title {
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin: 0 0 1.25rem;
        max-width: none;
        text-align: left;
        color: var(--cream);
        padding-bottom: 0.6rem;
        position: relative;
      }
      .footer-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 30px;
        height: 3px;
        border-radius: 2px;
        background-color: var(--lime);
      }
      .footer-links, .contact-info, .footer-legal {
        list-style: none;
      }
      .footer-links li {
        margin-bottom: 0.35rem;
      }
      .footer-links a, .contact-info a {
        color: var(--cream-80);
        font-size: 0.95rem;
        transition: color 0.2s;
        display: inline-flex;
        align-items: center;
        min-height: 36px;
      }
      .footer-links a:hover, .contact-info a:hover, .footer-legal a:hover {
        color: var(--lime);
      }
      .contact-info li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 0.6rem;
        font-size: 0.95rem;
        line-height: 1.5;
      }
      .contact-info li > span { padding-top: 8px; }
      .contact-info li a { min-height: 36px; overflow-wrap: anywhere; }
      .contact-icon {
        color: var(--lime);
        flex-shrink: 0;
        margin-top: 9px;
      }
      .footer-bottom {
        border-top: 1px solid var(--cream-15);
        padding: 1.25rem 0;
        font-size: 0.875rem;
      }
      .footer-bottom-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }
      /* keep legal links clear of the chat launcher (bottom-right) */
      @media (min-width: 577px) { .footer-legal { margin-right: 170px; } }
      .footer-legal {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem 1.25rem;
      }
      .footer-legal a {
        color: var(--cream-80);
        min-height: 36px;
        display: inline-flex;
        align-items: center;
      }

      @media (max-width: 992px) {
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
        .footer-brand {
          grid-column: 1 / -1;
        }
      }
      @media (max-width: 576px) {
        .footer { padding-top: 3.5rem; padding-bottom: 72px; }
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 2.25rem;
        }
        .footer-bottom-inner {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    ` }} />
  </footer>
);

export default Footer;
