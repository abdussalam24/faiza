import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const FounderSpotlight = () => {
  return (
    <section className="section-wrapper" style={{ backgroundColor: 'var(--surface-alt)' }} aria-labelledby="founder-title">
      <div className="container">
        <div className="founder-grid">
          <AnimatedSection className="founder-image-col">
            <div className="founder-image-wrapper">
              <img
                src="/faiza.webp"
                alt="Portrait of Faiza Hussain, founder of FABZ HR"
                width="720"
                height="720"
                loading="lazy"
                decoding="async"
                className="founder-image"
              />
              <div className="founder-image-border" aria-hidden="true"></div>
              <div className="frosted-credential">
                <div className="cred-years">14+ Years Experience</div>
                <div className="cred-stars"><span aria-hidden="true">★★★★★ </span>Director-Level HR</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="founder-text-col" delay={0.2}>
            <span className="section-label">MEET THE FOUNDER</span>
            <h2 id="founder-title" className="founder-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>14 Years of HR Excellence Behind Every Engagement</h2>
            <div className="founder-bio section-subtext" style={{ marginLeft: 0, textAlign: 'left', marginBottom: '32px' }}>
              <p>
                Faiza Hussain brings over 14 years of diverse experience, with more than 6 years in leadership capacity, in establishing and revitalizing HR operations to achieve organizational objectives.
              </p>
              <p style={{ marginTop: '16px' }}>
                She has managed HR functions for companies ranging from large enterprises with over 1,000 employees to startups with as few as 10 employees, working both as a direct employee and on a project basis.
              </p>
            </div>

            <ul className="founder-stats" aria-label="Founder highlights">
              <li><strong>14+</strong><span>years in HR</span></li>
              <li><strong>6+</strong><span>years in leadership</span></li>
              <li><strong>10 – 1,000+</strong><span>employee organizations</span></li>
            </ul>

            <ul className="founder-badges" aria-label="Credentials">
              <li className="badge">EMBA — IoBM</li>
              <li className="badge">BBA — Toronto</li>
              <li className="badge">PICG Certified</li>
            </ul>

            <Link to="/about" className="btn btn-ghost">
              Read Faiza's Full Story <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .founder-grid {
          display: flex;
          align-items: center;
          gap: 5rem;
        }
        .founder-image-col {
          flex: 0 0 40%;
        }
        .founder-text-col {
          flex: 1;
        }
        .founder-image-wrapper {
          position: relative;
        }
        .founder-image {
          border-radius: 16px;
          width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          aspect-ratio: 3/4;
          object-fit: cover;
        }
        .founder-image-border {
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          border: 3px solid var(--lime);
          border-radius: 16px;
          z-index: 1;
        }
        .founder-title {
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--navy);
        }
        .founder-stats {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem 2.5rem;
          margin-bottom: 1.75rem;
        }
        .founder-stats strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--navy);
          line-height: 1.1;
        }
        .founder-stats span {
          font-size: 0.9rem;
          color: var(--muted);
        }
        .founder-badges {
          list-style: none;
          display: flex;
          gap: 1rem;
          margin: 0 0 2rem 0;
          flex-wrap: wrap;
        }
        .badge {
          background-color: var(--cream);
          border: 1.5px solid var(--navy);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy);
        }
        .frosted-credential {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--navy);
          color: var(--cream);
          border-left: 4px solid var(--lime);
          border-radius: 12px;
          padding: 16px 20px;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(11, 32, 48, 0.3);
        }
        .cred-years {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .cred-stars {
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--lime);
        }

        @media (max-width: 992px) {
          .founder-grid {
            flex-direction: column;
            gap: 4rem;
          }
          .founder-image-col {
            width: 80%;
            margin: 0 auto;
          }
          .founder-text-col {
            text-align: center;
            width: 100%;
          }
          .founder-title, .founder-bio {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .founder-badges, .founder-stats {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .founder-image-col {
            width: 100%;
          }
          .founder-image {
            width: 100%;
            max-height: 320px;
            object-fit: cover;
            object-position: top;
            aspect-ratio: auto;
          }
        }
      ` }} />
    </section>
  );
};

export default FounderSpotlight;
