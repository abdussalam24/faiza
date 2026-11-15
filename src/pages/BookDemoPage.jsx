import React, { useEffect, useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Seo from '../components/seo/Seo';
import { breadcrumbSchema } from '../components/seo/schema';
import FormSubmitFields from '../components/forms/FormSubmitFields';
import { FORMS, SITE } from '../config/site';

const SERVICE_CHOICES = ['Recruitment & Executive Search', 'Fractional HR', 'Global Mobility', 'Career Coaching', 'Not Sure Yet'];

const BookDemoPage = () => {
  const [services, setServices] = useState([]);
  const [serviceError, setServiceError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [minDate, setMinDate] = useState('');

  // Computed after mount so the prerendered HTML doesn't bake in the build date.
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split('T')[0]);
    const reset = () => setSubmitting(false);
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);

  const toggleService = (value) => {
    setServiceError(false);
    setServices((prev) => (prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]));
  };

  const onSubmit = (e) => {
    if (services.length === 0) {
      e.preventDefault();
      setServiceError(true);
      document.getElementById('book-service-first')?.focus();
      return;
    }
    setSubmitting(true);
  };

  return (
    <>
      <Seo
        title="Book a Consultation | FABZ HR International Inc."
        description="Schedule a free 30-minute discovery call or HR health check with Faiza Hussain. No obligation, just clarity on your HR, staffing or career challenges."
        path="/book-demo"
        jsonLd={breadcrumbSchema([{ name: 'Book a Consultation', path: '/book-demo' }])}
      />

      <section className="section-wrapper booking-section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="booking-grid">

            {/* Left Column */}
            <AnimatedSection className="booking-info">
              <span className="section-label">FREE DISCOVERY CALL</span>
              <h1 className="booking-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>Let's Talk About Your HR Needs</h1>
              <p className="booking-desc section-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
                In 30 minutes, we'll understand your challenges, explain how FABZ can help, and outline next steps — with no pressure and no obligation.
              </p>

              <ul className="booking-checklist">
                <li><span className="check" aria-hidden="true">✓</span> 30-minute focused conversation</li>
                <li><span className="check" aria-hidden="true">✓</span> Identify your biggest HR challenge</li>
                <li><span className="check" aria-hidden="true">✓</span> Discover which service is right for you</li>
                <li><span className="check" aria-hidden="true">✓</span> Walk through engagement options and timelines</li>
                <li><span className="check" aria-hidden="true">✓</span> Meet Faiza directly — no gatekeepers</li>
              </ul>

              <div className="booking-founder">
                <img
                  src="/faiza-avatar.webp"
                  alt="Faiza Hussain"
                  width="160"
                  height="160"
                  loading="lazy"
                  decoding="async"
                  className="booking-avatar"
                />
                <div>
                  <strong>Faiza Hussain</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Founder & Principal HR Consultant</p>
                </div>
              </div>

              <div className="booking-fallback">
                Prefer email? <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <br />
                Prefer to call? <a className="text-link" href={`tel:${SITE.phone.href}`}>{SITE.phone.display}</a>
              </div>
            </AnimatedSection>

            {/* Right Column (Form) */}
            <AnimatedSection className="booking-form-wrapper" delay={0.2}>
              <form action={FORMS.action} method="POST" className="booking-form" onSubmit={onSubmit}>
                <FormSubmitFields subject="New consultation booking request — FABZ HR" />
                <input type="hidden" name="service" value={services.join(', ')} />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="book-fullName">Full Name <span aria-hidden="true">*</span></label>
                    <input id="book-fullName" type="text" name="fullName" autoComplete="name" required aria-required="true" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-email">Email Address <span aria-hidden="true">*</span></label>
                    <input id="book-email" type="email" name="email" autoComplete="email" required aria-required="true" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <span className="label-text" id="book-phone-label">Phone Number <span aria-hidden="true">*</span></span>
                    <div className="phone-row" role="group" aria-labelledby="book-phone-label">
                      <label htmlFor="book-countryCode" className="sr-only">Country calling code</label>
                      <input id="book-countryCode" type="text" name="countryCode" defaultValue="+1" inputMode="tel" autoComplete="tel-country-code" pattern="\+?[0-9]{1,4}" maxLength={5} title="Country calling code, e.g. +1" required aria-required="true" />
                      <label htmlFor="book-phone" className="sr-only">Phone number with area code</label>
                      <input id="book-phone" type="tel" name="phone" autoComplete="tel-national" required aria-required="true" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-company">Company / Organization</label>
                    <input id="book-company" type="text" name="company" placeholder="Or 'Individual' if personal" autoComplete="organization" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="book-employees">Number of Employees</label>
                  <select id="book-employees" name="employees" defaultValue="">
                    <option value="">Select size</option>
                    <option value="1-10">1–10</option>
                    <option value="10-50">10–50</option>
                    <option value="50-100">50–100</option>
                    <option value="100-500">100–500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <fieldset className="form-group" aria-describedby={serviceError ? 'book-service-error' : undefined}>
                  <legend>Service You're Interested In <span aria-hidden="true">*</span><span className="sr-only">(choose at least one)</span></legend>
                  <div className="checkbox-grid">
                    {SERVICE_CHOICES.map((s, i) => (
                      <label key={s} className="checkbox-label">
                        <input
                          id={i === 0 ? 'book-service-first' : undefined}
                          type="checkbox"
                          value={s}
                          checked={services.includes(s)}
                          onChange={() => toggleService(s)}
                        />{' '}
                        {s}
                      </label>
                    ))}
                  </div>
                  {serviceError && <span id="book-service-error" className="error-text" role="alert">Please select at least one service.</span>}
                </fieldset>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="book-date">Preferred Date <span aria-hidden="true">*</span></label>
                    <input id="book-date" type="date" name="preferredDate" min={minDate || undefined} required aria-required="true" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-time">Preferred Time <span aria-hidden="true">*</span></label>
                    <select id="book-time" name="preferredTime" defaultValue="" required aria-required="true">
                      <option value="">Select time</option>
                      <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
                      <option value="Afternoon (12pm–4pm)">Afternoon (12pm–4pm)</option>
                      <option value="Evening (4pm–6pm)">Evening (4pm–6pm)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="book-timezone">Your Timezone <span aria-hidden="true">*</span></label>
                    <select id="book-timezone" name="timezone" defaultValue="" required aria-required="true">
                      <option value="">Select timezone</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      <option value="PST">PST</option>
                      <option value="GMT">GMT</option>
                      <option value="GST">GST (UAE)</option>
                      <option value="PKT">PKT</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-source">How Did You Hear About Us?</label>
                    <select id="book-source" name="source" defaultValue="">
                      <option value="">Select source</option>
                      <option value="Google">Google</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="book-message">Brief Description of Your Need</label>
                  <textarea id="book-message" name="message" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full btn-submit" disabled={submitting} style={{ width: '100%' }}>
                  {submitting ? 'Submitting…' : 'Confirm My Booking Request'}
                </button>
                <p className="form-note">
                  We'll confirm your slot by email. {SITE.responseTime}.
                </p>
              </form>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .booking-section {
          padding-top: 6rem !important;
          padding-bottom: 6rem !important;
        }
        .booking-grid {
          display: flex;
          gap: 5rem;
          align-items: flex-start;
        }
        .booking-info {
          flex: 0 0 40%;
        }
        .booking-form-wrapper {
          flex: 1;
          background-color: var(--cream);
          padding: 3rem;
          border-radius: 16px;
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          box-shadow: var(--shadow-card);
        }
        .booking-title {
          font-size: clamp(32px, 4vw, 48px);
          color: var(--navy);
        }
        .booking-desc {
          margin-bottom: 2.5rem;
        }
        .booking-checklist {
          list-style: none;
          margin-bottom: 3rem;
          padding: 0;
        }
        .booking-checklist li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: var(--navy-80);
        }
        .check {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--lime);
          color: var(--navy);
          font-weight: 800;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-size: 0.85rem;
        }
        .booking-founder {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: var(--cream);
          border: 1px solid var(--line);
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        .booking-founder strong { font-family: var(--font-heading); color: var(--navy); }
        .booking-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--lime);
        }
        .booking-fallback {
          color: var(--navy-80);
          font-size: 0.95rem;
          line-height: 2;
        }

        .booking-form label, .booking-form .label-text, .booking-form legend {
          display: block;
          margin-bottom: 0.5rem;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--navy);
        }
        .booking-form fieldset { border: 0; }
        .booking-form .phone-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0.5rem;
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .form-row .form-group {
          flex: 1;
          min-width: 0;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .checkbox-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .booking-form .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1rem;
          color: var(--navy-80);
          cursor: pointer;
          min-height: 40px;
          margin: 0;
        }
        .checkbox-label input {
          width: 20px;
          height: 20px;
          accent-color: var(--navy);
          margin: 0;
        }
        .error-text {
          color: var(--navy);
          font-weight: 700;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          display: block;
          border-left: 3px solid var(--navy);
          padding-left: 8px;
        }
        .btn-submit {
          padding: 1rem;
          font-size: 1.1rem;
        }
        .booking-form .form-note {
          margin-top: 0.85rem;
          font-size: 0.85rem;
          color: var(--muted);
        }

        @media (max-width: 992px) {
          .booking-grid {
            flex-direction: column;
            gap: 4rem;
          }
          .booking-info, .booking-form-wrapper {
            flex: 1;
            width: 100%;
          }
          .booking-form-wrapper {
            padding: 1.5rem;
          }
          .form-row {
            flex-direction: column;
            gap: 0;
          }
        }
        @media (max-width: 576px) {
          .checkbox-grid {
            grid-template-columns: 1fr;
          }
          .booking-section { padding-top: 3rem !important; padding-bottom: 3rem !important; }
        }
      ` }} />
    </>
  );
};

export default BookDemoPage;
