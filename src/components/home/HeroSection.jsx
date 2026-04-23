import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section hero-glow-bg section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="section-label">CANADA'S TRUSTED HR PARTNER</span>
            </motion.div>
            
            <motion.h1 className="hero-title gradient-heading" variants={itemVariants}>
              HR That Works as Hard as You Do.
            </motion.h1>
            
            <motion.p className="hero-description hero-subtext" variants={itemVariants}>
              FABZ HR Consulting partners with businesses, families, and individuals to deliver expert HR solutions — from care staffing and fractional HR leadership to global mobility and career coaching. Built on trust. Delivered with accountability.
            </motion.p>
            
            <motion.div className="hero-buttons cta-group" variants={itemVariants}>
              <Link to="/book-demo" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
                Book a Free Consultation <ArrowRight size={18} />
              </Link>
              <a href="#services" onClick={scrollToServices} className="btn btn-ghost" style={{ minHeight: '44px' }}>
                Explore Our Services
              </a>
            </motion.div>
            
            <motion.div className="hero-chips" variants={itemVariants}>
              <motion.span className="chip" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>🇨🇦 Based in Canada</motion.span>
              <motion.span className="chip" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>🌍 Global Reach</motion.span>
              <motion.span className="chip" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>14+ Years Experience</motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="HR Professional" 
              className="hero-image"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          display: flex;
          align-items: center;
          padding: 120px 0;
          position: relative;
        }
        .hero-glow-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse 60% 50% at 20% 50%, rgba(232,70,26,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        .hero-text {
          flex: 0 0 55%;
        }
        .hero-image-wrapper {
          flex: 0 0 45%;
        }
        .hero-title {
          margin-bottom: 24px;
        }
        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 90%;
        }
        .hero-buttons {
          margin-bottom: 3rem;
        }
        .hero-chips {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .chip {
          background: #FFF8F5;
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .hero-image-wrapper {
          padding: 8px;
          background: #FFFFFF;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .hero-image {
          border-radius: 12px;
          width: 100%;
          height: auto;
          object-fit: cover;
          aspect-ratio: 4/5;
        }

        @media (max-width: 1024px) {
          .hero-text { flex: 0 0 60%; }
          .hero-image-wrapper { flex: 0 0 40%; }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 0;
          }
          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
          }
          .hero-text, .hero-image-wrapper {
            flex: 0 0 100%;
            width: 100%;
          }
          .hero-description {
            max-width: 100%;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-chips {
            justify-content: center;
          }
          .section-label {
            margin: 0 auto 24px auto;
          }
        }
        @media (max-width: 576px) {
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          .hero-buttons .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
