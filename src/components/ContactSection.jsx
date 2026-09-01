import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Building
} from 'lucide-react';

export default function ContactSection({ onSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'CAD Modeling',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitted({
        type: 'contact',
        name: formData.name,
        email: formData.email
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'CAD Modeling',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center mx-auto">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let's Build the <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Whether you need product design, structural validation, CFD analysis, or manufacturing support, our engineering experts are ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info Cards & Chennai Map Badge */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Highlights */}
            <div className="glass-card p-8 border-cyan-500/30 bg-slate-900/80">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Rise Point Consultancy Services</span>
              </h3>

              <div className="space-y-5">
                
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Headquarters</div>
                    <div className="text-base font-bold text-white">Chennai, India</div>
                    <div className="text-xs text-slate-400 mt-0.5">Engineering Hub & Operations Desk</div>
                  </div>
                </div>

                {/* Email */}
                <a 
                  href="mailto:info@rpcs.co.in" 
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Official Email</div>
                    <div className="text-base font-bold text-cyan-400 group-hover:underline">info@rpcs.co.in</div>
                    <div className="text-xs text-slate-400 mt-0.5">Prompt technical reply within 24 hours</div>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+919790990345" 
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Direct Desk & WhatsApp</div>
                    <div className="text-base font-bold text-emerald-400 group-hover:underline">+91 9790990345</div>
                    <div className="text-xs text-slate-400 mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                  </div>
                </a>

                {/* Website */}
                <a 
                  href="http://www.r-pcs.co.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Official Web Portal</div>
                    <div className="text-base font-bold text-indigo-400 group-hover:underline">www.r-pcs.co.in</div>
                  </div>
                </a>

              </div>
            </div>

            {/* Chennai Location Graphic Banner */}
            <div className="glass-card p-6 border-slate-800 bg-slate-950 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                  <MapPin className="w-4 h-4" /> Chennai Engineering Hub
                </span>
                <span>Tamil Nadu, India</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strategic technical consultancy location serving global clients across automotive, energy, aerospace, and manufacturing domains.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Engineering Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 border-cyan-500/30 bg-slate-900/90 shadow-2xl">
              
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Send an Engineering Message
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Fill out your details below and an RPCS senior engineering consultant will review your project requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Vikram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9790990345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="CAD Modeling">Design Engineering (CAD)</option>
                      <option value="FEA Structural">Finite Element Analysis (FEA)</option>
                      <option value="CFD Flow">Computational Fluid Dynamics (CFD)</option>
                      <option value="CAM Tooling">Manufacturing Engineering (CAM)</option>
                      <option value="General Consultation">General Engineering Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Project Requirements / Challenge Summary *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Briefly describe component details, material specifications, FEA load conditions, or fluid flow parameters..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base shadow-xl shadow-cyan-500/25 justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      <span>Send Direct Engineering Inquiry</span>
                    </span>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono pt-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Direct Routing to RPCS Technical Lead Desk</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
