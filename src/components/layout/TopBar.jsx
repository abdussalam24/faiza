import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#6B7280', padding: '0.5rem 0', fontSize: '0.875rem', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="tel:+1234567890" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', transition: 'color 0.2s' }} className="hover-orange">
            <Phone size={14} />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:hello@fabzconsulting.ca" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', transition: 'color 0.2s' }} className="hover-orange">
            <Mail size={14} />
            <span>hello@fabzconsulting.ca</span>
          </a>
        </div>
        <div>
          <Link to="/book-demo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E8461A', fontWeight: '600', transition: 'color 0.2s' }} className="hover-orange">
            Book a Free Discovery Call <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <style>{`
        .hover-orange:hover { color: var(--brand-orange) !important; }
        @media (max-width: 768px) {
          .container { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default TopBar;

