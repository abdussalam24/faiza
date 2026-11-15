# FABZ HR — Website

React (Vite) site for **FABZ HR International Inc.**, re-themed to match the brand on www.fabzhr.com (navy / cream / lime, Manrope + DM Sans) and prerendered to static HTML so every page is crawlable.

```bash
npm install
npm run dev       # local dev server (client-side rendering)
npm run build     # production build + prerender → dist/
npm run preview   # serve dist/ locally
npm run assets    # regenerate logos, favicons, OG image, WebP photos from /assets-src
```

Deploys to Vercel as-is (framework preset: **Vite**, build command `npm run build`, output `dist`).

---

## ⚠️ Decisions & action items for you

| # | Item | Status / what to do |
|---|------|---------------------|
| 1 | **Phone number** | The site uses **+1 437-365-9404** everywhere, per your instruction. The `(416) 555-0123` placeholder from the live site is **not used anywhere**. Please confirm 437-365-9404 is the number you want public. |
| 2 | **Form inbox** | All forms deliver to **contact@fabzhr.com** via FormSubmit (not the Hotmail address). ✅ More credible for a consultancy. |
| 3 | **Activate FormSubmit (required)** | The **first** form submission triggers a one-time "Activate form" email to contact@fabzhr.com. Click the link in that email or **no enquiries will be delivered**. Do this right after deploying: submit a test from `/contact`, then activate. |
| 4 | **Google Form needs a settings change** | The careers form currently shows **"Sign in to your Google Account"** to visitors (HTTP 401). Google forces sign-in when a form has a **file-upload question** or is restricted to an organization. In Google Forms ▸ Settings ▸ Responses, turn off "Restrict to users in…", and replace any *File upload* question with a "LinkedIn / resume link" short-answer question. Otherwise most applicants can't apply. |
| 5 | **Careers fallback email** | The careers page says "Email your resume to **Faiza.h@hotmail.com**", as specified. Consider switching it to contact@fabzhr.com (one line: `CAREERS.resumeEmail` in `src/config/site.js`). |
| 6 | **No Tawk.to on www.fabzhr.com** | The live site's "Ask FABZ HR" bubble is **not Tawk.to**: it's a custom keyword-based assistant. It has been ported to React (same label, bottom-right, navy with lime text) with answers updated for this site's four services. To switch to real Tawk.to, paste your property and widget IDs into `CHAT.tawk` in `src/config/site.js`. |
| 7 | **Canonical domain** | Every page's canonical URL, sitemap and OG tags point to **https://www.fabzhr.com**. Deploy this project **on that domain** (Vercel ▸ Settings ▸ Domains). If it stays on faiza-project.vercel.app while fabzhr.com serves the old site, Google will index the old site. |
| 8 | **Review legal pages** | `/privacy`, `/terms`, `/accessibility` are solid drafts written for PIPEDA, Ontario law and the AODA, **but not legal advice**. Placeholder business terms need your confirmation or a lawyer's review: invoice terms (15 days), 24-hour session cancellation, 30-day retainer notice, 12-month liability cap, data-retention periods (2 / 7 years). |
| 9 | **Review new service-page copy** | Each service page gained "Who this is for / isn't for", deliverables, engagement model and extra FAQs (now 860–990 words each). The copy avoids exact fees and guarantees, but Faiza should check that it is accurate, especially the new **Recruitment & Executive Search** page (e.g. the "3–8 weeks" turnaround). |
| 13 | **Ontario recruiter licence** | "Approved Ontario Company Recruiter Licence" now appears in the footer (every page), homepage hero badges, About, Careers, Contact, Terms, the Recruitment & Executive Search page (intro + FAQ), the chat assistant and the company schema. Add the **licence number** to `SITE.recruiterLicence.number` in `src/config/site.js` and it shows everywhere automatically. |
| 12 | **Care Staffing → Recruitment & Executive Search** | Care Staffing has been removed site-wide and replaced by **Recruitment & Executive Search** at `/recruitment-executive-search`, using fabzhr.com's wording. `vercel.json` sends a **301 redirect** from `/care-staffing`, so old links and rankings carry over. The Careers subtitle you specified ("…in care, HR, or coaching") now reads "…in HR, professional, or leadership roles". |
| 10 | **Immigration wording** | Global Mobility copy now states that FABZ HR is not a licensed immigration consultant and coordinates with RCICs or lawyers for regulated advice. In Canada, paid immigration advice requires a licence (IRPA s.91). The original "Visa & Work Permit Support" card is kept as-is; consider renaming it to "Work Permit Process Coordination". |
| 11 | **Discovery-call scheduler** | `/contact` shows a placeholder card linking to `/book-demo`. Paste a Calendly or Cal.com URL into `BOOKING.schedulerUrl` to embed a live booking widget. |

