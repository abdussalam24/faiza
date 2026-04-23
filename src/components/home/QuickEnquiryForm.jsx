import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AnimatedSection from '../ui/AnimatedSection';

const QuickEnquiryForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Simulated API call for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    toast.success("✅ Thanks! We'll be in touch within 24 hours.", {
      style: {
        background: '#FFFFFF',
        color: '#0D1421',
        border: '1px solid #E5E7EB'
      }
    });
    reset();
  };

  return (
    <section className="section-wrapper" style={{ backgroundColor: '#FFF8F5' }}>
      <div className="container">
        <div className="enquiry-grid">
          <AnimatedSection className="enquiry-text">
            <h2 className="enquiry-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>Have a Question? Let's Talk.</h2>
            <p className="enquiry-desc section-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
              Whether you need immediate staffing support or are looking for long-term HR leadership, our team is ready to help you navigate your challenges.
            </p>
            <div className="enquiry-contact-info">
              <p><strong>Email:</strong> hello@fabzconsulting.ca</p>
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Location:</strong> Ontario, Canada</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="enquiry-form-wrapper" delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="enquiry-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  {...register("fullName", { required: true })} 
                  className={errors.fullName ? 'error' : ''}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  {...register("email", { required: true })} 
                  className={errors.email ? 'error' : ''}
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  {...register("phone", { required: true })} 
                  className={errors.phone ? 'error' : ''}
                />
              </div>
              <div className="form-group">
                <select 
                  {...register("service", { required: true })}
                  className={errors.service ? 'error' : ''}
                  defaultValue=""
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Care Staffing">Care Staffing</option>
                  <option value="Fractional HR">Fractional HR</option>
                  <option value="Global Mobility">Global Mobility</option>
                  <option value="Career Coaching">Career Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  {...register("message")}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
                style={{ width: '100%', minHeight: '44px' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        .enquiry-grid {
          display: flex;
          gap: 4rem;
          align-items: center;
        }
        .enquiry-text {
          flex: 1;
        }
        .enquiry-form-wrapper {
          flex: 1;
          background-color: #FFFFFF;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .enquiry-title {
          font-size: 2.5rem;
          color: var(--text-heading);
        }
        .enquiry-contact-info p {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group input.error, .form-group select.error {
          border-color: #ef4444;
        }

        @media (max-width: 992px) {
          .enquiry-grid {
            flex-direction: column;
            gap: 3rem;
          }
          .enquiry-text, .enquiry-form-wrapper {
            width: 100%;
          }
          .enquiry-text {
            text-align: center;
          }
          .enquiry-title, .enquiry-desc {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .enquiry-contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default QuickEnquiryForm;
