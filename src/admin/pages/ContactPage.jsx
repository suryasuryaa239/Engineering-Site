import React, { useState, useEffect } from 'react';
import { 
  getInquiries, 
  updateInquiryStatus, 
  deleteInquiry, 
  subscribeInquiries 
} from '../services/contactService';
import ContactTable from '../components/ContactTable';
import ContactDetail from '../components/ContactDetail';
import TechnicalBadge from '../../components/TechnicalBadge';
import { Inbox, MessageSquare, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [inquiries, setInquiries] = useState(() => getInquiries());
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeInquiries((updated) => {
      setInquiries(updated);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    const updated = updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  const handleDelete = (id) => {
    const updated = deleteInquiry(id);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry(null);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12 font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#0D0D0D] border border-white/12 p-6 sm:p-8 rounded-sm relative overflow-hidden">
        <div className="tech-corner-tl" />
        <div className="tech-corner-tr" />

        <div className="space-y-2 relative z-10">
          <TechnicalBadge text="CLIENT COMMUNICATIONS" />
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight flex items-center gap-3">
            <MessageSquare className="w-7 h-7 text-[#E51B23]" />
            <span>CONTACT INQUIRIES</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-2xl">
            Manage and review all enquiries submitted through the website.
          </p>
        </div>
      </div>

      {/* Main Table Content */}
      <ContactTable
        inquiries={inquiries}
        onViewDetail={(inquiry) => setSelectedInquiry(inquiry)}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDelete}
      />

      {/* Detail Modal */}
      {selectedInquiry && (
        <ContactDetail
          inquiry={selectedInquiry}
          onClose={() => setSelectedInquiry(null)}
          onUpdateStatus={handleUpdateStatus}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
}
