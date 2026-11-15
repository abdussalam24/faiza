import React, { useEffect, useRef, useState } from 'react';

/**
 * Fades children up when scrolled into view. CSS-driven (see animations.css):
 * server-rendered HTML is fully visible; hiding only applies once JS runs.
 */
const AnimatedSection = ({ children, className = '', delay = 0, style, as: Tag = 'div', ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: delay ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
