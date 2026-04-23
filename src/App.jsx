import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ui/ScrollToTop';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookDemoPage from './pages/BookDemoPage';
import CareersPage from './pages/CareersPage';

// Service Pages
import CareStaffingPage from './pages/services/CareStaffingPage';
import FractionalHRPage from './pages/services/FractionalHRPage';
import GlobalMobilityPage from './pages/services/GlobalMobilityPage';
import CareerCoachingPage from './pages/services/CareerCoachingPage';

// Styles
import './styles/global.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <TopBar />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/book-demo" element={<BookDemoPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/care-staffing" element={<CareStaffingPage />} />
              <Route path="/fractional-hr" element={<FractionalHRPage />} />
              <Route path="/global-mobility" element={<GlobalMobilityPage />} />
              <Route path="/career-coaching" element={<CareerCoachingPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
        <Toaster position="bottom-right" />
      </Router>
    </HelmetProvider>
  );
}

export default App;
