import React, { useState, useEffect } from 'react';
import { 
  getApplications, 
  updateApplicationStatus, 
  deleteApplication, 
  subscribeApplications 
} from '../services/careerService';
import CareerTable from '../components/CareerTable';
import CareerDetail from '../components/CareerDetail';
import TechnicalBadge from '../../components/TechnicalBadge';
import { Briefcase, UserCheck } from 'lucide-react';

export default function CareersAdminPage() {
  const [applications, setApplications] = useState(() => getApplications());
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeApplications((updated) => {
      setApplications(updated);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    const updated = updateApplicationStatus(id, newStatus);
    setApplications(updated);
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp({ ...selectedApp, status: newStatus });
    }
  };

  const handleDelete = (id) => {
    const updated = deleteApplication(id);
    setApplications(updated);
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp(null);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12 font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#0D0D0D] border border-white/12 p-6 sm:p-8 rounded-sm relative overflow-hidden">
        <div className="tech-corner-tl" />
        <div className="tech-corner-tr" />

        <div className="space-y-2 relative z-10">
          <TechnicalBadge text="RECRUITMENT & TALENT" />
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-[#E51B23]" />
            <span>CAREER APPLICATIONS</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-2xl">
            Review and manage career applications submitted through the website.
          </p>
        </div>
      </div>

      {/* Main Table */}
      <CareerTable
        applications={applications}
        onViewDetail={(app) => setSelectedApp(app)}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDelete}
      />

      {/* Detail Modal */}
      {selectedApp && (
        <CareerDetail
          application={selectedApp}
          onClose={() => setSelectedApp(null)}
          onUpdateStatus={handleUpdateStatus}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
}
