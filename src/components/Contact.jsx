import React, { useState } from 'react';
import TechnicalBadge from './TechnicalBadge';
import Button from './Button';
import { MapPin, Mail, Phone, Globe, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { addInquiry } from '../admin/services/contactService';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.service ? `${formData.service} Inquiry` : 'Web Quote Request',
        service: formData.service,
        message: formData.message
      });

      // Construct formatted WhatsApp message and redirect directly to Admin WhatsApp
      const whatsappText = encodeURIComponent(
        `*New Engineering Project Inquiry*\n` +
        `-----------------------------------------\n` +
        `*Full Name:* ${formData.fullName}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone || 'N/A'}\n` +
        `*Company:* ${formData.company || 'N/A'}\n` +
        `*Service Requested:* ${formData.service}\n` +
        `*Message Details:*\n${formData.message}\n` +
        `-----------------------------------------`
      );
      
      const whatsappUrl = `https://wa.me/919790990345?text=${whatsappText}`;
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section 
      id="contact" 
      className="relative bg-[#050505] text-[#FFFFFF] section-padding grid-bg-pattern overflow-hidden"
    >
      <div className="container-custom relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 animate-fade-up">
          <TechnicalBadge text="CONTACT US" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Let's Build the <span className="text-[#E51B23]">Future Together</span>
          </h2>
          
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-normal">
            Whether you need product design, structural validation, CFD analysis, or manufacturing support, our engineering experts are ready to help.
          </p>
        </div>

        {/* TWO-COLUMN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Info & Company Details (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#0D0D0D] border border-white/12 p-6 sm:p-8 rounded-sm space-y-6 shadow-2xl relative">
              <div className="tech-corner-tl" />
              <div className="tech-corner-tr" />

              <div className="border-b border-white/12 pb-4">
                <span className="text-xs font-mono text-[#E51B23] font-bold uppercase tracking-widest block mb-1">
                  HEADQUARTERS & CONTACT DETAILS
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  Rise Point Consultancy Services
                </h3>
              </div>

              <div className="space-y-5 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-white/12 rounded-sm text-[#E51B23] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#A1A1A1] uppercase mb-0.5">LOCATION</div>
                    <div className="text-white font-medium leading-relaxed">
                      SFNO.141/1A P.NO.54, TNHB, PERUMALPATTU, Chennai-602024
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-white/12 rounded-sm text-[#E51B23] shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#A1A1A1] uppercase mb-0.5">EMAIL ADDRESSES</div>
                    <div className="flex flex-col space-y-1">
                      <a href="mailto:contact@rpcs.co.in" className="text-white font-medium hover:text-[#E51B23] transition-colors">
                        contact@rpcs.co.in
                      </a>
                      <a href="mailto:pavithra@rpcs.co.in" className="text-white font-medium hover:text-[#E51B23] transition-colors">
                        pavithra@rpcs.co.in
                      </a>
                      <a href="mailto:support@rpcs.co.in" className="text-white font-medium hover:text-[#E51B23] transition-colors">
                        support@rpcs.co.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-white/12 rounded-sm text-[#E51B23] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#A1A1A1] uppercase mb-0.5">PHONE & WHATSAPP</div>
                    <div className="flex items-center gap-3">
                      <a href="tel:+919790990345" className="text-white font-medium hover:text-[#E51B23] transition-colors">
                        +91-9790990345
                      </a>
                      <a 
                        href="https://wa.me/919790990345" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 px-2 py-0.5 rounded text-xs font-mono font-bold hover:bg-[#25D366] hover:text-black transition-colors"
                      >
                        WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#141414] border border-white/12 rounded-sm text-[#E51B23] shrink-0 mt-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#A1A1A1] uppercase mb-0.5">WEBSITE</div>
                    <a href="http://www.r-pcs.co.in" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#E51B23] transition-colors">
                      www.r-pcs.co.in
                    </a>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-white/12 text-xs font-mono text-[#A1A1A1] flex items-center justify-between">
                <span>ENGINEERING INQUIRIES</span>
                <span className="text-[#E51B23] font-bold">24-48 HR RESPONSE</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Professional Quote Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D0D0D] border border-white/12 p-6 sm:p-8 rounded-sm shadow-2xl relative">
              <div className="tech-corner-tl" />
              <div className="tech-corner-tr" />

              <div className="border-b border-white/12 pb-4 mb-6">
                <span className="text-xs font-mono text-[#E51B23] font-bold uppercase tracking-widest block mb-1">
                  REQUEST A CONSULTATION / QUOTE
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Send Your Project Requirements
                </h3>
              </div>

              {/* Success Banner */}
              {submitted ? (
                <div className="bg-[#E51B23]/10 border border-[#E51B23] p-6 rounded-sm space-y-3 animate-fade-in text-center">
                  <div className="w-12 h-12 bg-[#E51B23] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Quote Request Received!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Rise Point Consultancy Services. Our engineering team will review your requirements and get back to you shortly.
                  </p>
                  <button 
                    type="button" 
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#E51B23] underline hover:text-white pt-2 inline-block"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-[#E51B23]">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-[#050505] border text-white text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#E51B23] transition-colors placeholder:text-gray-600 ${
                          errors.fullName ? 'border-[#E51B23]' : 'border-white/12'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] font-mono text-[#E51B23] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address <span className="text-[#E51B23]">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full bg-[#050505] border text-white text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#E51B23] transition-colors placeholder:text-gray-600 ${
                          errors.email ? 'border-[#E51B23]' : 'border-white/12'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-[#E51B23] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#050505] border border-white/12 text-white text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#E51B23] transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Inc."
                        className="w-full bg-[#050505] border border-white/12 text-white text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#E51B23] transition-colors placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Required <span className="text-[#E51B23]">*</span>
                    </label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full bg-[#050505] border text-white text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#E51B23] transition-colors ${
                        errors.service ? 'border-[#E51B23]' : 'border-white/12'
                      }`}
                    >
                      <option value="" disabled>Select a service category</option>
                      <option value="Design Engineering (CAD)">Design Engineering (CAD)</option>
                      <option value="Finite Element Analysis (FEA)">Finite Element Analysis (FEA)</option>
                      <option value="Computational Fluid Dynamics (CFD)">Computational Fluid Dynamics (CFD)</option>
                      <option value="Manufacturing Engineering (CAM)">Manufacturing Engineering (CAM)</option>
                      <option value="Other">Other Engineering Solutions</option>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] font-mono text-[#E51B23] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Project Details <span className="text-[#E51B23]">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your engineering requirements, project scope, or timeline..."
                      className={`w-full bg-[#050505] border text-white text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-[#E51B23] transition-colors placeholder:text-gray-600 ${
                        errors.message ? 'border-[#E51B23]' : 'border-white/12'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-[#E51B23] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button variant="primary" type="submit" className="w-full text-sm py-3.5 justify-center shadow-red-glow">
                      <span>REQUEST A QUOTE</span>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
