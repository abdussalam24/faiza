import React from 'react';
import LegalLayout from './LegalLayout';
import { SITE } from '../../config/site';

const sections = [
  {
    id: 'commitment',
    title: 'Our commitment',
    body: (
      <p>{SITE.legalName} is committed to treating all people in a way that allows them to maintain their dignity and independence. We believe in integration and equal opportunity, and we are committed to meeting the needs of people with disabilities in a timely manner, in line with the <em>Accessibility for Ontarians with Disabilities Act, 2005</em> (AODA) and its Integrated Accessibility Standards.</p>
    ),
  },
  {
    id: 'website',
    title: 'Website accessibility',
    body: (
      <>
        <p>We aim for this website to meet the <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>. Features include:</p>
        <ul>
          <li>colour combinations chosen to meet WCAG contrast ratios, with visible focus outlines;</li>
          <li>full keyboard navigation, including a “skip to main content” link, menus and accordions;</li>
          <li>descriptive text alternatives for meaningful images;</li>
          <li>labelled form fields and clear error messages; and</li>
          <li>respect for your device's “reduce motion” setting.</li>
        </ul>
        <p>Some third-party content, such as embedded Google Forms, maps or scheduling tools, is outside our direct control. If you have trouble using it, please contact us and we will provide the information or service another way.</p>
      </>
    ),
  },
  {
    id: 'accommodations',
    title: 'Accommodation requests',
    body: (
      <>
        <p>We will provide accommodations for clients, candidates and visitors on request. Accommodations are available throughout our recruitment process, including during applications, interviews and assessments.</p>
        <p>Information about our services is available in accessible formats or with communication supports on request, at no extra cost. Examples include large print, plain-text documents, phone instead of video, or extra time for an assessment.</p>
      </>
    ),
  },
  {
    id: 'feedback',
    title: 'Feedback and contact',
    body: (
      <>
        <p>We welcome feedback on the accessibility of our website and services. To request an accommodation, request information in an accessible format, or tell us about a barrier:</p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}?subject=Accessibility%20request`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phone.href}`}>{SITE.phone.display}</a></li>
        </ul>
        <p>We aim to respond to accessibility feedback within 2 business days and will work with you to find a solution.</p>
      </>
    ),
  },
];

const AccessibilityPage = () => (
  <LegalLayout
    title="Accessibility Statement"
    description="FABZ HR's accessibility commitment under Ontario's AODA: our WCAG 2.1 AA website goals and how to request an accommodation or an accessible format."
    path="/accessibility"
    sections={sections}
  />
);

export default AccessibilityPage;
