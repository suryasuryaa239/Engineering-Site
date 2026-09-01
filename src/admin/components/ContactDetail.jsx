import React from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  Building2, 
  Clock, 
  Tag, 
  MessageSquare, 
  CheckCircle2, 
  Clock3, 
  Archive, 
  Trash2, 
  User 
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ContactDetail({ inquiry, onClose, onUpdateStatus, onDelete }) {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      
      <div className="bg-[#0D0D0D] border border-white/12 rounded-sm shadow-2xl w-full max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/12 bg-[#141414] flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#E51B23]">
                {inquiry.id}
              </span>
              <StatusBadge status={inquiry.status} />
            </div>
            <h2 className="text-xl font-extrabold font-heading text-white">
              CONTACT ENQUIRY DETAILS
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-sans">
          
          {/* Top User Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#141414] border border-white/10 p-5 rounded-sm">
            
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">FULL NAME</div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <User className="w-4 h-4 text-[#E51B23]" />
                <span>{inquiry.fullName}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">EMAIL ADDRESS</div>
              <a 
                href={`mailto:${inquiry.email}`} 
                className="text-sm font-bold text-sky-400 hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{inquiry.email}</span>
              </a>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">PHONE NUMBER</div>
              <a 
                href={`tel:${inquiry.phone}`} 
                className="text-sm font-bold text-[#A1A1A1] hover:text-white flex items-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{inquiry.phone || 'N/A'}</span>
              </a>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">COMPANY / ORGANIZATION</div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{inquiry.company || 'N/A'}</span>
              </div>
            </div>

          </div>

          {/* Subject & Service Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">SUBJECT</div>
              <div className="text-sm font-bold text-white">
                {inquiry.subject}
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-4 rounded-sm space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase">SERVICE INTERESTED IN</div>
              <div className="text-sm font-bold text-[#E51B23] flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{inquiry.service}</span>
              </div>
            </div>

          </div>

          {/* Complete Message Area */}
          <div className="bg-[#141414] border border-white/10 p-5 rounded-sm space-y-2">
            <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#E51B23]" />
              <span>ENQUIRY MESSAGE CONTENT</span>
            </div>
            
            <div className="text-sm text-gray-200 leading-relaxed whitespace-pre-wrap bg-[#0D0D0D] p-4 rounded-sm border border-white/10 font-sans">
              {inquiry.message}
            </div>
          </div>

          {/* Timestamp */}
          <div className="text-xs font-mono text-gray-400 flex items-center gap-2 pt-2 border-t border-white/10">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span>SUBMITTED ON: {new Date(inquiry.submittedAt).toLocaleString()}</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/12 bg-[#141414] flex flex-wrap items-center justify-between gap-3">
          
          {/* Status Quick Toggle Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onUpdateStatus(inquiry.id, 'Contacted')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20 rounded-sm transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>MARK CONTACTED</span>
            </button>

            <button
              onClick={() => onUpdateStatus(inquiry.id, 'In Progress')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 rounded-sm transition-colors"
            >
              <Clock3 className="w-3.5 h-3.5" />
              <span>IN PROGRESS</span>
            </button>

            <button
              onClick={() => onUpdateStatus(inquiry.id, 'Completed')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 rounded-sm transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>MARK COMPLETED</span>
            </button>

            <button
              onClick={() => onUpdateStatus(inquiry.id, 'Archived')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold bg-gray-500/10 text-gray-400 border border-gray-500/30 hover:bg-gray-500/20 rounded-sm transition-colors"
            >
              <Archive className="w-3.5 h-3.5" />
              <span>ARCHIVE</span>
            </button>
          </div>

          {/* Delete Action */}
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this enquiry?')) {
                onDelete(inquiry.id);
                onClose();
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white rounded-sm transition-colors ml-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>DELETE</span>
          </button>

        </div>

      </div>

    </div>
  );
}
