import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer section-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col footer-brand">
            <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <img src="/logo.png" alt="Fabz HR Logo" style={{ height: '48px', width: 'auto', display: 'block' }} />
              <span className="logo-text" style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 700, color: '#0D1421', letterSpacing: '0.5px' }}>Fabz HR</span>
            </Link>
            <p className="tagline">Trust · Respect · Transparency · Accountability</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/faizahussain/" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/care-staffing">Care Staffing</Link></li>
              <li><Link to="/fractional-hr">Fractional HR</Link></li>
              <li><Link to="/global-mobility">Global Mobility</Link></li>
              <li><Link to="/career-coaching">Career Coaching</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links & Contact</h4>
            <ul className="footer-links" style={{ marginBottom: '1rem' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/book-demo">Book a Consultant</Link></li>
            </ul>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Ontario, Canada</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+1 (234) 567-890</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@fabzconsulting.ca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fabz HR. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #FFF8F5;
          border-top: 1px solid #E5E7EB;
          color: #374151;
          padding-bottom: 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .tagline {
          color: #6B7280;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          color: #374151;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: #E8461A;
          color: white;
          border-color: #E8461A;
          transform: translateY(-2px);
        }
        .footer-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          color: #0D1421;
          padding-bottom: 0.5rem;
        }
        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background-color: #E8461A;
        }
        .footer-links, .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li, .contact-info li {
          margin-bottom: 0.75rem;
        }
        .footer-links a, .contact-info span {
          color: #6B7280;
          transition: color 0.2s;
          font-size: 0.95rem;
        }
        .footer-links a:hover {
          color: #E8461A;
        }
        .contact-info li {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .contact-icon {
          color: #E8461A;
          flex-shrink: 0;
        }
        .footer-bottom {
          border-top: 1px solid #E5E7EB;
          padding-top: 2rem;
          text-align: center;
          color: #9CA3AF;
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .footer-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .social-links {
            justify-content: center;
          }
          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          .contact-info li {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

