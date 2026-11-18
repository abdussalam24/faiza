import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Instagram, Clock, CalendarCheck, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import FAQAccordion from '../components/ui/FAQAccordion';
import EnquiryForm, { CONTACT_SERVICE_OPTIONS } from '../components/forms/EnquiryForm';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema, faqSchema } from '../components/seo/schema';
import { SITE } from '../config/site';
import BookingCalendar from '../components/booking/BookingCalendar';

/** ?service=… values accepted for preselecting the dropdown (e.g. from "Partner with us"). */
const SERVICE_PARAM = {
  partnership: 'Vendor / Partnership',
  vendor: 'Vendor / Partnership',
  'recruitment-executive-search': 'Recruitment & Executive Search',
  recruitment: 'Recruitment & Executive Search',
  'fractional-hr': 'Fractional HR',
  'global-mobility': 'Global Mobility',
  'career-services': 'Career Services',
  'career-coaching': 'Career Services',
  other: 'Other',
};

const faqs = [
  { q: 'How quickly will you respond to my enquiry?', a: 'We reply within 1 business day. If your matter is urgent, please mention it in your message.' },
  { q: 'Is the first consultation really free?', a: 'Yes. The first discovery call is free and carries no obligation. It is a chance to understand your needs and explain how we can help.' },
  { q: 'Do you work with clients outside Ontario?', a: 'Yes. We are based in Ontario and work with clients across Canada. Global mobility and career services clients can be located anywhere, as sessions are held by video call.' },
  { q: 'How do I apply for a job through FABZ HR?', a: 'Please use the application form on our Careers page rather than this contact form. We keep candidate profiles on file and reach out when a suitable role comes up.' },
  { q: 'Can my organization partner with FABZ HR?', a: 'We welcome vendors and service partners. Choose "Vendor / Partnership" in the form and tell us about your organization, your capabilities and how you would like to work together.' },
];

