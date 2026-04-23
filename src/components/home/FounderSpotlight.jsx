import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const FounderSpotlight = () => {
  return (
    <section className="section-wrapper" style={{ backgroundColor: '#FFF8F5' }}>
      <div className="container">
        <div className="founder-grid">
          <AnimatedSection className="founder-image-col">
            <div className="founder-image-wrapper">
              <img 
                src="/faiza.png" 
                alt="Faiza Hussain" 
                className="founder-image"
              />
              <div className="founder-image-border"></div>
              <div className="frosted-credential">
                <div className="cred-years">14+ Years Experience</div>
                <div className="cred-stars">★★★★★ Director-Level HR</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="founder-text-col" delay={0.2}>
            <span className="section-label">MEET THE FOUNDER</span>
            <h2 className="founder-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>14 Years of HR Excellence Behind Every Engagement</h2>
            <div className="founder-bio section-subtext" style={{ marginLeft: 0, textAlign: 'left', marginBottom: '32px' }}>
              <p>
                Faiza Hussain brings over 14 years of diverse experience, with more than 6 years in leadership capacity, in establishing and revitalizing HR operations to achieve organizational objectives.
              </p>
              <p style={{ marginTop: '16px' }}>
                She has managed HR functions for companies ranging from large enterprises with over 1,000 employees to startups with as few as 10 employees, working both as a direct employee and on a project basis.
              </p>
            </div>
            
            <div className="founder-badges">
              <span className="badge">EMBA — IoBM</span>
              <span className="badge">BBA — Toronto</span>
              <span className="badge">PICG Certified</span>
            </div>
            
            <Link to="/about" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: '44px' }}>
              Read Faiza's Full Story <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        .founder-grid {
          display: flex;
          align-items: center;
          gap: 5rem;
        }
        .founder-image-col {
          flex: 0 0 40%;
        }
        .founder-text-col {
          flex: 0 0 60%;
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
          border: 2px solid var(--brand-orange);
          border-radius: 16px;
          z-index: 1;
        }
        .founder-title {
          font-size: 2.5rem;
          color: var(--text-heading);
        }
        .founder-badges {
          display: flex;
          gap: 1rem;
          margin: 0 0 2rem 0;
          flex-wrap: wrap;
        }
        .badge {
          background-color: #FFFFFF;
          border: 1px solid var(--brand-orange);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.2s ease;
          cursor: default;
        }
        .badge:hover {
          background-color: var(--brand-orange);
          color: white;
        }
        .frosted-credential {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: rgba(232,70,26,0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: white;
          border-radius: 12px;
          padding: 16px 20px;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(232,70,26,0.3);
        }
        .cred-years {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .cred-stars {
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 1px;
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
          .founder-badges {
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
            aspect-ratio: auto;
          }
        }
        @media (max-width: 576px) {
          .founder-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FounderSpotlight;
