import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Box, 
  Activity, 
  Wind, 
  Cog, 
  CheckCircle2, 
  Calculator, 
  Sparkles,
  Phone,
  Mail,
  User,
  Building
} from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialType = 'quote', onSubmitted }) {
  const [mode, setMode] = useState(initialType); // 'quote' or 'consultation'
  const [selectedService, setSelectedService] = useState('fea');
  const [selectedIndustry, setSelectedIndustry] = useState('automotive');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timeline: 'Immediate (1-2 weeks)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappText = encodeURIComponent(
      `*New RPCS ${mode === 'quote' ? 'Technical Quote Request' : 'Consultation Request'}*\n` +
      `-----------------------------------------\n` +
      `*Request Type:* ${mode.toUpperCase()}\n` +
      `*Engineering Domain:* ${selectedService.toUpperCase()}\n` +
      `*Industry Sector:* ${selectedIndustry}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Full Name:* ${formData.name}\n` +
      `*Work Email:* ${formData.email}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Project Details:*\n${formData.message || 'N/A'}\n` +
      `-----------------------------------------`
    );
    const whatsappUrl = `https://wa.me/919790990345?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitted({
        type: mode,
        service: selectedService,
        name: formData.name,
        email: formData.email
      });
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-fadeIn relative">
        
        {/* Top Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/90 rounded-t-2xl">
          <div>
            <div className="section-tag mb-1 text-[11px] py-1 px-3">
              <span>Rise Point Engineering Desk</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {mode === 'quote' ? 'Request a Technical Quote' : 'Book Engineering Consultation'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-3 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setMode('quote')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'quote'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Request Detailed Quote
            </button>
            <button
              type="button"
              onClick={() => setMode('consultation')}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'consultation'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Request Consultation Call
            </button>
          </div>

          {/* Select Service Domain */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Select Required Engineering Domain *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'cad', label: 'CAD Design', icon: Box },
                { id: 'fea', label: 'FEA Analysis', icon: Activity },
                { id: 'cfd', label: 'CFD Flow', icon: Wind },
                { id: 'cam', label: 'CAM Tooling', icon: Cog },
              ].map((s) => {
                const Icon = s.icon;
                const isSelected = selectedService === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span className="text-xs font-bold">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Select Industry */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Industry Sector
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="automotive">Automotive</option>
                <option value="aerospace">Aerospace</option>
                <option value="energy">Energy & Power</option>
                <option value="machinery">Industrial Machinery</option>
                <option value="consumer">Consumer Products</option>
                <option value="oilgas">Oil & Gas</option>
                <option value="other">Other High-Tech</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Project Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Immediate (1-2 weeks)">Urgent (1 - 2 Weeks)</option>
                <option value="Standard (2-4 weeks)">Standard (2 - 4 Weeks)</option>
                <option value="Long Term (1+ month)">Long Term Partnership</option>
              </select>
            </div>
          </div>

          {/* User Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-cyan-400" /> Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="rajesh@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-cyan-400" /> Company / Organization
              </label>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Scope Message */}
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">
              Project Description & Requirements
            </label>
            <textarea
              rows="3"
              placeholder="Describe product concept, target materials, boundary conditions, or CAM specifications..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Quick Scope Summary Preview Box */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Assigned Engineer Team:</span>
            </div>
            <span className="text-cyan-400 font-bold uppercase">
              {selectedService.toUpperCase()} Senior Specialists (Chennai)
            </span>
          </div>

          {/* Action Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-3.5 text-base shadow-xl shadow-cyan-500/25 justify-center"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                Processing Proposal Request...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>Submit {mode === 'quote' ? 'Quote Request' : 'Consultation Booking'}</span>
              </span>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-500 font-mono">
            🛡️ Confidential & Protected under Non-Disclosure Agreement (NDA) standard.
          </p>

        </form>

      </div>
    </div>
  );
}
