import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/** Back-to-top button. Sits above the chat launcher (bottom-right). */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`scroll-top ${isVisible ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        tabIndex={isVisible ? 0 : -1}
        aria-hidden={!isVisible}
      >
        <ArrowUp size={22} aria-hidden="true" />
      </button>
      <style dangerouslySetInnerHTML={{ __html: `
        .scroll-top {
          position: fixed;
          right: clamp(14px, 2vw, 30px);
          bottom: calc(clamp(14px, 2vw, 26px) + 64px);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--cream);
          color: var(--navy);
          border: 1.5px solid var(--navy);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px var(--navy-12);
          z-index: 998;
          opacity: 0;
          transform: scale(0.6);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, background-color 0.2s;
        }
        .scroll-top.is-visible {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .scroll-top:hover {
          background-color: var(--lime);
        }
      ` }} />
    </>
  );
};

export default ScrollToTop;
