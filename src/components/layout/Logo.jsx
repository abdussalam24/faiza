import React from 'react';
import { SITE } from '../../config/site';

/** Brand logo. variant="light" = cream/gold reverse for navy surfaces; "color" = original full-colour. */
const Logo = ({ variant = 'light', height = 56, className = '', priority = false }) => {
  const base = variant === 'light' ? '/logo-white' : '/logo';
  return (
    <picture>
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img
        src={`${base}.png`}
        alt={`${SITE.legalName} — ${SITE.tagline}`}
        width="1200"
        height="398"
        className={className}
        style={{ height, width: 'auto' }}
        decoding="async"
        fetchpriority={priority ? 'high' : undefined}
      />
    </picture>
  );
};

export default Logo;
