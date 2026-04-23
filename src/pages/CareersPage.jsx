import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MapPin, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const jobListings = [
  { id: 1, title: 'Senior Caregiver', category: 'Care Staffing', location: 'Toronto, ON', type: 'Part-time', desc: 'Seeking experienced caregivers for elderly care in home settings. Immediate start available.' },
  { id: 2, title: 'Child Care Worker', category: 'Care Staffing', location: 'Mississauga, ON', type: 'Full-time', desc: 'Dynamic child care professional needed for growing family daycare center.' },
  { id: 3, title: 'HR Coordinator', category: 'HR & Operations', location: 'Remote, Canada', type: 'Contract', desc: '6-month contract supporting our Fractional HR team with policy audits and onboarding.' },
  { id: 4, title: 'Career Coach', category: 'Coaching', location: 'Remote', type: 'Contract', desc: 'Join our network of expert coaches to support mid-career professionals.' },
  { id: 5, title: 'Administrative Assistant', category: 'Admin', location: 'Toronto, ON', type: 'Part-time', desc: 'Organized and detail-oriented assistant needed for office management.' },
];

const CareersPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState('');
  
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setValue('position', jobTitle);
    
    // Scroll to form
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Application data:', data);
    toast.success("🎉 Application received! We'll review your profile and be in touch.", {
      duration: 5000,
      style: {
        background: '#FFFFFF',
        color: '#0D1421',
        border: '1px solid #E5E7EB'
      }
    });
    reset();
    setSelectedJob('');
  };

  const filteredJobs = filter === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.category === filter);

  return (
    <>
      <Helmet>
        <title>Careers | FABZ HR Consulting Canada</title>
        <meta name="description" content="Looking for a job in care, HR, or coaching? Browse open roles and apply directly with your resume and certificates." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero">
        <div className="container text-center">
          <h1 className="page-title">Work With Us</h1>
          <p className="page-subtitle">Find your next opportunity in care, HR, or coaching.</p>
        </div>
      </section>

      {/* Intro & Jobs */}
      <section className="section-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <AnimatedSection className="text-center" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              We connect talented professionals with meaningful roles. Browse openings or submit a general profile — we keep profiles on file and reach out when the right role comes up.
            </p>
          </AnimatedSection>

          {/* Filters */}
          <div className="job-filters">
            {['All', 'Care Staffing', 'HR & Operations', 'Coaching', 'Admin'].map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="job-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <AnimatedSection key={job.id} delay={idx * 0.1} className="job-card hover-card">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span><MapPin size={16} /> {job.location}</span>
                      <span className="job-type-badge">{job.type}</span>
                    </div>
                    <p className="job-desc">{job.desc}</p>
                  </div>
                  <button className="btn btn-ghost" onClick={() => handleApplyClick(job.title)}>
                    Apply Now →
                  </button>
                </AnimatedSection>
              ))
            ) : (
              <p className="text-center" style={{ color: 'var(--text-secondary)', padding: '2rem' }}>No open roles in this category currently.</p>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-wrapper" style={{ backgroundColor: '#FFF8F5' }}>
        <div className="container">
          <div className="app-form-wrapper">
            <AnimatedSection className="text-center" style={{ marginBottom: '2.5rem' }}>
              <h2 className="gradient-heading" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Submit Your Application</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Whether you're applying for a specific role or submitting a general profile, we review every application.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="app-form">
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" {...register("fullName", { required: true })} className={errors.fullName ? 'error' : ''} />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" {...register("email", { required: true })} className={errors.email ? 'error' : ''} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" {...register("phone", { required: true })} className={errors.phone ? 'error' : ''} />
                  </div>
                  <div className="form-group">
                    <label>Position Applying For *</label>
                    <select {...register("position", { required: true })} className={errors.position ? 'error' : ''}>
                      <option value="">Select a position</option>
                      <option value="General Application">General Application</option>
                      <optgroup label="Care Staffing">
                        <option value="Senior Caregiver">Senior Caregiver</option>
                        <option value="Child Care Worker">Child Care Worker</option>
                        <option value="Care Staffing (Other)">Other Care Role</option>
                      </optgroup>
                      <optgroup label="HR Roles">
                        <option value="HR Coordinator">HR Coordinator</option>
                        <option value="HR Consultant">HR Consultant</option>
                      </optgroup>
                      <optgroup label="Coaching">
                        <option value="Career Coach">Career Coach</option>
                      </optgroup>
                      <optgroup label="Admin">
                        <option value="Administrative Assistant">Administrative Assistant</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City / Province *</label>
                    <input type="text" {...register("location", { required: true })} className={errors.location ? 'error' : ''} />
                  </div>
                  <div className="form-group">
                    <label>Work Authorization *</label>
                    <select {...register("auth", { required: true })} className={errors.auth ? 'error' : ''}>
                      <option value="">Select status</option>
                      <option value="Canadian Citizen">Canadian Citizen</option>
                      <option value="Permanent Resident">Permanent Resident</option>
                      <option value="Open Work Permit">Open Work Permit</option>
                      <option value="Employer-Specific Permit">Employer-Specific Permit</option>
                      <option value="Study Permit">Study Permit (co-op)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Years of Experience *</label>
                    <select {...register("experience", { required: true })} className={errors.experience ? 'error' : ''}>
                      <option value="">Select years</option>
                      <option value="<1">Less than 1</option>
                      <option value="1-3">1–3</option>
                      <option value="3-5">3–5</option>
                      <option value="5-10">5–10</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>LinkedIn Profile URL</label>
                    <input type="url" {...register("linkedin")} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Relevant Certifications</label>
                  <input type="text" placeholder="e.g., First Aid, PSW, HR Certificate" {...register("certifications")} />
                </div>

                <div className="form-group">
                  <label>Cover Letter / Tell Us About Yourself *</label>
                  <textarea 
                    rows="6" 
                    {...register("coverLetter", { required: true, minLength: 20 })} 
                    className={errors.coverLetter ? 'error' : ''}
                    placeholder="Briefly introduce yourself..."
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Upload Resume * (.pdf, .doc, .docx - max 5MB)</label>
                    <input type="file" accept=".pdf,.doc,.docx" {...register("resume", { required: true })} className={errors.resume ? 'error' : ''} style={{ padding: '0.5rem' }} />
                  </div>
                  <div className="form-group">
                    <label>Upload Certificates (.pdf, .jpg, .png - max 5MB)</label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple {...register("certs")} style={{ padding: '0.5rem' }} />
                  </div>
                </div>

                <div className="form-group consent-group">
                  <label className="checkbox-label">
                    <input type="checkbox" {...register("consent", { required: true })} />
                    <span>I agree to FABZ HR Consulting storing my information for recruitment purposes. *</span>
                  </label>
                  {errors.consent && <span className="error-text">You must agree to proceed.</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting} style={{ padding: '1.25rem', fontSize: '1.1rem', width: '100%' }}>
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: #FFF8F5;
          border-bottom: 1px solid #E5E7EB;
          padding: 6rem 0;
        }
        
        .page-title {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          color: #0D1421;
        }
        .page-subtitle {
          font-size: 1.25rem;
          color: #6B7280;
          margin-bottom: 1.5rem;
        }

        .job-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          border: 1px solid #E5E7EB;
          background-color: #FFFFFF;
          color: var(--text-primary);
          font-weight: 500;
          transition: all 0.2s;
        }
        .filter-btn:hover {
          border-color: var(--brand-orange);
        }
        .filter-btn.active {
          background-color: var(--brand-orange);
          color: white;
          border-color: var(--brand-orange);
        }

        .job-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .job-card {
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .job-card:hover {
          border-color: var(--brand-orange);
          box-shadow: 0 8px 32px rgba(232, 70, 26, 0.12);
          transform: translateY(-4px);
        }
        .job-title {
          font-size: 1.25rem;
          color: #0D1421;
          margin-bottom: 0.5rem;
        }
        .job-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .job-meta span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .job-type-badge {
          background-color: rgba(45, 212, 191, 0.1);
          color: var(--accent-teal);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
        }
        .job-desc {
          color: var(--text-secondary);
        }

        .app-form-wrapper {
          max-width: 800px;
          margin: 0 auto;
          background-color: #FFFFFF;
          padding: 3rem;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .app-form label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .form-row {
          display: flex;
          gap: 1.5rem;
        }
        .form-row .form-group {
          flex: 1;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-weight: 400 !important;
          cursor: pointer;
        }
        .checkbox-label input {
          width: auto;
          margin-top: 0.2rem;
        }
        .error {
          border-color: #ef4444 !important;
        }
        .error-text {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          display: block;
        }

        @media (max-width: 768px) {
          .job-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .job-card .btn {
            width: 100%;
          }
          .form-row {
            flex-direction: column;
            gap: 0;
          }
          .app-form-wrapper {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default CareersPage;
