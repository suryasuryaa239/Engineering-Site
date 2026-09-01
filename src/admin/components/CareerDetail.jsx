import React from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FileText, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  UserCheck, 
  UserX, 
  Archive, 
  Trash2, 
  Clock, 
  Sparkles
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function CareerDetail({ application, onClose, onUpdateStatus, onDelete }) {
  if (!application) return null;

  const handleDownloadResume = () => {
    if (application.resume?.dataUrl) {
      const link = document.createElement('a');
      link.href = application.resume.dataUrl;
      link.download = application.resume.fileName || 'Applicant_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback text generator for dev demo
      const content = `RISE POINT CONSULTANCY SERVICES - APPLICANT CV RECORD\n\nName: ${application.fullName}\nPosition: ${application.position}\nEmail: ${application.email}\nPhone: ${application.phone}\nLocation: ${application.location}\nExperience: ${application.experience}\nEducation: ${application.education}\nSkills: ${application.skills}\n\nCover Letter:\n${application.coverLetter}\n`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = application.resume?.fileName || `${application.fullName.replace(/\s+/g, '_')}_Resume.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in font-sans">
      
      <div className="bg-[#0D0D0D] border border-white/12 rounded-sm shadow-2xl w-full max-w-4xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/12 bg-[#141414] flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#E51B23]">
                {application.id}
              </span>
              <StatusBadge status={application.status} />
            </div>
            <h2 className="text-xl font-extrabold font-heading text-white">
              CAREER APPLICATION DETAILS
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            title="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* SECTION 1: PERSONAL INFORMATION */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#E51B23] uppercase tracking-wider flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>PERSONAL INFORMATION</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#141414] border border-white/10 p-4 rounded-sm">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-500 uppercase">FULL NAME</div>
                <div className="text-sm font-bold text-white">{application.fullName}</div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-500 uppercase">EMAIL ADDRESS</div>
                <a href={`mailto:${application.email}`} className="text-sm font-bold text-sky-400 hover:underline flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{application.email}</span>
                </a>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-500 uppercase">PHONE NUMBER</div>
                <a href={`tel:${application.phone}`} className="text-sm font-mono text-gray-200 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{application.phone}</span>
                </a>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-500 uppercase">LOCATION</div>
                <div className="text-sm text-gray-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{application.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: APPLICATION DETAILS */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#E51B23] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>APPLICATION DETAILS</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-1 sm:col-span-3">
                <div className="text-[10px] font-mono text-gray-500 uppercase">POSITION APPLIED FOR</div>
                <div className="text-base font-extrabold font-heading text-white text-[#E51B23]">
                  {application.position}
                </div>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-1">
                <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>EXPERIENCE</span>
                </div>
                <div className="text-sm font-bold text-white">{application.experience}</div>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-1 sm:col-span-2">
                <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                  <GraduationCap className="w-3 h-3 text-sky-400" />
                  <span>EDUCATION</span>
                </div>
                <div className="text-sm text-gray-200">{application.education}</div>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-1 sm:col-span-3">
                <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                  <Code className="w-3 h-3 text-emerald-400" />
                  <span>KEY SKILLS</span>
                </div>
                <div className="text-xs font-mono text-gray-200 bg-[#0D0D0D] p-3 rounded-sm border border-white/10">
                  {application.skills}
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 3: ADDITIONAL INFORMATION */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#E51B23] uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>ADDITIONAL INFORMATION & PORTFOLIO</span>
            </h3>

            <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-2">
              <div className="text-[10px] font-mono text-gray-500 uppercase">COVER LETTER</div>
              <div className="text-xs text-gray-200 leading-relaxed whitespace-pre-wrap bg-[#0D0D0D] p-3.5 rounded-sm border border-white/10 font-sans">
                {application.coverLetter || 'No cover letter submitted.'}
              </div>

              {application.portfolio && (
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-gray-500 uppercase">PORTFOLIO / LINKEDIN URL</div>
                  <a
                    href={application.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:underline mt-1"
                  >
                    <span>{application.portfolio}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 4: DOCUMENTS & RESUME */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#E51B23] uppercase tracking-wider flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>DOCUMENTS & ATTACHMENTS</span>
            </h3>

            <div className="bg-[#141414] border border-white/10 p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#0D0D0D] border border-white/12 flex items-center justify-center text-[#E51B23]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {application.resume?.fileName || 'Applicant_Resume.pdf'}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">
                    {application.resume?.fileSize || '1.2 MB'} • {application.resume?.fileType || 'PDF Document'}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E51B23] text-white font-heading font-bold text-xs uppercase px-5 py-2.5 rounded-sm hover:bg-[#C4151B] transition-colors shadow-red-glow"
              >
                <Download className="w-4 h-4" />
                <span>VIEW / DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Timestamp */}
          <div className="text-xs font-mono text-gray-500 flex items-center gap-2 pt-2 border-t border-white/10">
            <Clock className="w-3.5 h-3.5" />
            <span>SUBMITTED ON: {new Date(application.submittedAt).toLocaleString()}</span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/12 bg-[#141414] flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onUpdateStatus(application.id, 'Reviewing')}
              className="px-3 py-2 text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 rounded-sm"
            >
              REVIEWING
            </button>

            <button
              onClick={() => onUpdateStatus(application.id, 'Shortlisted')}
              className="px-3 py-2 text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 rounded-sm"
            >
              SHORTLIST
            </button>

            <button
              onClick={() => onUpdateStatus(application.id, 'Interview')}
              className="px-3 py-2 text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 rounded-sm"
            >
              INTERVIEW
            </button>

            <button
              onClick={() => onUpdateStatus(application.id, 'Selected')}
              className="px-3 py-2 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 rounded-sm"
            >
              SELECT
            </button>

            <button
              onClick={() => onUpdateStatus(application.id, 'Rejected')}
              className="px-3 py-2 text-xs font-mono font-bold bg-rose-500/10 text-rose-500 border border-rose-500/30 hover:bg-rose-500/20 rounded-sm"
            >
              REJECT
            </button>
          </div>

          <button
            onClick={() => {
              if (window.confirm('Delete this career application?')) {
                onDelete(application.id);
                onClose();
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white rounded-sm ml-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>DELETE</span>
          </button>

        </div>

      </div>

    </div>
  );
}
