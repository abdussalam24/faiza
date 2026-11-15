/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  FABZ HR — SINGLE SOURCE OF TRUTH FOR CONTACT DETAILS & INTEGRATIONS
 *
 *  Change a phone number, email, link or form URL HERE and it updates on every
 *  page (top bar, header, footer, contact page, forms, JSON-LD schema, chat).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: 'FABZ HR',
  legalName: 'FABZ HR International Inc.',
  tagline: 'People. Potential. Possibility.',
  description:
    'FABZ HR supports organizations and professionals across Canada with recruitment and executive search, fractional HR, global mobility and career coaching.',

  /** Canonical production host — used for canonical tags, sitemap and OG URLs. No trailing slash. */
  url: 'https://www.fabzhr.com',

  /** Email shown publicly and used as the FormSubmit recipient. */
  email: 'contact@fabzhr.com',

  /** Phone: `display` is what visitors see, `href` must be E.164 digits for tel: links. */
  phone: {
    display: '+1 437-365-9404',
    href: '+14373659404',
  },

  location: 'Ontario, Canada',
  registration: 'FABZ HR International Inc., registered in Toronto, Canada',
  registrationSentence: 'FABZ HR International Inc. is registered in Toronto, Canada.',

  /**
   * Ontario recruiter licence (Employment Standards Act, 2000).
   * Add the licence number from the Ministry of Labour approval to show it everywhere.
   */
  recruiterLicence: {
    label: 'Approved Ontario Company Recruiter Licence',
    number: '',
  },
  address: {
    locality: 'Toronto',
    region: 'ON',
    country: 'CA',
  },

  responseTime: 'We reply within 1 business day',

  social: {
    linkedin: 'https://www.linkedin.com/company/fabz-hr/',
  },

  /** Year shown in the footer copyright line. */
  copyrightYear: 2026,
};

/** FormSubmit (https://formsubmit.co) — every form on the site posts here. */
export const FORMS = {
  action: `https://formsubmit.co/${SITE.email}`,
  /** Path FormSubmit redirects to after a successful submission. */
  thankYouPath: '/thank-you',
};

/** Careers page: Google Form embed + fallback email. */
export const CAREERS = {
  // Use the ?embedded=true URL (Form ▸ Send ▸ <> embed), not the ?usp=sharing link.
  googleFormEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdVrCL0w_pso8CmrnLEJ8C9BAp66ZZxwVnrMFlDR1cTInWgpQ/viewform?embedded=true',
  googleFormPublicUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdVrCL0w_pso8CmrnLEJ8C9BAp66ZZxwVnrMFlDR1cTInWgpQ/viewform',
  resumeEmail: 'Faiza.h@hotmail.com',
};

/**
 * Free HR Health Check page (/hr-health-check) — Google Form embed.
 * Short link shared publicly: https://forms.gle/yupjpPDXUK7vQCp57
 */
export const HEALTH_CHECK = {
  googleFormEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfQtxI9CiEzldNchL8oEuNIXUC6ZmEmb_lq50aOmrLzJcq7jw/viewform?embedded=true',
  googleFormPublicUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfQtxI9CiEzldNchL8oEuNIXUC6ZmEmb_lq50aOmrLzJcq7jw/viewform',
};

/**
 * Discovery-call scheduler on /contact. Paste a Calendly or Cal.com link
 * (e.g. 'https://calendly.com/fabzhr/discovery-call') to replace the placeholder
 * with a live inline booking widget. Leave empty to show the placeholder card.
 */
export const BOOKING = {
  schedulerUrl: '',
};

/**
 * Live chat. By default the site uses the built-in "Ask FABZ HR" assistant
 * (a port of the widget on www.fabzhr.com). To switch to Tawk.to, paste the two
 * IDs from Tawk ▸ Administration ▸ Chat Widget (embed URL:
 * https://embed.tawk.to/<propertyId>/<widgetId>).
 */
export const CHAT = {
  label: 'Ask FABZ HR',
  tawk: {
    propertyId: '',
    widgetId: '',
  },
};
