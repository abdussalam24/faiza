import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import EnquiryForm, { HOME_SERVICE_OPTIONS } from '../forms/EnquiryForm';
import { SITE } from '../../config/site';

const QuickEnquiryForm = () => {
  return (
    <section id="enquiry" className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }} aria-labelledby="enquiry-title">
      <div className="container">
        <div className="enquiry-grid">
          <AnimatedSection className="enquiry-text">
            <h2 id="enquiry-title" className="enquiry-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>Have a Question? Let's Talk.</h2>
            <p className="enquiry-desc section-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
              Whether you need immediate staffing support or are looking for long-term HR leadership, our team is ready to help you navigate your challenges.
            </p>
            <div className="enquiry-contact-info">
              <p><strong>Email:</strong> <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p><strong>Location:</strong> {SITE.location}</p>
              <p className="enquiry-response">{SITE.responseTime}.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="enquiry-form-wrapper" delay={0.2}>
            <EnquiryForm
              id="home-enquiry"
              variant="compact"
              services={HOME_SERVICE_OPTIONS}
              subject="New website enquiry — FABZ HR (Homepage)"
            />
          </AnimatedSection>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .enquiry-grid {
          display: flex;
          gap: 4rem;
          align-items: center;
        }
        .enquiry-text {
          flex: 1;
        }
        .enquiry-form-wrapper {
          flex: 1;
          background-color: var(--cream);
          padding: 32px;
          border-radius: 16px;
          border: 1px solid var(--line);
          box-shadow: var(--shadow-card);
        }
        .enquiry-title {
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--navy);
        }
        .enquiry-contact-info p {
          margin-bottom: 0.5rem;
          color: var(--navy-80);
        }
        .enquiry-contact-info strong { color: var(--navy); }
        .enquiry-response {
          margin-top: 1rem;
          display: inline-block;
          border-left: 3px solid var(--lime);
          padding-left: 10px;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .enquiry-grid {
            flex-direction: column;
            gap: 3rem;
          }
          .enquiry-text, .enquiry-form-wrapper {
            width: 100%;
          }
          .enquiry-text {
            text-align: center;
          }
          .enquiry-title, .enquiry-desc {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .enquiry-contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 576px) {
          .enquiry-form-wrapper { padding: 22px; }
        }
      ` }} />
    </section>
  );
};

export default QuickEnquiryForm;
