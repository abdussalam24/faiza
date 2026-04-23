# FABZ HR Consulting — React Website Brief & Developer Prompt
### Version 2.0 — React + Dark/Light Mode Edition

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Brand & Design System](#3-brand--design-system)
4. [Dark / Light Mode System](#4-dark--light-mode-system)
5. [Folder Structure](#5-folder-structure)
6. [Pages & Components](#6-pages--components)
7. [Shared Components](#7-shared-components)
8. [Page-by-Page Specifications](#8-page-by-page-specifications)
9. [Forms & Functionality](#9-forms--functionality)
10. [Animations & Interactions](#10-animations--interactions)
11. [SEO & Accessibility](#11-seo--accessibility)
12. [Developer Setup Guide](#12-developer-setup-guide)
13. [Master Developer Prompt](#13-master-developer-prompt)
14. [Pre-Launch Checklist](#14-pre-launch-checklist)

---

## 1. Project Overview

| Field | Details |
|---|---|
| **Project Name** | FABZ HR Consulting Website |
| **Client** | Faiza Hussain — Founder & Principal Consultant |
| **Primary Market** | Canada 🇨🇦 |
| **Future Markets** | USA 🇺🇸, Australia 🇦🇺, UAE 🇦🇪, Pakistan 🇵🇰 |
| **Website Type** | Multi-page professional services website |
| **Framework** | React (Vite) |
| **Reference Layout** | https://auto-workshop-r3iw.vercel.app/index.php |
| **Brand Colors** | Burnt Orange + Dark Charcoal + Off-White |
| **Theme** | Dark mode default + Light mode toggle |
| **Logo** | Orange phoenix/dove bird + "FABZ CONSULTING" wordmark |

### Core Business Motto
> **Trust · Respect · Transparency · Accountability**

### The Four Service Pillars
1. Care Staffing
2. Fractional HR
3. Global Mobility
4. Career Coaching

---

## 2. Tech Stack

### Required Libraries & Tools

```bash
# Create the project
npm create vite@latest fabz-hr-consulting -- --template react
cd fabz-hr-consulting

# Install all dependencies
npm install react-router-dom         # Page routing/navigation
npm install framer-motion            # Animations and transitions
npm install react-hook-form          # Form handling and validation
npm install @emailjs/browser         # Send form emails without a backend
npm install react-helmet-async       # SEO meta tags per page
npm install lucide-react             # Icons (clean, modern icon set)
npm install react-intersection-observer  # Trigger animations on scroll
npm install react-hot-toast          # Success/error notifications for forms
npm install clsx                     # Conditional CSS class names (utility)
```

### Google Fonts (add to index.html)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

---

## 3. Brand & Design System

### Color Tokens

All colors are defined as CSS custom properties (variables) inside `src/styles/tokens.css`.
This means when you switch between dark and light mode, only the variables change — the components stay the same.

```css
/* === BRAND (always the same, never changes) === */
--color-orange:        #E85C1A;   /* Primary brand orange */
--color-orange-dark:   #C4481A;   /* Orange hover state */
--color-orange-light:  #FF7A40;   /* Orange on dark backgrounds */
--color-teal:          #2DD4BF;   /* Accent — category labels */

/* === DARK MODE (default) === */
[data-theme="dark"] {
  --bg-primary:        #0E0E0E;   /* Page background */
  --bg-secondary:      #161616;   /* Section backgrounds */
  --bg-card:           #1E1E1E;   /* Card backgrounds */
  --bg-surface:        #262626;   /* Input fields, tooltips */
  --bg-topbar:         #0A0A0A;   /* Top announcement bar */

  --text-primary:      #F5F5F5;   /* Main headings + body text */
  --text-secondary:    #A3A3A3;   /* Muted/helper text */
  --text-disabled:     #555555;   /* Placeholder text */

  --border-default:    #2E2E2E;   /* Card and input borders */
  --border-focus:      #E85C1A;   /* Focused input border */

  --shadow-card:       0 4px 24px rgba(0,0,0,0.4);
  --shadow-button:     0 4px 20px rgba(232,92,26,0.35);
}

/* === LIGHT MODE === */
[data-theme="light"] {
  --bg-primary:        #FAFAF8;   /* Warm off-white page bg */
  --bg-secondary:      #F2F0EB;   /* Slight cream for sections */
  --bg-card:           #FFFFFF;   /* Pure white cards */
  --bg-surface:        #F5F3EF;   /* Input fields */
  --bg-topbar:         #1A1A1A;   /* Keep topbar dark always */

  --text-primary:      #1A1A1A;   /* Near-black for headings */
  --text-secondary:    #5C5C5C;   /* Grey for subtext */
  --text-disabled:     #ABABAB;

  --border-default:    #E0DDD8;
  --border-focus:      #E85C1A;

  --shadow-card:       0 4px 24px rgba(0,0,0,0.08);
  --shadow-button:     0 4px 20px rgba(232,92,26,0.25);
}
```

### Typography Scale

```css
/* Fonts */
--font-display: 'Playfair Display', Georgia, serif;   /* All headings */
--font-body:    'Manrope', sans-serif;                /* All body text */

/* Sizes */
--text-xs:    0.75rem;    /* 12px — labels, captions */
--text-sm:    0.875rem;   /* 14px — small body */
--text-base:  1rem;       /* 16px — body copy */
--text-lg:    1.125rem;   /* 18px — lead text */
--text-xl:    1.25rem;    /* 20px */
--text-2xl:   1.5rem;     /* 24px */
--text-3xl:   1.875rem;   /* 30px */
--text-4xl:   2.25rem;    /* 36px */
--text-5xl:   3rem;       /* 48px — hero headings */
--text-6xl:   3.75rem;    /* 60px — largest hero */

/* Letter spacing for uppercase labels */
--tracking-wide: 0.08em;
--tracking-wider: 0.14em;
```

### Spacing & Layout

```css
--max-width:      1200px;   /* All content constrained to this width */
--section-py:     120px;    /* Vertical padding for all sections */
--card-radius:    14px;     /* Border radius for all cards */
--btn-radius:     6px;      /* Border radius for buttons */
--input-radius:   8px;      /* Border radius for form inputs */
--gap-cards:      24px;     /* Gap between grid cards */
```

---

## 4. Dark / Light Mode System

### How It Works

The theme is stored in React `useState` and also saved to `localStorage` so it persists across visits. A `data-theme` attribute is applied to the `<html>` element, and all CSS variables change accordingly.

### ThemeContext (src/context/ThemeContext.jsx)

```jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check if user already chose a theme before
    return localStorage.getItem('fabz-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fabz-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

### Toggle Button (in Navbar)

```jsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle">
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
```

The toggle button sits in the navbar, to the left of the "Book a Demo" CTA button.
- Dark mode: shows a **sun icon** (click to go light)
- Light mode: shows a **moon icon** (click to go dark)

---

## 5. Folder Structure

```
fabz-hr-consulting/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png                    ← FABZ phoenix/dove logo
│   └── og-image.jpg                ← Social sharing image (1200x630)
│
├── src/
│   ├── main.jsx                    ← App entry point
│   ├── App.jsx                     ← Router + ThemeProvider wrapper
│   │
│   ├── context/
│   │   └── ThemeContext.jsx        ← Dark/Light mode state
│   │
│   ├── styles/
│   │   ├── tokens.css              ← ALL CSS variables (colors, fonts, spacing)
│   │   ├── global.css              ← Reset, base styles, body/html
│   │   └── animations.css          ← Keyframe animations
│   │
│   ├── components/                 ← Reusable components (used on every page)
│   │   ├── layout/
│   │   │   ├── TopBar.jsx          ← Top announcement bar
│   │   │   ├── Navbar.jsx          ← Main navigation + theme toggle
│   │   │   └── Footer.jsx          ← Site-wide footer
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx          ← Reusable button (primary/ghost/text)
│   │   │   ├── ServiceCard.jsx     ← Dark card for service listings
│   │   │   ├── FAQAccordion.jsx    ← Expandable FAQ item
│   │   │   ├── SectionLabel.jsx    ← Small teal uppercase label
│   │   │   ├── AnimatedSection.jsx ← Wraps children with scroll-triggered fade
│   │   │   └── ThemeToggle.jsx     ← Sun/Moon toggle button
│   │   │
│   │   └── home/
│   │       ├── HeroSection.jsx
│   │       ├── ServicesGrid.jsx
│   │       ├── RevenueModelStrip.jsx
│   │       ├── FounderSpotlight.jsx
│   │       ├── ValuesSection.jsx
│   │       └── QuickEnquiryForm.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── BookDemoPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── services/
│   │       ├── CareStaffingPage.jsx
│   │       ├── FractionalHRPage.jsx
│   │       ├── GlobalMobilityPage.jsx
│   │       └── CareerCoachingPage.jsx
│   │
│   └── data/
│       ├── services.js             ← All service content (title, bullets, FAQs)
│       ├── faqs.js                 ← FAQ data per service
│       └── jobs.js                 ← Job listings data
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 6. Pages & Components

### React Router Setup (App.jsx)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookDemoPage from './pages/BookDemoPage';
import CareersPage from './pages/CareersPage';
import CareStaffingPage from './pages/services/CareStaffingPage';
import FractionalHRPage from './pages/services/FractionalHRPage';
import GlobalMobilityPage from './pages/services/GlobalMobilityPage';
import CareerCoachingPage from './pages/services/CareerCoachingPage';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <TopBar />
          <Navbar />
          <main>
            <Routes>
              <Route path="/"                  element={<HomePage />} />
              <Route path="/about"             element={<AboutPage />} />
              <Route path="/book-demo"         element={<BookDemoPage />} />
              <Route path="/careers"           element={<CareersPage />} />
              <Route path="/care-staffing"     element={<CareStaffingPage />} />
              <Route path="/fractional-hr"     element={<FractionalHRPage />} />
              <Route path="/global-mobility"   element={<GlobalMobilityPage />} />
              <Route path="/career-coaching"   element={<CareerCoachingPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
```

---

## 7. Shared Components

### TopBar
- Background: always dark (`var(--bg-topbar)`) — does NOT change with light mode
- Left: `📞 +1 (XXX) XXX-XXXX` | `✉ hello@fabzconsulting.ca`
- Right: `Book a Free Discovery Call →` (links to /book-demo)
- Font size: `var(--text-sm)`, color: `#A3A3A3`

### Navbar
- Transparent on top of hero, becomes solid `var(--bg-card)` with shadow on scroll
- Logo (left): PNG image + "FABZ HR Consulting" text beside it
- Nav links (center): Home | Services ▾ | About | Careers | Contact
  - "Services" has a **dropdown menu** showing all 4 service pages
- Right side: ThemeToggle icon + `Book a Demo` orange button
- Mobile: hamburger menu (☰) that opens a slide-in drawer
- Active page link has orange underline indicator

### Footer
- 4-column grid:
  - **Column 1:** Logo + tagline + social icons (LinkedIn, Instagram)
  - **Column 2:** Services (links to all 4 service pages)
  - **Column 3:** Quick Links (Home, About, Careers, Book a Demo, Contact)
  - **Column 4:** Contact Info (address, phone, email)
- Bottom bar: `© 2025 FABZ HR Consulting. All Rights Reserved. | Canada`
- Background: `var(--bg-secondary)` with a top border

---

## 8. Page-by-Page Specifications

---

### 8.1 Homepage (`/`)

#### SEO
```
Title: "FABZ HR Consulting | HR Services in Canada"
Description: "Expert HR services in Canada — Care Staffing, Fractional HR, 
Global Mobility, and Career Coaching. Book a free discovery call today."
```

#### Section 1 — Hero
- **Layout:** Full viewport height. Left 55%: text. Right 45%: image.
- **Background:** `var(--bg-primary)` with a very subtle orange radial gradient glow behind the image
- **Content:**
  - Small label (teal): `CANADA'S TRUSTED HR PARTNER`
  - H1: `HR That Works as Hard as You Do.`
  - Paragraph: `FABZ HR Consulting partners with businesses, families, and individuals to deliver expert HR solutions — from care staffing and fractional HR leadership to global mobility and career coaching. Built on trust. Delivered with accountability.`
  - Button 1 (orange): `Book a Free Consultation →` → /book-demo
  - Button 2 (ghost): `Explore Our Services` → scrolls to services section
  - Below buttons: 3 trust stats inline: `14+ Years Experience | 6+ Years Leadership | 10+ Industries`
- **Image:** Professional photo (Faiza or an HR-themed stock image)
- **Animation:** H1 fades up → paragraph fades up (delay 0.2s) → buttons fade up (delay 0.4s) → image slides in from right (delay 0.1s)

#### Section 2 — Services Grid
- **Label:** `WHAT WE OFFER`
- **Heading:** `Four Pillars. One Trusted Partner.`
- **Sub-heading:** `Specialized HR solutions designed to meet you wherever you are in your journey.`
- **Layout:** 4 cards in a row (2×2 on tablet, 1 col on mobile)
- **Each Card Contains:**
  - Category pill (teal text, teal border): e.g., `CARE STAFFING`
  - Card title (bold, large): e.g., `Placing the right people in care roles`
  - Bullet list (5 items per service — see service details below)
  - Divider line
  - Client type text: e.g., `Clients: families, facilities, daycares`
  - `Explore →` button (text link with arrow, turns orange on hover)
- **Card hover:** Subtle orange left-border glow + slight upward lift (translateY -4px)

**Service Card Data:**

| # | Category | Title | Bullets | Clients |
|---|---|---|---|---|
| 1 | CARE STAFFING | Placing the right people in care roles | Senior caregiver placement, Child care staffing, Background screening, Compliance & licensing, Managed staffing retainers | Families, facilities, daycares |
| 2 | FRACTIONAL HR | On-demand HR leadership for SMBs | HR audits & policy design, Recruiting strategy, Employee relations, Comp & benefits advisory, Monthly retainer packages | SMBs, 10–100 employees |
| 3 | GLOBAL MOBILITY | Moving talent across borders, compliantly | Visa & work permit support, Relocation coordination, International onboarding, Cross-border compliance, Assignment policy design | Growing companies, expats, multinationals |
| 4 | CAREER COACHING | Helping individuals own their career path | Resume & LinkedIn audit, Interview prep & coaching, Career transition planning, Executive presence coaching, Job search strategy | Professionals, executives, new grads |

#### Section 3 — Revenue Model Strip
- **Label:** `HOW WE WORK`
- **Heading:** `Shared Revenue Model Across All Four Pillars`
- **Layout:** 4 tiles in a horizontal strip (dark card background)
- **Tiles:**
  1. **Monthly Retainers** — Fractional HR, care staffing managed services
  2. **Project Fees** — Global mobility assignments, HR audits, handbooks
  3. **Coaching Packages** — 3, 6, or 12-session bundles for individuals
  4. **Placement Fees** — 15–25% of first-year salary for care placements

#### Section 4 — Core Values
- **Label:** `OUR PHILOSOPHY`
- **Heading:** `Built on Four Unshakeable Principles`
- **Layout:** 4 cards side by side, each with an icon + title + one sentence
  - 🤝 **Trust** — We show up with honesty in every engagement, every time.
  - 🙏 **Respect** — Every client, candidate, and colleague is treated with dignity.
  - 🔍 **Transparency** — Clear communication and no hidden agendas.
  - ✅ **Accountability** — We own our results and stand behind our work.

#### Section 5 — Founder Spotlight
- **Layout:** Left: Faiza's professional photo (styled with an orange border accent). Right: text.
- **Label:** `MEET THE FOUNDER`
- **Heading:** `14 Years of HR Excellence Behind Every Engagement`
- **Text:** 3-sentence excerpt from Faiza's bio
- **Credentials row:** 3 inline badges: `EMBA — IoBM` | `BBA — Toronto` | `PICG Certified`
- **Link:** `Read Faiza's Full Story →` → /about

#### Section 6 — Quick Enquiry Form
- **Layout:** Left: decorative text/stat block. Right: form.
- **Heading:** `Have a Question? Let's Talk.`
- **Fields:**
  - Full Name (text input)
  - Email Address (email input)
  - Phone Number (tel input)
  - Service Interested In (select dropdown)
  - Your Message (textarea, 4 rows)
  - Submit button: `Send Enquiry` (full-width orange button)
- **On submit:** Show success toast: "✅ Thanks! We'll be in touch within 24 hours."

---

### 8.2 About Page (`/about`)

#### SEO
```
Title: "About Faiza Hussain | FABZ HR Consulting"
Description: "Meet Faiza Hussain — 14+ years of HR expertise across Canada, 
financial, tech, aviation, healthcare sectors and more."
```

#### Section 1 — Page Hero Banner
- Full-width dark banner (always dark even in light mode for visual impact)
- Heading: `About FABZ HR Consulting`
- Subtext: `Built on experience. Driven by purpose.`
- Breadcrumb: `Home / About`

#### Section 2 — Founder Story
- **Layout:** Two-column — left: large photo of Faiza with orange decorative frame/border. Right: bio text.
- **Label:** `MEET THE FOUNDER`
- **Name:** `Faiza Hussain` (large Playfair Display)
- **Title:** `Founder & Principal HR Consultant`
- **Full Bio (display in paragraphs):**

  > Faiza Hussain brings over 14 years of diverse experience, with more than 6 years in leadership capacity, in establishing and revitalizing HR operations to achieve organizational objectives.

  > She holds a Director's Training Program certificate from the Pakistan Institute of Corporate Governance (2023), an Executive MBA in HR & Marketing from IoBM (2019), and a Bachelor's in Business Administration in HR from Toronto, Canada (2011).

  > Faiza has collaborated with prestigious organizations such as Deloitte, KPMG, Microsoft, Air Canada Rouge, British Council, Berlitz, and Pakistan Mercantile Exchange.

  > She has managed HR functions for companies ranging from large enterprises with over 1,000 employees to startups with as few as 10 employees, working both as a direct employee and on a project basis.

  > Her expertise spans: setting up and revamping HR offices, deploying HR systems, revising and implementing policies, ensuring corporate governance, handling employee grievances, HR consulting and auditing, and driving employee engagement through digital marketing.

- **Credential badges** (styled pills): Director's Training (PICG 2023), EMBA HR & Marketing (IoBM 2019), BBA HR (Toronto 2011)

#### Section 3 — Stats Bar
- 4 large number stats:
  - `14+` Years of Experience
  - `6+` Years in Leadership
  - `10+` Industries Served
  - `1000+` Employees Managed

#### Section 4 — Values (same as homepage, slightly different layout)

#### Section 5 — Sector Expertise
- **Heading:** `Across Every Industry That Matters`
- **Layout:** Pill/tag cloud of sectors:
  Financial · Capital Markets · Audit & Consulting · Healthcare · Technology · Pharmaceutical · Aviation · Hospitality · Retail · Insurance · Education

#### Section 6 — Global Reach
- **Heading:** `Where We Serve`
- **Layout:** 5 cards or map pins:
  - 🇨🇦 Canada — **Active**
  - 🇺🇸 USA — *Coming Soon*
  - 🇦🇺 Australia — *Coming Soon*
  - 🇦🇪 UAE — *Coming Soon*
  - 🇵🇰 Pakistan — *Coming Soon*

#### Section 7 — CTA
- Heading: `Ready to Work with an HR Partner You Can Trust?`
- Button: `Book a Discovery Call →` → /book-demo

---

### 8.3 Care Staffing Page (`/care-staffing`)

#### SEO
```
Title: "Care Staffing Services | FABZ HR Consulting Canada"
Description: "Professional care staffing solutions — senior caregiver placement, 
child care staffing, background screening, and compliance across Canada."
```

#### Layout (same pattern applies to ALL 4 service pages):

**1. Page Hero Banner**
- Background: dark always, with subtle orange gradient
- Category label (teal): `SERVICE`
- H1: `Care Staffing`
- Sub-heading: `Placing the right people in the right care roles — every time.`
- Breadcrumb: `Home / Services / Care Staffing`

**2. Service Overview**
- 3–4 paragraphs describing the service
- Right side: an "At a Glance" info box with:
  - Who it's for: Families, care facilities, daycares
  - Pricing model: Placement fees (15–25% of first-year salary) + optional retainer
  - Turnaround: Typically 1–3 weeks

**3. What's Included (Icon Cards)**
- 5 cards with an icon + title + 1-line description:
  1. 🏠 Senior Caregiver Placement — Finding qualified, vetted caregivers for elderly or special needs individuals
  2. 👶 Child Care Staffing — Nannies, daycare workers, and after-school staff
  3. 🔍 Background Screening — Comprehensive criminal and reference checks
  4. 📋 Compliance & Licensing — Ensuring all placements meet regulatory requirements
  5. 🔁 Managed Staffing Retainers — Ongoing staffing support on a monthly basis

**4. Our Process (Numbered Steps)**
1. Discovery Call — Understand your care needs and environment
2. Candidate Sourcing — Access our vetted candidate network
3. Screening & Vetting — Background checks, references, compliance review
4. Interview & Selection — You meet the top candidates
5. Placement & Onboarding — We support the transition
6. Ongoing Support — Optional managed retainer for continued needs

**5. FAQ Accordion (5 questions)**
- Q: How long does a placement typically take?
  A: Most placements are completed within 1–3 weeks depending on role complexity and location.
- Q: Do you conduct background checks on all candidates?
  A: Yes. All candidates go through criminal background checks and reference verification before being presented to clients.
- Q: Which provinces in Canada do you serve?
  A: We currently serve clients primarily in Ontario, with plans to expand across Canada. Contact us to discuss your location.
- Q: What is a managed staffing retainer?
  A: A monthly agreement where FABZ handles your ongoing staffing needs — sourcing, vetting, and replacing candidates as required.
- Q: What are your placement fees?
  A: Our placement fee is 15–25% of the placed candidate's first-year salary, depending on role seniority and scope.

**6. CTA Block**
- Background: orange gradient band
- Heading: `Ready to Find the Perfect Care Professional?`
- Sub-text: `Book a free 30-minute call with Faiza to discuss your needs.`
- Button: `Book a Consultation →` → /book-demo

---

### 8.4 Fractional HR Page (`/fractional-hr`)

**Hero:** `Fractional HR` — `Senior HR leadership, on your terms — without the full-time cost.`

**What's Included:**
1. 📊 HR Audits & Policy Design — Full review of your HR processes and documentation
2. 🎯 Recruiting Strategy — Building hiring pipelines and job frameworks
3. 🤝 Employee Relations — Handling conflicts, performance, and culture
4. 💰 Comp & Benefits Advisory — Benchmarking salaries and structuring packages
5. 📅 Monthly Retainer Packages — Dedicated fractional HR hours each month

**FAQ:**
- Q: What exactly is Fractional HR?
  A: Fractional HR means you get access to a senior HR professional (like a part-time HR Director) at a fraction of the cost of a full-time hire. Ideal for growing businesses that need HR expertise but aren't ready for a full-time department.
- Q: Is this right for a company with only 15 employees?
  A: Absolutely. Fractional HR is especially valuable for companies between 10–100 employees who need HR structure without the overhead.
- Q: How many hours per month do you work with us?
  A: Packages start from 8 hours/month and scale based on your needs. We'll recommend the right level during your discovery call.
- Q: What's included in an HR audit?
  A: A comprehensive review of your policies, job descriptions, compliance status, onboarding/offboarding processes, and people practices — with a written recommendations report.
- Q: Can we scale up services as we grow?
  A: Yes. Our retainer packages are flexible and can be adjusted monthly.

---

### 8.5 Global Mobility Page (`/global-mobility`)

**Hero:** `Global Mobility` — `Moving talent across borders — compliantly and confidently.`

**What's Included:**
1. 📄 Visa & Work Permit Support — Guidance and preparation for work authorization applications
2. 🚚 Relocation Coordination — End-to-end relocation logistics support
3. 🌐 International Onboarding — Setting employees up for success in a new country
4. ⚖️ Cross-Border Compliance — Employment law and tax compliance across jurisdictions
5. 📝 Assignment Policy Design — Drafting international assignment policies for your company

**FAQ:**
- Q: Which countries do you support for global mobility?
  A: We specialize in Canada, with coverage for UAE and Pakistan assignments. We partner with specialists in Australia and the USA for those markets.
- Q: Can you help with work permit applications?
  A: Yes. We guide employers and employees through the work permit and visa application process, including documentation preparation.
- Q: How long does relocation coordination take?
  A: Timelines vary by destination, but we typically begin 6–12 weeks before the move date to ensure smooth transitions.
- Q: Do you work with individuals or only companies?
  A: Both. We support individuals (expats) navigating a move, as well as companies managing employee transfers.
- Q: What is an international assignment policy?
  A: A formal document outlining your company's rules for international transfers — covering allowances, housing, tax equalization, and repatriation.

---

### 8.6 Career Coaching Page (`/career-coaching`)

**Hero:** `Career Coaching` — `Own your career. Build your future. With expert guidance every step of the way.`

**What's Included:**
1. 📄 Resume & LinkedIn Audit — Professional review and rewrite of your career documents
2. 🎤 Interview Prep & Coaching — Mock interviews, feedback, and technique building
3. 🔄 Career Transition Planning — Mapping your path to a new role or industry
4. 👔 Executive Presence Coaching — Building confidence, gravitas, and leadership presence
5. 🗺️ Job Search Strategy — Targeted approach to finding the right opportunities

**Coaching Packages Section:**
Three pricing cards (don't show exact prices — say "Starting from" or "Contact for pricing"):
- **Starter Pack** — 3 Sessions
  - Resume + LinkedIn audit
  - 2 coaching sessions (60 min each)
  - Best for: Individuals exploring options
- **Growth Pack** — 6 Sessions
  - Everything in Starter
  - Interview prep + mock interviews
  - Job search strategy plan
  - Best for: Active job seekers
- **Transformation Pack** — 12 Sessions
  - Everything in Growth
  - Executive presence coaching
  - Career transition roadmap
  - Best for: Career changers & executives

**FAQ:**
- Q: Who is career coaching for?
  A: Anyone navigating a career change, job search, promotion, or simply feeling stuck. We work with fresh graduates, mid-career professionals, and C-suite executives.
- Q: Are sessions conducted online or in-person?
  A: Sessions are conducted via video call (Zoom or Google Meet), making them accessible from anywhere in Canada and beyond.
- Q: How long is each coaching session?
  A: Each session is 60 minutes. Sessions are scheduled at a time that works for you.
- Q: Do you specialize in specific industries?
  A: Faiza's background spans 10+ industries including Finance, Tech, Healthcare, Aviation, and Education — giving you an experienced sounding board regardless of your field.
- Q: Can I start with a single session to try it out?
  A: Yes. Book a single discovery session first. If you'd like to continue, we'll match you to the right package.

---

### 8.7 Careers Page (`/careers`)

#### SEO
```
Title: "Careers | FABZ HR Consulting Canada"
Description: "Looking for a job in care, HR, or coaching? Browse open roles and 
apply directly with your resume and certificates."
```

#### Section 1 — Hero Banner
- Heading: `Work With Us`
- Sub-text: `Looking for your next opportunity in care, HR, or a related field? Start here.`

#### Section 2 — Intro Text
> At FABZ HR Consulting, we connect talented professionals with meaningful roles across care staffing, HR operations, and coaching. Browse current openings below, or submit a general application — we keep profiles on file and reach out when the right role comes up.

#### Section 3 — Job Filter + Listings
- **Filter tabs:** All | Care Staffing | HR & Operations | Coaching | Admin
- **Job Cards** (each shows):
  - Job title (bold)
  - Location (e.g., "Toronto, ON — Hybrid")
  - Type badge (Full-time / Part-time / Contract)
  - 2-line description
  - `Apply Now →` button → scrolls to the application form below, pre-filling the position field

**Sample job listings (use as placeholders — real ones can be updated):**
1. Senior Caregiver — Toronto, ON | Part-time | Immediate start
2. Child Care Worker — Mississauga, ON | Full-time
3. HR Coordinator — Remote, Canada | Contract (6 months)
4. Career Coach (Contractor) — Remote | Contract
5. Administrative Assistant — Toronto, ON | Part-time

#### Section 4 — Application Form

**Heading:** `Submit Your Application`
**Sub-text:** `Whether you're applying for a specific role or submitting a general profile, we review every application.`

**Form Fields (all labeled clearly):**

| Field | Type | Required | Notes |
|---|---|---|---|
| Full Name | Text input | ✅ | |
| Email Address | Email input | ✅ | |
| Phone Number | Tel input | ✅ | |
| Position Applying For | Select dropdown | ✅ | Options: Care Staffing roles, HR roles, Coaching roles, Admin roles, General Application |
| City / Province | Text input | ✅ | |
| Work Authorization | Select dropdown | ✅ | Options: Canadian Citizen, Permanent Resident, Open Work Permit, Employer-Specific Permit, Study Permit (co-op), Other |
| Years of Experience | Select dropdown | ✅ | Options: Less than 1 year, 1–3 years, 3–5 years, 5–10 years, 10+ years |
| Relevant Certifications | Text input | ❌ | Placeholder: "e.g., First Aid, HR Certificate, PSW" |
| LinkedIn Profile URL | URL input | ❌ | |
| Cover Letter / Tell Us About Yourself | Textarea (6 rows) | ✅ | |
| Upload Resume | File input | ✅ | Accept: .pdf, .doc, .docx — Max 5MB |
| Upload Certificates (optional) | File input | ❌ | Accept: .pdf, .jpg, .png — Max 5MB each |
| Data Consent Checkbox | Checkbox | ✅ | "I agree to FABZ HR Consulting storing my information for recruitment purposes." |
| **Submit Button** | — | — | `Submit Application` (full-width orange) |

**On Submit:** Show success toast: "🎉 Application received! We'll review your profile and be in touch."

---

### 8.8 Book a Demo Page (`/book-demo`)

#### SEO
```
Title: "Book a Consultation | FABZ HR Consulting"
Description: "Schedule a free 30-minute discovery call with Faiza Hussain. 
No obligation — just clarity on your HR challenges."
```

#### Layout: Two-column (60/40 split)

**Left Column — What to Expect:**
- Label: `FREE DISCOVERY CALL`
- Heading: `Let's Talk About Your HR Needs`
- Paragraph: `In 30 minutes, we'll understand your challenges, explain how FABZ can help, and outline next steps — with no pressure and no obligation.`
- Checklist (with orange checkmarks):
  - ✅ 30-minute focused conversation
  - ✅ Identify your biggest HR challenge
  - ✅ Discover which service is right for you
  - ✅ Walk through pricing and timelines
  - ✅ Meet Faiza directly — no gatekeepers
- Faiza's photo (styled, below the checklist)
- Contact fallback: `Prefer email? hello@fabzconsulting.ca`

**Right Column — Booking Form:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Full Name | Text | ✅ | |
| Email Address | Email | ✅ | |
| Phone Number | Tel | ✅ | |
| Company / Organization | Text | ❌ | Placeholder: "Or 'Individual' if personal" |
| Number of Employees | Select | ❌ | 1–10, 10–50, 50–100, 100–500, 500+ |
| Service You're Interested In | Multi-checkbox or select | ✅ | Care Staffing, Fractional HR, Global Mobility, Career Coaching, Not Sure Yet |
| Preferred Date | Date picker | ✅ | Min: tomorrow's date |
| Preferred Time | Select | ✅ | Morning (9am–12pm), Afternoon (12pm–4pm), Evening (4pm–6pm) |
| Your Timezone | Select | ✅ | EST, CST, MST, PST, GMT, GST (UAE), PKT |
| How Did You Hear About Us? | Select | ❌ | Google, LinkedIn, Referral, Social Media, Other |
| Brief Description of Your Need | Textarea | ❌ | 3 rows, optional |
| **Submit** | — | — | `Confirm My Booking Request` (orange, full width) |

**On Submit:** Show a confirmation card:
> "✅ Booking Request Received! We'll confirm your slot within 24 hours at [email]. For urgent inquiries: +1 (XXX) XXX-XXXX"

---

## 9. Forms & Functionality

### EmailJS Setup (for form submissions without a backend)

1. Create a free account at https://www.emailjs.com
2. Connect your Gmail/Outlook
3. Create email templates for:
   - Quick Enquiry form → notifies Faiza
   - Careers application form → notifies Faiza with applicant details
   - Book a Demo form → sends confirmation to client + notification to Faiza
4. Add your EmailJS keys to a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TEMPLATE_ENQUIRY=template_id_1
VITE_EMAILJS_TEMPLATE_CAREERS=template_id_2
VITE_EMAILJS_TEMPLATE_BOOKING=template_id_3
```

### Form Validation Rules
- All required fields must be filled before submit button activates
- Email: must match `user@domain.com` format
- Phone: must be at least 10 digits
- File uploads: size check client-side (alert if over 5MB)
- Textarea: minimum 20 characters for cover letter / message fields

---

## 10. Animations & Interactions

### Page Load Animations (using Framer Motion)
```jsx
// Hero text stagger
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
```

### Scroll-Triggered Animations (AnimatedSection component)
- Uses `react-intersection-observer` to detect when element enters viewport
- Triggers: fade-up + opacity 0→1 when 20% of element is visible
- Used on: service cards, FAQ items, stats, value cards, form sections

### Navbar Scroll Behavior
```js
// Navbar becomes solid on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled'); // adds bg + shadow
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

### FAQ Accordion
- Uses Framer Motion `AnimatePresence` + `motion.div` with `height: auto` animation
- Chevron icon rotates 180° when open
- Only one FAQ open at a time per page (accordion behavior)

### Theme Transition
- All color changes animate with `transition: background-color 0.3s ease, color 0.3s ease`
- Applied globally on `body` and all card/surface elements

### Button Interactions
```css
.btn-primary {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-button);
  background-color: var(--color-orange-dark);
}
```

---

## 11. SEO & Accessibility

### Per-Page Meta Tags (using react-helmet-async)
```jsx
import { Helmet } from 'react-helmet-async';

// Inside each page component:
<Helmet>
  <title>Care Staffing | FABZ HR Consulting Canada</title>
  <meta name="description" content="Professional care staffing solutions..." />
  <meta property="og:title" content="Care Staffing | FABZ HR Consulting" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://fabzconsulting.ca/care-staffing" />
</Helmet>
```

### Schema Markup (add to index.html)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "FABZ HR Consulting",
  "founder": {
    "@type": "Person",
    "name": "Faiza Hussain",
    "jobTitle": "Founder & Principal HR Consultant"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA"
  },
  "url": "https://fabzconsulting.ca",
  "serviceType": ["HR Consulting", "Care Staffing", "Career Coaching"]
}
```

### Accessibility Requirements
- All images: meaningful `alt` text
- All form fields: `<label>` associated via `htmlFor`
- Color contrast: minimum 4.5:1 for body text
- Focus visible on all interactive elements (use orange outline)
- Keyboard navigation: Tab through all interactive elements in logical order
- ARIA labels on icon-only buttons (theme toggle, hamburger menu)

---

## 12. Developer Setup Guide

### Step-by-Step for First-Time Setup

```bash
# Step 1 — Install Node.js (if you don't have it)
# Download from: https://nodejs.org (choose LTS version)

# Step 2 — Create the React project
npm create vite@latest fabz-hr-consulting -- --template react
cd fabz-hr-consulting

# Step 3 — Install all dependencies
npm install react-router-dom framer-motion react-hook-form @emailjs/browser react-helmet-async lucide-react react-intersection-observer react-hot-toast clsx

# Step 4 — Start the development server
npm run dev
# Open: http://localhost:5173 in your browser

# Step 5 — Build for production (when ready to deploy)
npm run build

# Step 6 — Deploy to Vercel (easiest option)
npm install -g vercel
vercel
# Follow the prompts — your site will be live in minutes
```

### Environment Variables (.env file in root directory)
```
VITE_EMAILJS_SERVICE_ID=xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
VITE_EMAILJS_TEMPLATE_ENQUIRY=xxxxx
VITE_EMAILJS_TEMPLATE_CAREERS=xxxxx
VITE_EMAILJS_TEMPLATE_BOOKING=xxxxx
```

---

## 13. Master Developer Prompt

> ✅ Copy everything between the triple backticks and paste it into Claude or give it to your developer.

---

```
Build a complete, production-ready multi-page React website for "FABZ HR Consulting",
a Canadian HR consultancy founded by Faiza Hussain.

=== TECH STACK ===
- React (Vite)
- React Router DOM v6 (client-side routing)
- Framer Motion (animations)
- React Hook Form (form validation)
- EmailJS/browser (form submissions)
- React Helmet Async (SEO meta tags per page)
- Lucide React (icons)
- React Intersection Observer (scroll animations)
- React Hot Toast (form feedback notifications)
- Google Fonts: Playfair Display (headings) + Manrope (body)

=== DARK/LIGHT MODE SYSTEM ===
- Create a ThemeContext (src/context/ThemeContext.jsx) with useState
- Default theme: dark
- Persist theme choice to localStorage using key "fabz-theme"
- Apply data-theme="dark" or data-theme="light" to document.documentElement
- All colors defined as CSS custom properties in src/styles/tokens.css
- Dark mode colors: bg-primary #0E0E0E, bg-card #1E1E1E, text #F5F5F5
- Light mode colors: bg-primary #FAFAF8, bg-card #FFFFFF, text #1A1A1A
- Brand orange: #E85C1A (always the same in both modes)
- Teal accent: #2DD4BF (category labels)
- All color transitions: transition: background-color 0.3s ease, color 0.3s ease
- Theme toggle button in navbar: shows Sun icon in dark mode, Moon icon in light mode
- TopBar (announcement bar) stays dark always, even in light mode

=== BRAND ===
- Primary color: #E85C1A (burnt orange)
- Hover orange: #C4481A
- Card radius: 14px, Button radius: 6px, Input radius: 8px
- Max content width: 1200px
- Section vertical padding: 120px
- Logo: src/assets/logo.png (orange phoenix/dove + "FABZ CONSULTING" text)
- Core motto: Trust · Respect · Transparency · Accountability

=== LAYOUT (mirror structure of https://auto-workshop-r3iw.vercel.app/index.php) ===
- TopBar: announcement bar at very top (always dark bg)
  Left: phone + email. Right: "Book a Free Discovery Call →" link
- Navbar: sticky, transparent at top → solid dark card bg on scroll (JS scroll listener)
  Logo (left) | Nav links with Services dropdown (center) | ThemeToggle + Book Demo button (right)
  Mobile: hamburger menu opens slide-in drawer
- Footer: 4-column grid — Logo+social, Services, Quick Links, Contact info

=== PAGES & ROUTES ===
/ → HomePage
/about → AboutPage
/book-demo → BookDemoPage
/careers → CareersPage
/care-staffing → CareStaffingPage
/fractional-hr → FractionalHRPage
/global-mobility → GlobalMobilityPage
/career-coaching → CareerCoachingPage

=== HOMEPAGE SECTIONS (in order) ===
1. Hero: Full viewport. Left: label + H1 "HR That Works as Hard as You Do." + paragraph + 2 CTA buttons
   (Book a Consultation → /book-demo | Explore Our Services → scrolls to services section)
   + 3 trust stats: "14+ Years Experience | 6+ Years Leadership | 10+ Industries"
   Right: professional image. Framer Motion stagger animation on load.

2. Services Grid: 4 dark cards — Care Staffing, Fractional HR, Global Mobility, Career Coaching.
   Each card: teal category pill, bold title, 5 bullet points, client type, "Explore →" link.
   Card hover: orange left border glow + translateY(-4px).

3. Revenue Model Strip: 4 tiles — Monthly Retainers, Project Fees, Coaching Packages, Placement Fees.

4. Values: 4 cards — Trust, Respect, Transparency, Accountability. Each with icon + 1-sentence description.

5. Founder Spotlight: Left photo of Faiza, Right: label + heading + 3-sentence bio excerpt + credentials + link to /about.

6. Quick Enquiry Form: Name, Email, Phone, Service (select), Message, Submit button.
   On submit: EmailJS call + react-hot-toast success notification.

=== ALL 4 SERVICE PAGES (same template, different content) ===
Each service page must include:
a) Hero banner: always dark, teal label "SERVICE", H1 with service name, subtitle, breadcrumb
b) Overview: 3-4 paragraphs + "At a Glance" info box (who it's for, pricing model, turnaround)
c) What's Included: 5 icon cards, each with icon + title + 1-line description
d) Our Process: numbered steps (6 steps each)
e) FAQ: 5 questions, Framer Motion accordion (AnimatePresence), one open at a time, chevron rotates
f) CTA band: orange gradient bg, heading, subtext, "Book a Consultation →" button to /book-demo

Service content:
CARE STAFFING: Senior caregiver placement, child care staffing, background screening, compliance & licensing, managed retainers. Clients: families, facilities, daycares.
FRACTIONAL HR: HR audits & policy design, recruiting strategy, employee relations, comp & benefits advisory, monthly retainers. Clients: SMBs, 10-100 employees.
GLOBAL MOBILITY: Visa & work permit support, relocation coordination, international onboarding, cross-border compliance, assignment policy design. Clients: growing companies, expats, multinationals.
CAREER COACHING: Resume & LinkedIn audit, interview prep, career transition planning, executive presence coaching, job search strategy. Clients: professionals, executives, new grads.
Also add coaching packages section to Career Coaching page: Starter (3 sessions), Growth (6 sessions), Transformation (12 sessions).

=== CAREERS PAGE ===
1. Hero banner
2. Intro paragraph about submitting profiles
3. Job filter tabs: All | Care Staffing | HR & Operations | Coaching | Admin
4. Job listing cards: title, location, type badge (Full-time/Part-time/Contract), 2-line description, "Apply Now →" button
5. Application Form with these fields:
   - Full Name (required)
   - Email (required)
   - Phone (required)
   - Position Applying For (select dropdown, required)
   - City / Province (required)
   - Work Authorization (select: Canadian Citizen, PR, Open Work Permit, Employer-Specific Permit, Study Permit co-op, Other, required)
   - Years of Experience (select: <1, 1-3, 3-5, 5-10, 10+, required)
   - Relevant Certifications (text, optional)
   - LinkedIn URL (optional)
   - Cover Letter / Tell Us About Yourself (textarea, required, min 20 chars)
   - Upload Resume (file input, accept .pdf .doc .docx, max 5MB, required)
   - Upload Certificates (file input, accept .pdf .jpg .png, max 5MB, optional)
   - Consent checkbox (required): "I agree to FABZ HR Consulting storing my information for recruitment purposes."
   - Submit button: "Submit Application" (full-width orange)
   On submit: validation + EmailJS + success toast

=== BOOK A DEMO PAGE ===
Two-column layout (60/40):
Left: label "FREE DISCOVERY CALL", heading, paragraph, checklist with 5 orange checkmarks, Faiza's photo, email fallback
Right: Form with:
   - Full Name (required)
   - Email (required)
   - Phone (required)
   - Company / Organization (optional, placeholder "Or 'Individual'")
   - Number of Employees (select: 1-10, 10-50, 50-100, 100-500, 500+)
   - Service Interest (multi-select checkboxes or select, required): Care Staffing, Fractional HR, Global Mobility, Career Coaching, Not Sure Yet
   - Preferred Date (date picker, min: tomorrow, required)
   - Preferred Time (select: Morning 9am-12pm, Afternoon 12pm-4pm, Evening 4pm-6pm, required)
   - Timezone (select: EST, CST, MST, PST, GMT, GST, PKT, required)
   - How did you hear about us? (select: Google, LinkedIn, Referral, Social Media, Other)
   - Brief description of your need (textarea, 3 rows, optional)
   - Submit button: "Confirm My Booking Request" (orange, full width)
   On submit: success confirmation card with booking reference + instructions

=== ABOUT PAGE ===
1. Hero banner: "About FABZ HR Consulting" / "Built on experience. Driven by purpose."
2. Founder section: left = large photo with orange frame accent, right = full Faiza bio
   Full bio: "Faiza Hussain brings over 14 years of diverse experience, with more than 6 years in leadership
   capacity, in establishing and revitalizing HR operations. She holds a Director's Training Program
   certificate from the Pakistan Institute of Corporate Governance (2023), an Executive MBA in HR &
   Marketing from IoBM (2019), and a BBA in HR from Toronto, Canada (2011). She has collaborated with
   Deloitte, KPMG, Microsoft, Air Canada Rouge, British Council, Berlitz, and Pakistan Mercantile
   Exchange. She has managed HR for companies ranging from 10 to 1,000+ employees across Financial,
   Capital Markets, Healthcare, Technology, Pharmaceutical, Aviation, Hospitality, Retail, Insurance,
   and Education sectors."
3. Stats bar: 14+ Years Experience | 6+ Years Leadership | 10+ Industries | 1000+ Employees Managed
4. Values: 4 cards (same as homepage)
5. Sector expertise: pill/tag cloud of all industries
6. Global reach: 5 cards — Canada (Active), USA/Australia/UAE/Pakistan (Coming Soon)
7. CTA block: "Ready to Work with a Trusted HR Partner?" + book button

=== ANIMATIONS ===
- Hero: Framer Motion staggerChildren (0.15s delay) with opacity 0→1 + y 30→0
- Sections: AnimatedSection wrapper using react-intersection-observer, threshold 0.2
- Service cards: stagger on scroll entry
- FAQ: AnimatePresence, motion.div height animation, chevron rotates 180deg
- Navbar: scrollY > 60 triggers solid background + box-shadow
- Buttons: translateY(-2px) + shadow on hover (CSS transition 0.2s)
- Theme switch: all bg/color transitions 0.3s ease

=== SEO ===
- Use react-helmet-async on every page with unique title and meta description
- Add Schema.org ProfessionalService JSON-LD to index.html
- Add Schema.org Person JSON-LD for Faiza on About page

=== ACCESSIBILITY ===
- All images: descriptive alt text
- All form fields: associated <label> via htmlFor
- Focus visible on all interactive elements using orange outline
- ARIA labels on icon-only buttons
- Keyboard navigable

=== FILE STRUCTURE ===
src/
  context/ThemeContext.jsx
  styles/tokens.css, global.css, animations.css
  components/layout/TopBar.jsx, Navbar.jsx, Footer.jsx
  components/ui/Button.jsx, ServiceCard.jsx, FAQAccordion.jsx, SectionLabel.jsx, AnimatedSection.jsx, ThemeToggle.jsx
  components/home/HeroSection.jsx, ServicesGrid.jsx, RevenueModelStrip.jsx, FounderSpotlight.jsx, ValuesSection.jsx, QuickEnquiryForm.jsx
  pages/HomePage.jsx, AboutPage.jsx, BookDemoPage.jsx, CareersPage.jsx
  pages/services/CareStaffingPage.jsx, FractionalHRPage.jsx, GlobalMobilityPage.jsx, CareerCoachingPage.jsx
  data/services.js, faqs.js, jobs.js

Provide all files completely and correctly. Every page must import and use the shared Navbar, Footer, and TopBar. All links must work. Forms must have proper validation. The theme toggle must work across all pages. Code must be clean, well-commented, and production-ready.
```

---

## 14. Pre-Launch Checklist

### Development
- [ ] All 8 pages built and navigable without errors
- [ ] React Router links work (no full page reloads)
- [ ] Dark/Light toggle works on every page and persists after refresh
- [ ] Navbar: transparent on hero, solid on scroll
- [ ] Navbar: Services dropdown shows all 4 service pages
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] All 4 service page FAQ accordions expand/collapse smoothly
- [ ] Careers form: all required fields validated, file upload works
- [ ] Book a Demo form: date picker, timezone select, service multi-select working
- [ ] All forms send emails via EmailJS (test in production)
- [ ] Success toast appears after form submission

### Design
- [ ] Orange brand color consistent across both themes
- [ ] Teal accent on category labels visible in both themes
- [ ] Typography: Playfair Display for headings, Manrope for body (loaded from Google Fonts)
- [ ] Cards have correct border radius and hover effects
- [ ] Hero section is full viewport height on all screens
- [ ] Light mode: warm off-white backgrounds (not pure white)
- [ ] TopBar always stays dark even in light mode

### Content
- [ ] Faiza Hussain's full bio on About page
- [ ] All 4 service descriptions complete with correct bullet points
- [ ] FAQ has 5 questions per service page
- [ ] Coaching packages section on Career Coaching page
- [ ] Global reach section on About page (Canada active, others coming soon)
- [ ] Stats bar: 14+, 6+, 10+, 1000+

### Performance & SEO
- [ ] Each page has unique `<title>` and `<meta name="description">`
- [ ] Open Graph tags on all pages
- [ ] Schema.org JSON-LD in index.html
- [ ] All images have `alt` text
- [ ] Lighthouse score: Performance > 85, Accessibility > 90, SEO > 90
- [ ] Responsive tested: 375px (mobile), 768px (tablet), 1200px (desktop)
- [ ] Tested in Chrome, Firefox, Safari

### Deployment (Vercel)
- [ ] `.env` file has all EmailJS keys
- [ ] `.env` file is in `.gitignore` (never push to GitHub)
- [ ] `vercel.json` has `rewrites` rule for React Router (SPA routing)
- [ ] Custom domain connected (fabzconsulting.ca)
- [ ] HTTPS active

---

### vercel.json (required for React Router to work on Vercel)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

*Document prepared for FABZ HR Consulting — React Website, Version 2.0*
*Built for Canada. Ready to scale globally.*