const ContactPage = () => {
  const location = useLocation();
  const [preselect, setPreselect] = useState('');

  // Read ?service= after hydration so prerendered HTML and first client render match.
  useEffect(() => {
    const value = new URLSearchParams(location.search).get('service');
    if (!value) return;
    const mapped = SERVICE_PARAM[value.toLowerCase()] || CONTACT_SERVICE_OPTIONS.find((o) => o === value);
    if (mapped) setPreselect(mapped);
  }, [location.search]);

  return (
    <>
      <Seo
        title="Contact FABZ HR | HR Consulting in Ontario, Canada"
        description="Contact FABZ HR about recruitment, fractional HR, global mobility, career services or partnerships. Email us or send a message. We reply in 1 business day."
        path="/contact"
        jsonLd={[breadcrumbSchema([{ name: 'Contact', path: '/contact' }]), faqSchema(faqs)]}
      />

      <PageHero
        eyebrow="CONTACT"
        title="Let's Talk About What You Need"
        subtitle="Tell us about your HR, staffing, mobility or career goals and we'll point you to the right next step. No pressure, no obligation."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      {/* Form + contact cards */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container contact-grid">
          <AnimatedSection className="contact-form-card" id="contact-form">
            <h2 className="contact-h2">Send an Enquiry</h2>
            <p className="contact-form-intro">Fill in the form and we'll get back to you within 1 business day.</p>
            <EnquiryForm
              id="contact"
              variant="full"
              services={CONTACT_SERVICE_OPTIONS}
              defaultService={preselect}
              subject="New website enquiry — FABZ HR (Contact page)"
              submitLabel="Send Enquiry"
            />
          </AnimatedSection>

          <AnimatedSection className="contact-cards" delay={0.15}>
            <h2 className="sr-only">Contact details</h2>
            <ul>
              <li className="contact-card">
                <span className="contact-card-icon"><Mail size={22} aria-hidden="true" /></span>
                <div>
                  <h3>Email</h3>
                  <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li className="contact-card">
                <span className="contact-card-icon"><MapPin size={22} aria-hidden="true" /></span>
                <div>
                  <h3>Location</h3>
                  <p>{SITE.location}</p>
                  <p className="contact-card-small">{SITE.registration}</p>
                  <p className="contact-card-small">{SITE.recruiterLicence.label}{SITE.recruiterLicence.number && ` · No. ${SITE.recruiterLicence.number}`}</p>
                </div>
              </li>
              <li className="contact-card">
                <span className="contact-card-icon"><Linkedin size={22} aria-hidden="true" /></span>
                <div>
                  <h3>LinkedIn</h3>
                  <a className="text-link" href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">
                    Follow FABZ HR<span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                  </a>
                </div>
              </li>
              <li className="contact-card">
                <span className="contact-card-icon"><Instagram size={22} aria-hidden="true" /></span>
                <div>
                  <h3>Instagram</h3>
                  <a className="text-link" href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">
                    @fabzhrinternational<span className="sr-only"> on Instagram (opens in a new tab)</span>
                  </a>
                </div>
              </li>
              <li className="contact-card contact-card--highlight">
                <span className="contact-card-icon"><Clock size={22} aria-hidden="true" /></span>
                <div>
                  <h3>Response time</h3>
                  <p>{SITE.responseTime}.</p>
                </div>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map-section" style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="map-title">
        <div className="container">
          <h2 id="map-title" className="contact-h2 text-center" style={{ margin: '0 auto 1.5rem' }}>Serving Ontario and Clients Across Canada</h2>
          <div className="map-frame">
            <iframe
              title="Map of Ontario, Canada"
              src="https://www.google.com/maps?q=Ontario,+Canada&z=5&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Discovery call */}
      <section className="section-wrapper discovery-section on-navy" aria-labelledby="discovery-title">
        <div className="container discovery-grid">
          <AnimatedSection>
            <span className="section-label on-navy">FREE DISCOVERY CALL</span>
            <h2 id="discovery-title" className="discovery-title">Book a Free Discovery Call</h2>
            <p className="discovery-copy">
              Prefer to talk it through? Book a free 30-minute online meeting with Faiza. We'll understand your situation, answer your questions and suggest the right next step.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            {/* Live booking calendar (same as /book-demo). Until Microsoft 365 is connected, the card below shows instead. */}
            <BookingCalendar
              fallback={
                <div className="scheduler-placeholder">
                  <CalendarCheck size={40} aria-hidden="true" />
                  <h3>Request a time that suits you</h3>
                  <p>Send us your preferred date and time and we'll confirm your call by email.</p>
                  <Link to="/book-demo" className="btn btn-primary">
                    Request a Discovery Call <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              }
            />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="contact-h2">Frequently Asked Questions</h2>
          </AnimatedSection>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-form-card {
          background: var(--cream);
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: var(--shadow-card);
          scroll-margin-top: 110px;
        }
        .contact-h2 {
          font-size: clamp(26px, 3vw, 36px);
          text-align: left;
          margin: 0 0 0.5rem;
        }
        .text-center.contact-h2, .text-center .contact-h2 { text-align: center; margin-left: auto; margin-right: auto; }
        .contact-form-intro {
          color: var(--navy-80);
          margin-bottom: 1.5rem;
        }
        .contact-cards ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: var(--cream);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
        }
        .contact-card h3 {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.25rem;
        }
        .contact-card p { color: var(--navy); line-height: 1.6; }
        .contact-card .text-link { overflow-wrap: anywhere; font-size: 1.05rem; }
        .contact-card-small { font-size: 0.9rem; color: var(--muted) !important; margin-top: 0.25rem; }
        .contact-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--navy);
          color: var(--lime);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .contact-card--highlight {
          background: var(--navy);
          border-color: var(--navy);
        }
        .contact-card--highlight h3 { color: var(--lime); }
        .contact-card--highlight p { color: var(--cream); font-weight: 600; }
        .contact-card--highlight .contact-card-icon { background: var(--lime); color: var(--navy); }

        .contact-map-section { padding: 5rem 0; }
        .map-frame {
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .map-frame iframe {
          display: block;
          width: 100%;
          height: 420px;
          border: 0;
        }

        .discovery-section {
          background: var(--navy);
          color: var(--cream);
        }
        .discovery-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.5fr);
          gap: 3rem;
          align-items: center;
        }
        .discovery-title {
          color: var(--cream);
          text-align: left;
          margin: 0 0 1rem;
          font-size: clamp(28px, 3.4vw, 40px);
        }
        .discovery-copy { color: var(--cream-80); }
        .scheduler-placeholder {
          background: var(--cream);
          color: var(--navy);
          border-radius: 16px;
          border: 2px dashed var(--line);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .scheduler-placeholder h3 { font-size: 1.4rem; }
        .scheduler-placeholder p { color: var(--navy-80); margin-bottom: 0.5rem; }

        @media (max-width: 992px) {
          .contact-grid, .discovery-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
          .contact-form-card { padding: 1.5rem; }
          .map-frame iframe { height: 320px; }
          .contact-map-section { padding: 3.5rem 0; }
        }
      ` }} />
    </>
  );
};

export default ContactPage;
