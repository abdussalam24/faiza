import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import RevenueModelStrip from '../components/home/RevenueModelStrip';
import ValuesSection from '../components/home/ValuesSection';
import FounderSpotlight from '../components/home/FounderSpotlight';
import QuickEnquiryForm from '../components/home/QuickEnquiryForm';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>FABZ HR Consulting | HR Services in Canada</title>
        <meta name="description" content="Expert HR services in Canada — Care Staffing, Fractional HR, Global Mobility, and Career Coaching. Book a free discovery call today." />
      </Helmet>
      
      <HeroSection />
      <ServicesGrid />
      <RevenueModelStrip />
      <ValuesSection />
      <FounderSpotlight />
      <QuickEnquiryForm />
    </>
  );
};

export default HomePage;
