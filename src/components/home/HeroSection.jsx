import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
  <section className="hero-section on-navy" aria-labelledby="hero-title">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <span className="section-label on-navy">CANADA'S TRUSTED HR PARTNER</span>

          <h1 id="hero-title" className="hero-title">
            HR That Works <em>as Hard as You Do.</em>
          </h1>

          <p className="hero-description hero-subtext">
            FABZ HR Consulting partners with businesses, families, and individuals to deliver expert HR solutions — from recruitment and executive search and fractional HR leadership to global mobility and career coaching. Built on trust. Delivered with accountability.
          </p>

          <div className="hero-buttons cta-group rise-in rise-in-3">
            <Link to="/book-demo" className="btn btn-primary btn-lg">
              Book a Free HR Health Check <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#services" className="btn btn-ghost-white btn-lg">
              Explore Our Services
            </a>
          </div>

          <ul className="hero-chips rise-in rise-in-4" aria-label="Highlights">
            <li className="chip"><span aria-hidden="true">🇨🇦</span> Based in Canada</li>
            <li className="chip"><span aria-hidden="true">🌍</span> Global Reach</li>
            <li className="chip">14+ Years Experience</li>
          </ul>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/images/fabz-door.webp"
            alt="FABZ HR open door and opportunity symbol"
            width="560"
            height="793"
            className="hero-image"
            fetchpriority="high"
            decoding="async"
          />
          <p className="hero-tagline">People. Potential. Possibility.</p>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .hero-section {
        display: flex;
        align-items: center;
        padding: 110px 0;
        position: relative;
        overflow: hidden;
        color: var(--cream);
        /* Solid navy with a soft cream glow behind the artwork — text sits on navy (15:1) */
        background:
          radial-gradient(circle at 78% 45%, var(--cream-15) 0, transparent 38%),
          var(--navy);
      }
      .hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 4rem;
      }
      .hero-text {
        flex: 0 0 58%;
      }
      .hero-image-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .hero-title {
        margin-bottom: 24px;
        color: var(--cream);
        font-size: clamp(36px, 5.6vw, 72px);
      }
      .hero-title em {
        font-style: normal;
        color: var(--lime);
      }
      .hero-description {
        font-size: 1.125rem;
        color: var(--cream-80);
        max-width: 90%;
      }
      .hero-buttons {
        margin-bottom: 3rem;
      }
      .hero-chips {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .chip {
        background: var(--cream-15);
        border: 1px solid var(--cream-15);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-family: var(--font-heading);
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--cream);
      }
      .hero-image {
        width: auto;
        max-height: 460px;
        height: auto;
        animation: float 8s ease-in-out infinite;
        filter: drop-shadow(0 25px 30px rgba(11, 32, 48, 0.6));
      }
      .hero-tagline {
        margin-top: 1.25rem;
        font-family: var(--font-heading);
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--lime);
        text-align: center;
      }

      @media (max-width: 1024px) {
        .hero-text { flex: 0 0 60%; }
      }

      @media (max-width: 768px) {
        .hero-section {
          padding: 60px 0;
        }
        .hero-content {
          flex-direction: column;
          text-align: center;
          gap: 2.5rem;
        }
        .hero-text, .hero-image-wrapper {
          flex: 0 0 100%;
          width: 100%;
        }
        .hero-description {
          max-width: 100%;
        }
        .hero-buttons, .hero-chips {
          justify-content: center;
        }
        .hero-image { max-height: 300px; }
      }
      @media (max-width: 576px) {
        .hero-buttons {
          flex-direction: column;
          width: 100%;
        }
        .hero-buttons .btn {
          width: 100%;
          justify-content: center;
        }
      }
    ` }} />
  </section>
);

export default HeroSection;
