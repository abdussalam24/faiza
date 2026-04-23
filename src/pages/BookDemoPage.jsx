import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/ui/AnimatedSection';

const BookDemoPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Booking data:', data);
    toast.success(`✅ Booking Request Received! We'll confirm your slot within 24 hours at ${data.email}.`, {
      duration: 5000,
      style: {
        background: '#FFFFFF',
        color: '#0D1421',
        border: '1px solid #E5E7EB',
        maxWidth: '500px'
      }
    });
    reset();
  };

  // Get tomorrow's date for the date picker minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Book a Consultation | FABZ HR Consulting</title>
        <meta name="description" content="Schedule a free 30-minute discovery call with Faiza Hussain. No obligation — just clarity on your HR challenges." />
      </Helmet>

      <section className="section-wrapper" style={{ backgroundColor: '#FFF8F5', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container">
          <div className="booking-grid">

            {/* Left Column */}
            <AnimatedSection className="booking-info">
              <span className="section-label">FREE DISCOVERY CALL</span>
              <h1 className="booking-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>Let's Talk About Your HR Needs</h1>
              <p className="booking-desc section-subtext" style={{ marginLeft: 0, textAlign: 'left' }}>
                In 30 minutes, we'll understand your challenges, explain how FABZ can help, and outline next steps — with no pressure and no obligation.
              </p>

              <ul className="booking-checklist">
                <li><span className="check">✅</span> 30-minute focused conversation</li>
                <li><span className="check">✅</span> Identify your biggest HR challenge</li>
                <li><span className="check">✅</span> Discover which service is right for you</li>
                <li><span className="check">✅</span> Walk through pricing and timelines</li>
                <li><span className="check">✅</span> Meet Faiza directly — no gatekeepers</li>
              </ul>

              <div className="booking-founder">
                <img
                  src="/faiza.png"
                  alt="Faiza Hussain"
                  className="booking-avatar"
                />
                <div>
                  <strong>Faiza Hussain</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Founder & Principal HR Consultant</p>
                </div>
              </div>

              <div className="booking-fallback">
                Prefer email? <a href="mailto:hello@fabzconsulting.ca">hello@fabzconsulting.ca</a>
              </div>
            </AnimatedSection>

            {/* Right Column (Form) */}
            <AnimatedSection className="booking-form-wrapper" delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" {...register("fullName", { required: true })} className={errors.fullName ? 'error' : ''} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" {...register("email", { required: true })} className={errors.email ? 'error' : ''} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" {...register("phone", { required: true })} className={errors.phone ? 'error' : ''} />
                  </div>
                  <div className="form-group">
                    <label>Company / Organization</label>
                    <input type="text" placeholder="Or 'Individual' if personal" {...register("company")} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Number of Employees</label>
                  <select {...register("employees")}>
                    <option value="">Select size</option>
                    <option value="1-10">1–10</option>
                    <option value="10-50">10–50</option>
                    <option value="50-100">50–100</option>
                    <option value="100-500">100–500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Service You're Interested In *</label>
                  <div className="checkbox-grid">
                    <label className="checkbox-label"><input type="checkbox" value="Care Staffing" {...register("services", { required: true })} /> Care Staffing</label>
                    <label className="checkbox-label"><input type="checkbox" value="Fractional HR" {...register("services", { required: true })} /> Fractional HR</label>
                    <label className="checkbox-label"><input type="checkbox" value="Global Mobility" {...register("services", { required: true })} /> Global Mobility</label>
                    <label className="checkbox-label"><input type="checkbox" value="Career Coaching" {...register("services", { required: true })} /> Career Coaching</label>
                    <label className="checkbox-label"><input type="checkbox" value="Not Sure Yet" {...register("services", { required: true })} /> Not Sure Yet</label>
                  </div>
                  {errors.services && <span className="error-text">Please select at least one service.</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input type="date" min={minDate} {...register("date", { required: true })} className={errors.date ? 'error' : ''} />
                  </div>
                  <div className="form-group">
                    <label>Preferred Time *</label>
                    <select {...register("time", { required: true })} className={errors.time ? 'error' : ''}>
                      <option value="">Select time</option>
                      <option value="Morning">Morning (9am–12pm)</option>
                      <option value="Afternoon">Afternoon (12pm–4pm)</option>
                      <option value="Evening">Evening (4pm–6pm)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Timezone *</label>
                    <select {...register("timezone", { required: true })} className={errors.timezone ? 'error' : ''}>
                      <option value="">Select timezone</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      <option value="PST">PST</option>
                      <option value="GMT">GMT</option>
                      <option value="GST">GST (UAE)</option>
                      <option value="PKT">PKT</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>How Did You Hear About Us?</label>
                    <select {...register("source")}>
                      <option value="">Select source</option>
                      <option value="Google">Google</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Brief Description of Your Need</label>
                  <textarea rows="3" {...register("description")}></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full btn-submit" disabled={isSubmitting} style={{ width: '100%' }}>
                  {isSubmitting ? 'Submitting...' : 'Confirm My Booking Request'}
                </button>
              </form>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <style>{`
        .booking-grid {
          display: flex;
          gap: 5rem;
          align-items: flex-start;
        }
        .booking-info {
          flex: 0 0 45%;
        }
        .booking-form-wrapper {
          flex: 0 0 55%;
          background-color: #FFFFFF;
          padding: 3rem;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .booking-title {
          font-size: 3rem;
          color: var(--text-heading);
        }
        .booking-desc {
          margin-bottom: 2.5rem;
        }
        .booking-checklist {
          list-style: none;
          margin-bottom: 3rem;
          padding: 0;
        }
        .booking-checklist li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: var(--text-primary);
        }
        .check {
          font-size: 1.2rem;
        }
        .booking-founder {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        .booking-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--brand-orange);
        }
        .booking-fallback {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .booking-fallback a {
          color: var(--brand-orange);
          font-weight: 500;
        }

        .booking-form label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .form-row .form-group {
          flex: 1;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .checkbox-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 400 !important;
          cursor: pointer;
        }
        .checkbox-label input {
          width: auto;
          margin-top: 0;
        }
        .error {
          border-color: #ef4444;
        }
        .error-text {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          display: block;
        }
        .btn-submit {
          padding: 1rem;
          font-size: 1.1rem;
        }

        @media (max-width: 992px) {
          .booking-grid {
            flex-direction: column;
            gap: 4rem;
          }
          .booking-info, .booking-form-wrapper {
            flex: 1;
            width: 100%;
          }
          .booking-form-wrapper {
            padding: 1.5rem;
          }
          .form-row {
            flex-direction: column;
            gap: 0;
          }
          .booking-title {
            text-align: left;
          }
          .booking-desc {
            text-align: left;
          }
        }
        @media (max-width: 576px) {
          .checkbox-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default BookDemoPage;