---

## Where to change things

### Phone, email, address, LinkedIn → `src/config/site.js`
One file feeds the top bar, header, footer, contact page, forms, chat assistant, legal pages and JSON-LD schema:

```js
email: 'contact@fabzhr.com',
phone: { display: '+1 437-365-9404', href: '+14373659404' },  // href = digits for tel: links
location: 'Ontario, Canada',
social: { linkedin: 'https://www.linkedin.com/company/fabz-hr/' },
```
Changing `email` also changes where every form is delivered (FormSubmit sends to that address). A new address needs a one-time FormSubmit activation (item 3 above).

### Swap the careers Google Form → `src/config/site.js` ▸ `CAREERS`
1. In Google Forms click **Send ▸ `< >` (embed)** and copy the `src="…"` URL. It ends in **`/viewform?embedded=true`**.
2. Paste it into `CAREERS.googleFormEmbedUrl`.
3. Paste the same URL **without** `?embedded=true` into `CAREERS.googleFormPublicUrl` (used for the "open in new tab" fallback).

### Add a page
Create it in `src/pages/`, add a `<Route>` in `src/App.jsx`, and add its path to `src/routes.js` (this prerenders it and adds it to `sitemap.xml`). Use `<Seo title description path jsonLd />` for its head tags.

---

## What changed

**Brand / theme**
- Five colour tokens on `:root` in `src/styles/tokens.css` (`--navy #0b2030`, `--cream #f4f6f2`, `--lime #b4e35c`, `--muted #60717a`, `--line #d7dfda`). Every orange, peach, teal and stray grey is gone; all other colours are transparencies of these five.
- Primary CTAs are lime with navy text, secondary buttons are navy outline, and the footer is navy with cream text and lime hovers.
- Fonts: Manrope (headings, nav, buttons, labels) and DM Sans (body), **self-hosted** in `/public/fonts` (variable 400–800) for speed.
- Logo from www.fabzhr.com: the **full-colour logo** (`/logo.png`, `/logo.webp`) is used in the header and footer, exactly as on fabzhr.com. Like the live site, the header is a light cream bar with navy navigation; a thin navy utility bar sits above it. In the navy footer the same logo sits on a cream plate so it stays legible. `/logo-white.png` (cream and gold reverse) is used only in the OG image. Also `favicon.ico`, `apple-touch-icon.png`, and the door symbol (`/images/fabz-door.webp`) in the homepage hero and page headers. Branded 1200×630 `og-image.png`.
- The homepage hero is now solid navy (15:1 text contrast) and the CTA reads **"Book a Free HR Health Check"**.

**Navigation & layout**
- Header: Home | Services ▾ | About | Contact | **Book a Consultation** (lime). Sticky, cream (to match fabzhr.com and its logo), shadow on scroll. The dropdown is keyboard accessible (Enter, ↓, Esc). Mobile uses a full-screen navy overlay with a focus trap and the lime CTA at the bottom.
- Careers removed from the header; it now lives in the footer **Company** column.
- 4-column navy footer with tagline, registration line, and a bottom bar linking Privacy, Terms, Accessibility and Sitemap. The "Quick Links & Contact" heading is gone.
- Placeholder `+1 (234) 567-890`, `hello@fabzconsulting.ca` and the old personal LinkedIn link removed everywhere.

