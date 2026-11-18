import { SITE } from '../../config/site';

const abs = (path) => `${SITE.url}${path}`;
const ORG_ID = `${SITE.url}/#organization`;

/** Organization + LocalBusiness (ProfessionalService) — homepage. */
export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.legalName,
      alternateName: SITE.name,
      url: `${SITE.url}/`,
      logo: abs('/logo.png'),
      image: abs('/og-image.png'),
      slogan: SITE.tagline,
      email: SITE.email,
      foundingLocation: 'Toronto, Ontario, Canada',
      founder: { '@type': 'Person', name: 'Faiza Hussain', jobTitle: 'Founder & Principal HR Consultant' },
      sameAs: [SITE.social.linkedin, SITE.social.instagram],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: SITE.recruiterLicence.label,
        ...(SITE.recruiterLicence.number ? { identifier: SITE.recruiterLicence.number } : {}),
        recognizedBy: { '@type': 'GovernmentOrganization', name: 'Government of Ontario' },
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: SITE.email,
          areaServed: 'CA',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE.url}/#localbusiness`,
      name: SITE.legalName,
      url: `${SITE.url}/`,
      image: abs('/og-image.png'),
      logo: abs('/logo.png'),
      email: SITE.email,
      description: SITE.description,
      parentOrganization: { '@id': ORG_ID },
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'Country', name: 'Canada' },
      ],
      sameAs: [SITE.social.linkedin, SITE.social.instagram],
    },
  ],
});

/** BreadcrumbList. items: [{ name, path }] — Home is prepended automatically. */
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

/** FAQPage. faqs: [{ q, a }] with plain-string answers. */
export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/** Service schema for each of the four service pages. */
export const serviceSchema = ({ name, description, path, audience }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType: name,
  description,
  url: abs(path),
  provider: { '@type': 'Organization', '@id': ORG_ID, name: SITE.legalName, url: `${SITE.url}/` },
  areaServed: { '@type': 'Country', name: 'Canada' },
  ...(audience ? { audience: { '@type': 'Audience', audienceType: audience } } : {}),
});
