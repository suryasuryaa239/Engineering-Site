import React from 'react';

const statusConfig = {
  // Contact Inquiry Statuses
  'New': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  'Contacted': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'Archived': 'bg-gray-500/10 text-gray-400 border-gray-500/30',

  // Career Application Statuses
  'Reviewing': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'Shortlisted': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  'Interview': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Selected': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'Rejected': 'bg-red-500/10 text-red-500 border-red-500/30'
};

export default function StatusBadge({ status }) {
  const style = statusConfig[status] || 'bg-gray-500/10 text-gray-300 border-gray-500/30';
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase border rounded-sm ${style}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{status || 'Pending'}</span>
    </span>
  );
}
