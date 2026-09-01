import React, { useState, useRef } from 'react';
import TechnicalBadge from './TechnicalBadge';
import EngineeringImage from './EngineeringImage';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users, 
  ArrowRight, 
  ChevronRight, 
  Send,
  Clock,
  MapPin
} from 'lucide-react';
import { addApplication } from '../admin/services/careerService';

import heroComponentImg from '../assets/images/hero_component.png';

const openPositions = [
  {
    id: 'cad-senior',
    title: 'Senior CAD Design Engineer',
    department: 'Design Engineering',
    type: 'Full-time',
    location: 'Chennai, India (Hybrid)',
    experience: '3–5 Years',
    description: 'Lead 3D CAD modeling, complex mechanical assemblies, sheet metal design, GD&T, and DFM optimization for automotive & industrial machinery clients.',
    skills: ['SolidWorks / CATIA / Creo', 'Sheet Metal & Plastics', 'GD&T ASME Y14.5', 'DFM / DFA']
  },
  {
    id: 'fea-specialist',
    title: 'FEA / Structural Simulation Specialist',
    department: 'Engineering Simulation (CAE)',
    type: 'Full-time',
    location: 'Chennai, India (On-site)',
    experience: '2–4 Years',
    description: 'Perform linear/non-linear static structural analysis, dynamic vibration, fatigue life estimation, and modal simulation using ANSYS / Abaqus.',
    skills: ['ANSYS Structural / Abaqus', 'Non-Linear & Dynamic FEA', 'Fatigue & Durability', 'Mesh Optimization']
  },
  {
    id: 'cfd-engineer',
    title: 'CFD Aerodynamics & Thermal Engineer',
    department: 'Engineering Simulation (CAE)',
    type: 'Full-time',
    location: 'Chennai, India (Hybrid)',
    experience: '2–5 Years',
    description: 'Conduct internal flow simulation, external aerodynamics, pressure drop analysis, and thermal management studies for aerospace & power systems.',
    skills: ['ANSYS Fluent / Star-CCM+', 'Thermal Management', 'Turbulence Modeling', 'Aerodynamics']
  },
  {
    id: 'cam-engineer',
    title: 'CAM Toolpath & CNC Manufacturing Engineer',
    department: 'Manufacturing Engineering',
    type: 'Full-time',
    location: 'Chennai, India (On-site)',
    experience: '3+ Years',
    description: 'Develop multi-axis CNC toolpaths, process planning, machining simulation, fixture design, and production feasibility studies for precision components.',
    skills: ['Mastercam / NX CAM', '5-Axis CNC Toolpaths', 'Fixture Design', 'Process Planning']
  }
];

const perks = [
  {
    icon: Briefcase,
    title: 'Advanced Engineering Projects',
    description: 'Work on high-stakes automotive, aerospace, and energy projects guiding products from concept to manufacturing.'
  },
  {
    icon: GraduationCap,
    title: 'Continuous CAE & CAD Upskilling',
    description: 'Access leading-edge simulation software, FEA/CFD methodologies, and advanced DFM training.'
  },
  {
    icon: Users,
    title: 'Collaborative Engineering Culture',
    description: 'Collaborate with multidisciplinary engineering experts dedicated to technical perfection and precision.'
  },
  {
    icon: Award,
    title: 'Competitive Compensation & Growth',
    description: 'Enjoy competitive compensation packages, performance rewards, and clear engineering leadership career tracks.'
  }
];

