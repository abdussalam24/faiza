import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

export { ROUTES, NOT_FOUND_RENDER_PATH } from './routes.js';
export { SITE } from './config/site.js';

/** Render one URL to HTML + head tags. Used by scripts/prerender.mjs at build time. */
export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  const { helmet } = helmetContext;
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n    ');
  return { html, head };
}
