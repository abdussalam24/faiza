import React from 'react';
import Seo from '../components/seo/Seo';
import { organizationSchema } from '../components/seo/schema';
import HeroSection from '../components/home/HeroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import FabzPathGuide from '../components/home/FabzPathGuide';
import EngagementModels from '../components/home/EngagementModels';
import ValuesSection from '../components/home/ValuesSection';
import FounderSpotlight from '../components/home/FounderSpotlight';
import PartnerStrip from '../components/home/PartnerStrip';
import QuickEnquiryForm from '../components/home/QuickEnquiryForm';

const HomePage = () => {
  return (
    <>
      <Seo
        title="FABZ HR Consulting | HR Services in Canada"
        description="Expert HR services across Canada: recruitment and executive search, fractional HR, global mobility and career coaching. Book a free HR health check today."
        path="/"
        jsonLd={organizationSchema()}
      />

      <HeroSection />
      <ServicesGrid />
      <FabzPathGuide />
      <EngagementModels />
      <ValuesSection />
      <FounderSpotlight />
      <PartnerStrip />
      <QuickEnquiryForm />
    </>
  );
};

export default HomePage;