export default function CareersPage({ onNavigateHome }) {
  const [selectedPosition, setSelectedPosition] = useState(openPositions[0].title);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: openPositions[0].title,
    coverLetter: ''
  });
  
  const [cvFile, setCvFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File size exceeds 10MB limit. Please upload a smaller file.');
      return;
    }

    const validExtensions = ['pdf', 'doc', 'docx'];
    const extension = file.name.split('.').pop().toLowerCase();
    if (!validExtensions.includes(extension)) {
      setErrorMessage('Invalid file format. Please upload a PDF, DOC, or DOCX document.');
      return;
    }

    setErrorMessage('');
    setCvFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleApplyRoleClick = (roleTitle) => {
    setSelectedPosition(roleTitle);
    setFormData((prev) => ({ ...prev, position: roleTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cvFile) {
      setErrorMessage('Please upload your CV / Resume before submitting.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    addApplication({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      coverLetter: formData.coverLetter,
      resumeFile: cvFile
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="bg-[#050505] text-[#FFFFFF] min-h-screen pt-24 pb-20">
      
      {/* HERO BANNER */}
      <section className="relative grid-bg-pattern border-b border-white/12 py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E51B23]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <TechnicalBadge text="CAREERS AT RISE POINT" />
                <button 
                  onClick={onNavigateHome}
                  className="text-xs font-mono text-[#A1A1A1] hover:text-[#E51B23] transition-colors underline flex items-center gap-1"
                >
                  <span>← Back to Main Site</span>
                </button>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Build the Future of <br />
                <span className="text-[#E51B23]">Engineering Excellence.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Join Rise Point Consultancy Services. We are looking for talented CAD Design Engineers, FEA/CFD Simulation Specialists, and CAM Manufacturing experts to solve high-stakes industrial engineering challenges.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#open-roles" className="inline-flex items-center gap-2 bg-[#E51B23] text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-sm hover:bg-[#C4151B] transition-colors shadow-red-glow">
                  <span>VIEW OPEN POSITIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a href="#application-form" className="inline-flex items-center gap-2 bg-[#0D0D0D] border border-white/12 text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-sm hover:border-[#E51B23] transition-colors">
                  <span>UPLOAD CV DIRECTLY</span>
                  <Upload className="w-4 h-4 text-[#E51B23]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EngineeringImage 
                src={heroComponentImg}
                alt="RPCS Engineering Careers & Talent Community"
                category="ENGINEERING CAREERS"
                label="JOIN OUR TEAM"
                variant="top-left"
                number="01"
                aspectRatio="aspect-[4/3]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WHY JOIN RPCS PERKS */}
      <section className="py-16 border-b border-white/12 bg-[#0D0D0D]">
        <div className="container-custom">
          
          <div className="max-w-2xl space-y-3 mb-12">
            <TechnicalBadge text="WHY JOIN RPCS" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              Where Precision Engineering Meets Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#050505] border border-white/12 p-6 rounded-sm space-y-4 hover:border-[#E51B23]/40 transition-colors group relative"
                >
                  <div className="tech-corner-tl" />
                  <div className="w-10 h-10 rounded-sm bg-[#141414] border border-white/12 flex items-center justify-center text-[#E51B23] group-hover:bg-[#E51B23] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E51B23] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-[#A1A1A1] leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* OPEN ENGINEERING POSITIONS */}
      <section id="open-roles" className="py-16 lg:py-24 border-b border-white/12">
        <div className="container-custom space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <TechnicalBadge text="CURRENT OPPORTUNITIES" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Open Engineering Roles
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Explore current engineering vacancies across design, finite element analysis, computational fluid dynamics, and CNC manufacturing.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div 
                key={position.id}
                className="bg-[#0D0D0D] border border-white/12 p-6 sm:p-8 rounded-sm hover:border-[#E51B23]/50 transition-all duration-300 relative group flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="tech-corner-tl" />

                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A1A1A1]">
                    <span className="bg-[#141414] border border-white/12 text-[#E51B23] px-2.5 py-1 font-bold">
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-[#E51B23]" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-[#E51B23]" />
                      {position.experience}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight group-hover:text-[#E51B23] transition-colors">
                    {position.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                    {position.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {position.skills.map((skill) => (
                      <span key={skill} className="text-[11px] font-mono bg-[#050505] border border-white/10 text-slate-300 px-2.5 py-0.5 rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleApplyRoleClick(position.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E51B23] text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-[#C4151B] transition-colors shadow-sm"
                  >
                    <span>APPLY FOR ROLE</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CAREER APPLICATION FORM WITH CV UPLOAD */}
      <section id="application-form" ref={formRef} className="py-16 lg:py-24 bg-[#050505]">
        <div className="container-custom">
          
          <div className="max-w-4xl mx-auto bg-[#0D0D0D] border border-white/12 p-6 sm:p-10 lg:p-12 rounded-sm shadow-2xl relative">
            <div className="tech-corner-tl" />
            <div className="tech-corner-tr" />

            <div className="space-y-4 mb-8 pb-6 border-b border-white/12">
              <TechnicalBadge text="APPLY NOW" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                Submit Your Resume & Application
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1A1]">
                Complete the application form below and upload your updated CV / Resume in PDF or DOC format. Our engineering talent acquisition team will review your profile within 48 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#141414] border border-[#E51B23]/40 p-8 rounded-sm text-center space-y-4 animate-fade-up">
                <CheckCircle2 className="w-12 h-12 text-[#E51B23] mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-heading">
                  Application Received Successfully!
                </h3>
                <p className="text-sm text-[#A1A1A1] max-w-lg mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your CV (<span className="text-white font-mono">{cvFile?.name}</span>) and application for <strong className="text-white">{formData.position}</strong> have been submitted to Rise Point Consultancy Services.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setCvFile(null);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        position: openPositions[0].title,
                        coverLetter: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-[#E51B23] text-white text-xs font-mono font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm"
                  >
                    <span>SUBMIT ANOTHER APPLICATION</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="bg-[#E51B23]/10 border border-[#E51B23] text-white p-4 rounded-sm flex items-center gap-3 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 text-[#E51B23] shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] block">
                      FULL NAME <span className="text-[#E51B23]">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none px-4 py-3 text-sm text-white rounded-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] block">
                      EMAIL ADDRESS <span className="text-[#E51B23]">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="rahul@example.com"
                      className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none px-4 py-3 text-sm text-white rounded-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] block">
                      PHONE NUMBER <span className="text-[#E51B23]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none px-4 py-3 text-sm text-white rounded-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] block">
                      POSITION APPLYING FOR <span className="text-[#E51B23]">*</span>
                    </label>
                    <select 
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none px-4 py-3 text-sm text-white rounded-sm transition-colors"
                    >
                      {openPositions.map((pos) => (
                        <option key={pos.id} value={pos.title} className="bg-[#050505] text-white">
                          {pos.title}
                        </option>
                      ))}
                      <option value="General Engineering Candidate" className="bg-[#050505] text-white">
                        Other / General Engineering Profile
                      </option>
                    </select>
                  </div>

                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] block">
                    COVER LETTER / SUMMARY OF EXPERTISE
                  </label>
                  <textarea 
                    name="coverLetter"
                    rows="3"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your CAD, FEA, CFD, or CAM experience and key engineering achievements..."
                    className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none p-4 text-sm text-white rounded-sm transition-colors resize-none"
                  />
                </div>

                {/* CV UPLOAD ZONE */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] flex items-center justify-between">
                    <span>UPLOAD CV / RESUME <span className="text-[#E51B23]">*</span></span>
                    <span className="text-[10px] text-gray-500">PDF, DOC, DOCX (MAX 10MB)</span>
                  </label>

                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  {cvFile ? (
                    <div className="bg-[#050505] border border-[#E51B23]/60 p-4 rounded-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-sm bg-[#141414] border border-white/12 flex items-center justify-center text-[#E51B23]">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white font-mono truncate max-w-xs sm:max-w-md">
                            {cvFile.name}
                          </div>
                          <div className="text-[10px] text-[#A1A1A1] font-mono flex items-center gap-2">
                            <span>{formatFileSize(cvFile.size)}</span>
                            <span>•</span>
                            <span className="text-[#E51B23] font-bold uppercase">READY FOR SUBMISSION</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button"
                        onClick={() => setCvFile(null)}
                        className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
                        title="Remove File"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      className={`border-2 border-dashed p-8 rounded-sm text-center cursor-pointer transition-all duration-300 ${
                        dragActive 
                          ? 'border-[#E51B23] bg-[#E51B23]/10' 
                          : 'border-white/20 hover:border-[#E51B23]/50 bg-[#050505]'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#141414] border border-white/12 flex items-center justify-center mx-auto mb-3 text-[#E51B23]">
                        <Upload className="w-6 h-6 animate-pulse" />
                      </div>
                      
                      <div className="text-sm font-semibold text-white font-heading">
                        Click to upload CV or drag and drop file here
                      </div>
                      
                      <p className="text-xs text-[#A1A1A1] mt-1 font-mono">
                        Supports PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E51B23] text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#C4151B] transition-colors shadow-red-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING CV UPLOAD...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT APPLICATION & RESUME</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
