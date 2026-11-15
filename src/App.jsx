import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import ScrollReset from './components/ui/ScrollReset';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/layout/ChatWidget';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookDemoPage from './pages/BookDemoPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import HRHealthCheckPage from './pages/HRHealthCheckPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';
import AccessibilityPage from './pages/legal/AccessibilityPage';

// Service Pages
import RecruitmentPage from './pages/services/RecruitmentPage';
import FractionalHRPage from './pages/services/FractionalHRPage';
import GlobalMobilityPage from './pages/services/GlobalMobilityPage';
import CareerServicesPage from './pages/services/CareerServicesPage';

// Styles
import './styles/global.css';

function App() {
  return (
    <>
      <ScrollReset />
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="app-container">
        <TopBar />
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/hr-health-check" element={<HRHealthCheckPage />} />
            <Route path="/blog" element={<PostListPage type="blog" />} />
            <Route path="/blog/:slug" element={<PostPage type="blog" />} />
            <Route path="/announcements" element={<PostListPage type="announcement" />} />
            <Route path="/announcements/:slug" element={<PostPage type="announcement" />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/recruitment-executive-search" element={<RecruitmentPage />} />
            <Route path="/fractional-hr" element={<FractionalHRPage />} />
            <Route path="/global-mobility" element={<GlobalMobilityPage />} />
            <Route path="/career-services" element={<CareerServicesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <ChatWidget />
      </div>
    </>
  );
}

export default App;