**Pages**
- `/contact` (was empty): form with "Vendor / Partnership" option, contact cards, Google Map, discovery-call section, FAQ.
- `/careers`: Google Form embed with loading state and fallback email. The demo job listings and filter tabs were removed.
- New pages: `/privacy`, `/terms`, `/accessibility`, `/thank-you`, and a real **404** page.
- Homepage: added **Find your FABZ path** (2-step guide), **Partner with us** (opens `/contact?service=partnership` preselected) and a stats strip on the founder block. The public pricing strip ("15–25% of first-year salary") is replaced by qualitative **Engagement Models**, and the percentages are also removed from the Care Staffing FAQ and "At a Glance" box.
- `/about`: mission, vision and the four values (Accountability, Respect, Transparency, Trust) in fabzhr.com's wording, plus the registration line.
- Services are now **Recruitment & Executive Search, Fractional HR, Global Mobility, Career Coaching** (Care Staffing removed).
- Four service pages expanded in the same order (H1 → intro → What's Included → *Who it's for* → *Deliverables* → Process → *Engagement model* → FAQ → *Other services* → CTA).
- One Global Mobility image on the old site was a broken Unsplash link (404). It's replaced with fabzhr.com's own photo.

**Forms (FormSubmit)**
- Every form posts to `https://formsubmit.co/contact@fabzhr.com` with `_subject`, `_template=table`, `_captcha=false`, `_honey` honeypot and `_next` → `/thank-you`, using the fields `fullName, email, countryCode, phone, service, message`. The booking form sends extra fields (company, date, time, timezone…).
- Forms are plain HTML `POST`s, so they work even before JavaScript loads.

**SEO / technical**
- **Prerendering:** `npm run build` renders every route to its own HTML file with server-rendered `<title>`, meta description (150–160 chars), canonical, Open Graph, Twitter Card and JSON-LD (Organization + LocalBusiness on home; Service + FAQPage + BreadcrumbList on service pages; FAQPage on contact; BreadcrumbList on inner pages).
- `vercel.json`: the old "rewrite everything to index.html" rule (the cause of the soft-404s) is removed, and `cleanUrls` serves `/about` from `about.html`. Unknown URLs get `404.html` with a **real 404 status**.
- `sitemap.xml` and `robots.txt` are generated at build time from `src/routes.js`.
- framer-motion, react-hook-form, react-hot-toast and react-intersection-observer are removed. Animations are CSS, and server-rendered content is visible without JavaScript.
- Accessibility: skip link, lime + navy double focus ring (lime alone fails contrast on cream), labelled fields, ARIA on the nav toggle, dropdown, accordions and chat, and reduced-motion support. Fixed a TopBar CSS rule that leaked `text-align:center` onto every `.container` on mobile.

**Measured** (Lighthouse 12, mobile, simulated slow 4G, local build):

| Page | Performance | Accessibility | Best Practices | SEO | LCP |
|---|---|---|---|---|---|
| Home | 93 | 100 | 100 | 100 | 3.1 s |
| Recruitment & Executive Search | 89 | 100 | 100 | 100 | 2.6 s |
| About | 96 | 100 | 100 | 100 | 2.4 s |
| Contact | 98 | 100 | 100 | 100 | 2.2 s |

Scores are from runs before the header change; total blocking time varies run to run on the test machine (100–1,900 ms on identical code), so treat Performance as approximate. Lab LCP on the homepage and service pages is still above 2.5 s under Lighthouse's throttled mobile profile. Check real-user LCP in Vercel Speed Insights or PageSpeed Insights after launch.

**Contrast:** navy on cream 15.3:1 · navy on lime 11.1:1 · lime on navy 11.1:1 · muted on cream 4.7:1 · body text (navy 80%) on cream 8.4:1. Lime is never used as text on cream (1.4:1).

## After deploying: checklist
- [ ] Submit `/contact` once and click FormSubmit's activation email at contact@fabzhr.com.
- [ ] Fix the Google Form sign-in setting (item 4) and test `/careers` in a private window.
- [ ] Visit `/xyz-does-not-exist` and confirm the browser's network tab shows **404**.
- [ ] Submit `https://www.fabzhr.com/sitemap.xml` in Google Search Console.
- [ ] Validate a service page at https://search.google.com/test/rich-results.
