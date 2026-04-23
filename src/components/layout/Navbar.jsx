import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const services = [
    { name: 'Care Staffing', path: '/care-staffing' },
    { name: 'Fractional HR', path: '/fractional-hr' },
    { name: 'Global Mobility', path: '/global-mobility' },
    { name: 'Career Coaching', path: '/career-coaching' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Fabz HR Logo" className="logo-img" />
          <span className="logo-text">Fabz HR</span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          
          <div 
            className="dropdown-container"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className={`nav-link ${location.pathname.includes('service') || location.pathname.includes('fractional') || location.pathname.includes('coaching') || location.pathname.includes('staffing') || location.pathname.includes('mobility') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services <ChevronDown size={16} />
            </button>
            {servicesDropdownOpen && (
              <div className="dropdown-menu">
                {services.map((service) => (
                  <Link key={service.name} to={service.path} className="dropdown-item">
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/careers" className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>

        <div className="nav-actions desktop-nav">
          <Link to="/book-demo" className="btn btn-primary">Book a Consultant</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle">
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          
          <div className="mobile-services-label">Services</div>
          {services.map((service) => (
            <Link key={service.name} to={service.path} className="mobile-link nested">
              {service.name}
            </Link>
          ))}
          
          <Link to="/careers" className={`mobile-link ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
          <Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          
          <Link to="/book-demo" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Book a Consultant</Link>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #FFFFFF;
          border-bottom: 1px solid #E5E7EB;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          padding: 1rem 0;
        }
        .navbar.scrolled {
          background-color: #FFFFFF;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 0.75rem 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          height: 48px;
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(232, 70, 26, 0.35));
        }
        .logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0D1421;
          letter-spacing: 0.5px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 600;
          font-size: 0.95rem;
          position: relative;
          padding: 0.5rem 0;
          color: #374151;
          transition: color 0.3s;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-link:hover {
          color: #E8461A;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #E8461A;
        }
        .dropdown-container {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: -1rem;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          padding: 0.5rem 0;
          min-width: 200px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
        }
        .dropdown-item {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          color: #374151;
          transition: background-color 0.2s, color 0.2s;
        }
        .dropdown-item:hover {
          background-color: #FFF8F5;
          color: #E8461A;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mobile-toggle {
          display: none;
          align-items: center;
        }
        .hamburger {
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #FFFFFF;
            padding: 1.5rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-bottom: 1px solid #E5E7EB;
          }
          .mobile-link {
            padding: 1rem 0;
            border-bottom: 1px solid #E5E7EB;
            font-size: 1.1rem;
            font-weight: 500;
            color: #0D1421;
          }
          .mobile-link.nested {
            padding-left: 1.5rem;
            font-size: 1rem;
            color: #6B7280;
          }
          .mobile-services-label {
            padding: 1rem 0;
            font-weight: 600;
            font-size: 1.1rem;
            color: #E8461A;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
