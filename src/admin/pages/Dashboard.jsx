import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Inbox, 
  UserCheck, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Settings,
  Eye
} from 'lucide-react';

import TechnicalBadge from '../../components/TechnicalBadge';
import StatCard from '../components/StatCard';
import QuickAction from '../components/QuickAction';
import StatusBadge from '../components/StatusBadge';

import { getInquiries, subscribeInquiries } from '../services/contactService';
import { getApplications, subscribeApplications } from '../services/careerService';

export default function Dashboard() {
  const [inquiries, setInquiries] = useState(() => getInquiries());
  const [applications, setApplications] = useState(() => getApplications());

  useEffect(() => {
    const unsub1 = subscribeInquiries((updated) => setInquiries(updated));
    const unsub2 = subscribeApplications((updated) => setApplications(updated));
    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  const statsData = [
    {
      index: '01',
      label: 'CONTACT INQUIRIES',
      value: String(inquiries.length).padStart(2, '0'),
      icon: Inbox
    },
    {
      index: '02',
      label: 'CAREER APPLICATIONS',
      value: String(applications.length).padStart(2, '0'),
      icon: UserCheck
    },
    {
      index: '03',
      label: 'PUBLIC WEBSITE',
      value: 'ONLINE',
      icon: Globe
    },
    {
      index: '04',
      label: 'ADMIN PANEL',
      value: 'ONLINE',
      icon: ShieldCheck
    }
  ];

  const quickActionsData = [
    {
      label: 'CONTACT INQUIRIES',
      to: '/admin/contact',
      icon: Inbox,
      primary: true
    },
    {
      label: 'CAREER APPLICATIONS',
      to: '/admin/careers',
      icon: UserCheck,
      primary: true
    },
    {
      label: 'PREVIEW PUBLIC SITE',
      to: '/',
      icon: ExternalLink,
      primary: false
    },
    {
      label: 'ADMIN SETTINGS',
      to: '/admin/settings',
      icon: Settings,
      primary: false
    }
  ];

  const recentInquiries = inquiries.slice(0, 3);
  const recentApplications = applications.slice(0, 3);

  return (
    <div className="space-y-8 animate-fade-in pb-12 font-sans">
      
      {/* 1. WELCOME BANNER */}
      <section className="bg-[#0D0D0D] border border-white/12 p-6 sm:p-8 rounded-sm relative overflow-hidden">
        <div className="tech-corner-tl" />
        <div className="tech-corner-tr" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <TechnicalBadge text="ADMIN DASHBOARD" />

            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              Welcome back, Administrator.
            </h1>

            <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-2xl leading-relaxed">
              Manage your website inquiries, career applications, and portal settings from one place.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#141414] border border-white/12 hover:border-[#E51B23] text-white text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-colors"
            >
              <span>PREVIEW PUBLIC SITE</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E51B23]" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID (4 ACTIVE CARDS) */}
      <section className="space-y-3">
        <div className="text-xs font-mono text-[#A1A1A1] uppercase tracking-widest font-bold">
          KEY METRICS & PORTAL STATUS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <StatCard
              key={stat.index}
              index={stat.index}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. QUICK ACTIONS */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E51B23]" />
          <h2 className="text-xs font-mono text-[#A1A1A1] uppercase tracking-widest font-bold">
            QUICK ACTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActionsData.map((action, idx) => (
            <QuickAction
              key={idx}
              label={action.label}
              to={action.to}
              icon={action.icon}
              primary={action.primary}
            />
          ))}
        </div>
      </section>

      {/* 4. RECENT ACTIVITY CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* RECENT CONTACT INQUIRIES */}
        <section className="bg-[#0D0D0D] border border-white/12 p-6 rounded-sm space-y-4 relative">
          <div className="tech-corner-tl" />

          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Inbox className="w-4 h-4 text-[#E51B23]" />
              <span>RECENT CONTACT INQUIRIES</span>
            </h2>

            <Link
              to="/admin/contact"
              className="text-[11px] font-mono text-[#E51B23] hover:underline flex items-center gap-1"
            >
              <span>VIEW ALL ({inquiries.length})</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {recentInquiries.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-gray-500">
              No contact enquiries yet.
            </div>
          ) : (
            <div className="space-y-3">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="bg-[#141414] border border-white/10 p-3.5 rounded-sm flex items-center justify-between gap-3">
                  <div className="space-y-1 truncate">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white truncate">{inquiry.fullName}</span>
                      <StatusBadge status={inquiry.status} />
                    </div>
                    <div className="text-[11px] text-gray-400 truncate">
                      {inquiry.service} • {inquiry.company}
                    </div>
                  </div>

                  <Link
                    to="/admin/contact"
                    className="p-1.5 bg-[#0D0D0D] border border-white/10 hover:border-[#E51B23] text-gray-300 rounded-sm shrink-0"
                    title="View details"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E51B23]" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* RECENT CAREER APPLICATIONS */}
        <section className="bg-[#0D0D0D] border border-white/12 p-6 rounded-sm space-y-4 relative">
          <div className="tech-corner-tl" />

          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>RECENT CAREER APPLICATIONS</span>
            </h2>

            <Link
              to="/admin/careers"
              className="text-[11px] font-mono text-[#E51B23] hover:underline flex items-center gap-1"
            >
              <span>VIEW ALL ({applications.length})</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {recentApplications.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-gray-500">
              No career applications yet.
            </div>
          ) : (
            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div key={app.id} className="bg-[#141414] border border-white/10 p-3.5 rounded-sm flex items-center justify-between gap-3">
                  <div className="space-y-1 truncate">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white truncate">{app.fullName}</span>
                      <StatusBadge status={app.status} />
                    </div>
                    <div className="text-[11px] text-gray-400 truncate">
                      {app.position} • {app.experience}
                    </div>
                  </div>

                  <Link
                    to="/admin/careers"
                    className="p-1.5 bg-[#0D0D0D] border border-white/10 hover:border-[#E51B23] text-gray-300 rounded-sm shrink-0"
                    title="View details"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E51B23]" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

    </div>
  );
}
