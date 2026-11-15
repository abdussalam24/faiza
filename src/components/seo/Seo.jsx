import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../../config/site';

const DEFAULT_IMAGE = '/og-image.png';

/**
 * Per-page <head>: title, description, canonical, Open Graph, Twitter Card and JSON-LD.
 * Rendered into static HTML at build time by scripts/prerender.mjs.
 */
const Seo = ({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false, jsonLd = [], type = 'website', canonical: withCanonical = true }) => {
  const canonical = `${SITE.url}${path === '/' ? '/' : path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;
  const schemas = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {withCanonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.legalName} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.legalName} — ${SITE.tagline}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${SITE.legalName} — ${SITE.tagline}`} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
