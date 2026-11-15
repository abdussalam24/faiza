import React, { useEffect, useState } from 'react';

/**
 * Responsive Google Form embed inside a branded card, with a loading state.
 * The iframe mounts after hydration so its onLoad always fires (prerendered HTML shows the loader).
 *
 * embedUrl  — the form's ?embedded=true URL
 * publicUrl — the normal /viewform URL (no-JS and "open in new tab" fallback)
 */
const GoogleFormEmbed = ({ embedUrl, publicUrl, title, heading, headingId, loadingText = 'Loading the form…', height = 1200, mobileHeight = 1400 }) => {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="gform-card">
      {heading && <h2 id={headingId} className="gform-title">{heading}</h2>}
      <div className="gform-wrap" aria-busy={!loaded}>
        {!loaded && (
          <div className="gform-loading" role="status">
            <span className="gform-spinner" aria-hidden="true" />
            <span>{loadingText}</span>
          </div>
        )}
        {mounted && (
          <iframe
            src={embedUrl}
            title={title}
            className={`gform-iframe ${loaded ? 'is-loaded' : ''}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          >
            Loading…
          </iframe>
        )}
        <noscript>
          <p className="gform-noscript">
            <a className="text-link" href={publicUrl}>Open the form in Google Forms</a>
          </p>
        </noscript>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gform-card {
          max-width: 860px;
          margin: 0 auto;
          background: var(--cream);
          border: 1px solid var(--line);
          border-top: 4px solid var(--lime);
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          padding: 2rem 1rem 1rem;
        }
        .gform-title {
          font-size: clamp(24px, 3vw, 32px);
          margin-bottom: 1rem;
        }
        .gform-wrap {
          position: relative;
          min-height: ${height}px;
        }
        .gform-iframe {
          display: block;
          width: 100%;
          height: ${height}px;
          min-height: ${height}px;
          border: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: var(--cream);
        }
        .gform-iframe.is-loaded { opacity: 1; }
        .gform-loading {
          position: absolute;
          inset: 0 0 auto 0;
          padding-top: 6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--muted);
          font-family: var(--font-heading);
          font-weight: 600;
        }
        .gform-spinner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 4px solid var(--line);
          border-top-color: var(--navy);
          border-right-color: var(--lime);
          animation: gform-spin 0.9s linear infinite;
        }
        @keyframes gform-spin { to { transform: rotate(360deg); } }
        .gform-noscript { text-align: center; padding: 2rem; }
        @media (max-width: 768px) {
          .gform-card { padding: 1.5rem 0.25rem 0.5rem; border-radius: 12px; }
          .gform-title { padding: 0 1rem; }
          .gform-wrap, .gform-iframe { min-height: ${mobileHeight}px; height: ${mobileHeight}px; }
        }
      ` }} />
    </div>
  );
};

export default GoogleFormEmbed;
