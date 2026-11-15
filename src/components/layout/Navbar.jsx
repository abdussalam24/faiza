import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { SERVICES } from '../../data/services';
import { SITE } from '../../config/site';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const servicesBtnRef = useRef(null);
  const dropdownRef = useRef(null);
  const menuToggleRef = useRef(null);
  const overlayRef = useRef(null);

  const isServiceRoute = SERVICES.some((s) => location.pathname.startsWith(s.path));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
    menuToggleRef.current?.focus();
  }, []);

  // Mobile overlay: lock scroll, focus first link, Escape closes, keep focus inside.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () =>
      overlayRef.current ? [...overlayRef.current.querySelectorAll('a[href], button:not([disabled])')] : [];
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobile();
      if (e.key === 'Tab') {
        const els = focusables();
        if (!els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen, closeMobile]);

  // Desktop dropdown: Escape closes and returns focus; click outside closes.
  useEffect(() => {
    if (!servicesOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        servicesBtnRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [servicesOpen]);

  const onDropdownBlur = (e) => {
    if (!dropdownRef.current?.contains(e.relatedTarget)) setServicesOpen(false);
  };

  const onDropdownKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setServicesOpen(true);
      requestAnimationFrame(() => dropdownRef.current?.querySelector('.dropdown-item')?.focus());
    }
  };

  const navClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" aria-label={`${SITE.legalName} — home`}>
          <Logo variant="color" height={72} className="logo-img" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main">
          <NavLink to="/" end className={navClass}>Home</NavLink>

          <div
            className="dropdown-container"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={onDropdownBlur}
            onKeyDown={onDropdownKeyDown}
          >
            <button
              ref={servicesBtnRef}
              type="button"
              className={`nav-link nav-dropdown-toggle ${isServiceRoute ? 'active' : ''}`}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services <ChevronDown size={16} aria-hidden="true" className={`chev ${servicesOpen ? 'open' : ''}`} />
            </button>
            <ul id="services-menu" className="dropdown-menu" hidden={!servicesOpen}>
              {SERVICES.map((service) => (
                <li key={service.path}>
                  <NavLink to={service.path} className="dropdown-item">
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <Link to="/book-demo" className="btn btn-primary nav-cta">Book a Consultation</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          ref={menuToggleRef}
          type="button"
          className="hamburger"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={28} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-head">
          <Logo variant="color" height={50} />
          <button type="button" className="hamburger mobile-close" onClick={closeMobile} aria-label="Close menu">
            <X size={30} aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-menu-body" aria-label="Mobile">
          <NavLink to="/" end className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <p className="mobile-services-label" id="mobile-services-label">Services</p>
          <ul aria-labelledby="mobile-services-label" className="mobile-services">
            {SERVICES.map((service) => (
              <li key={service.path}>
                <NavLink to={service.path} className={({ isActive }) => `mobile-link nested ${isActive ? 'active' : ''}`}>
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/about" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>
        <div className="mobile-menu-foot">
          <Link to="/book-demo" className="btn btn-primary btn-full btn-lg">
            Book a Consultation <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <p className="mobile-contact">
            <a href={`tel:${SITE.phone.href}`}>{SITE.phone.display}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          /* Light header, as on www.fabzhr.com, so the full-colour logo reads correctly */
          background-color: var(--cream);
          border-bottom: 1px solid var(--line);
          transition: box-shadow 0.3s ease, padding 0.3s ease;
          padding: 0.7rem 0;
        }
        .navbar.scrolled {
          box-shadow: 0 6px 24px var(--navy-12);
          padding: 0.45rem 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-img {
          display: block;
          transition: height 0.3s ease;
        }
        .navbar.scrolled .logo-img {
          height: 60px !important;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          position: relative;
          padding: 0.5rem 0;
          color: var(--navy);
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover {
          text-decoration: underline;
          text-decoration-color: var(--lime);
          text-decoration-thickness: 3px;
          text-underline-offset: 8px;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background-color: var(--lime);
          box-shadow: 0 1px 0 var(--navy);
        }
        .chev { transition: transform 0.2s ease; }
        .chev.open { transform: rotate(180deg); }
        .dropdown-container {
          position: relative;
        }
        .dropdown-menu {
          list-style: none;
          position: absolute;
          top: 100%;
          left: -1rem;
          background-color: var(--cream);
          border: 1px solid var(--line);
          border-top: 3px solid var(--lime);
          border-radius: 0 0 10px 10px;
          padding: 0.5rem 0;
          min-width: 220px;
          box-shadow: 0 16px 30px var(--navy-12);
          display: flex;
          flex-direction: column;
        }
        .dropdown-menu[hidden] { display: none; }
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 0.6rem 1.5rem;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--navy);
          transition: background-color 0.2s, color 0.2s;
        }
        .dropdown-item:hover, .dropdown-item.active {
          background-color: var(--surface-alt);
          color: var(--navy);
          box-shadow: inset 4px 0 0 var(--lime);
        }
        .nav-cta {
          padding: 0.6rem 1.15rem;
          font-size: 0.92rem;
          border-color: var(--navy);
        }
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          min-width: 44px;
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 1100;
          background-color: var(--navy);
          display: flex;
          flex-direction: column;
          padding: 1rem 1.25rem 1.5rem;
          overflow-y: auto;
        }
        .mobile-menu[hidden] { display: none; }
        .mobile-menu-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: -1rem -1.25rem 0;
          padding: 0.75rem 1.25rem;
          background: var(--cream);
          border-bottom: 3px solid var(--lime);
        }
        .mobile-close { display: flex; color: var(--navy); }
        .mobile-menu-body {
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          flex: 1;
        }
        .mobile-link {
          display: flex;
          align-items: center;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--cream-15);
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--cream);
        }
        .mobile-link.active, .mobile-link:hover { color: var(--lime); }
        .mobile-services { list-style: none; }
        .mobile-link.nested {
          padding-left: 1.25rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--cream-80);
        }
        .mobile-link.nested.active { color: var(--lime); }
        .mobile-services-label {
          padding: 1rem 0 0.25rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--lime);
        }
        .mobile-menu-foot {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          color: var(--cream-80);
          font-size: 0.95rem;
        }
        .mobile-contact a { min-height: 36px; display: inline-flex; align-items: center; }

        @media (max-width: 960px) {
          .desktop-nav { gap: 1.25rem; }
          .nav-cta { padding: 0.55rem 0.9rem; font-size: 0.85rem; }
        }
        @media (max-width: 860px) {
          .desktop-nav { display: none; }
          .hamburger { display: flex; }
          .logo-img { height: 56px !important; }
        }
      ` }} />
    </header>
  );
};

export default Navbar;
