import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Handshake, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

/* "For organizations" pathways from www.fabzhr.com: hire FABZ HR, or partner with us. */
const PartnerStrip = () => (
  <section className="section-wrapper partner-section" style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="partner-title">
    <div className="container">
      <AnimatedSection className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
        <span className="section-label">FOR ORGANIZATIONS</span>
        <h2 id="partner-title">Let's build what comes next.</h2>
        <p className="section-subtext" style={{ marginTop: '1rem', marginBottom: 0 }}>
          Tell us what your organization needs, or connect with us about a partnership.
        </p>
      </AnimatedSection>

      <div className="partner-grid">
        <AnimatedSection className="partner-card">
          <div className="partner-icon"><Users size={24} aria-hidden="true" /></div>
          <h3>Hire FABZ HR</h3>
          <p>Get practical support for your people and talent priorities — from a single HR audit to an ongoing fractional HR partnership.</p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Request a consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </AnimatedSection>

        <AnimatedSection className="partner-card partner-card--dark" delay={0.1}>
          <div className="partner-icon"><Handshake size={24} aria-hidden="true" /></div>
          <h3>Partner with us</h3>
          <p>Are you a vendor or service partner? Introduce your organization, your capabilities, and how we could work together.</p>
          <Link to="/contact?service=partnership#contact-form" className="btn btn-primary">
            Send a partnership enquiry <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <small>Opens the enquiry form with Vendor / Partnership selected.</small>
        </AnimatedSection>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .partner-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      .partner-card {
        border: 1px solid var(--line);
        border-radius: 16px;
        padding: 2.25rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: var(--cream);
      }
      .partner-card h3 { font-size: 1.6rem; margin: 1rem 0 0.5rem; }
      .partner-card p { color: var(--navy-80); margin-bottom: 1.5rem; flex: 1; }
      .partner-card small { display: block; margin-top: 0.75rem; color: var(--muted); font-size: 0.85rem; }
      .partner-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: var(--navy);
        color: var(--lime);
        display: grid;
        place-items: center;
      }
      .partner-card--dark { background: var(--navy); border-color: var(--navy); }
      .partner-card--dark h3 { color: var(--cream); }
      .partner-card--dark p { color: var(--cream-80); }
      .partner-card--dark small { color: var(--cream-70); }
      .partner-card--dark .partner-icon { background: var(--cream-15); }
      @media (max-width: 768px) {
        .partner-grid { grid-template-columns: 1fr; }
        .partner-card { padding: 1.75rem; }
      }
    ` }} />
  </section>
);

export default PartnerStrip;
