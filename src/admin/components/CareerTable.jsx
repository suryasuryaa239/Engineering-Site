import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Trash2, 
  ArrowUpDown, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  FileText 
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function CareerTable({ applications, onViewDetail, onUpdateStatus, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const filteredApps = useMemo(() => {
    return applications
      .filter((app) => {
        if (statusFilter !== 'All' && app.status !== statusFilter) {
          return false;
        }

        if (searchTerm.trim() !== '') {
          const query = searchTerm.toLowerCase();
          const matchName = (app.fullName || '').toLowerCase().includes(query);
          const matchEmail = (app.email || '').toLowerCase().includes(query);
          const matchPhone = (app.phone || '').toLowerCase().includes(query);
          const matchPosition = (app.position || '').toLowerCase().includes(query);
          const matchSkills = (app.skills || '').toLowerCase().includes(query);
          return matchName || matchEmail || matchPhone || matchPosition || matchSkills;
        }

        return true;
      })
      .sort((a, b) => {
        const timeA = new Date(a.submittedAt).getTime();
        const timeB = new Date(b.submittedAt).getTime();
        return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
      });
  }, [applications, searchTerm, statusFilter, sortOrder]);

  const statuses = ['All', 'New', 'Reviewing', 'Shortlisted', 'Interview', 'Selected', 'Rejected', 'Archived'];

  return (
    <div className="space-y-4">
      
      {/* Toolbar */}
      <div className="bg-[#0D0D0D] border border-white/12 p-4 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search candidate, position, skills..."
            className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none pl-10 pr-4 py-2 text-xs text-white rounded-sm transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          
          <div className="flex items-center gap-1 bg-[#050505] border border-white/12 p-1 rounded-sm overflow-x-auto max-w-full">
            <Filter className="w-3.5 h-3.5 text-[#E51B23] mx-1 shrink-0" />
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-sm transition-colors shrink-0 ${
                  statusFilter === status
                    ? 'bg-[#E51B23] text-white'
                    : 'text-[#A1A1A1] hover:text-white hover:bg-white/5'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <button
            onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
            className="inline-flex items-center gap-1.5 bg-[#050505] border border-white/12 px-3 py-2 text-xs font-mono text-[#A1A1A1] hover:text-white rounded-sm transition-colors"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#E51B23]" />
            <span className="uppercase">{sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}</span>
          </button>

        </div>

      </div>

      {/* Desktop / Tablet Table */}
      <div className="bg-[#0D0D0D] border border-white/12 rounded-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#141414] border-b border-white/12 text-[10px] font-mono text-[#A1A1A1] uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">CANDIDATE NAME & LOCATION</th>
                <th className="py-3.5 px-4">POSITION APPLIED</th>
                <th className="py-3.5 px-4">EXPERIENCE & EDUCATION</th>
                <th className="py-3.5 px-4">SUBMITTED DATE</th>
                <th className="py-3.5 px-4">STATUS</th>
                <th className="py-3.5 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white font-sans">
              {filteredApps.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-500 font-mono">
                    No career applications match your criteria.
                  </td>
                </tr>
              ) : (
                filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition-colors group">
                    
                    {/* Candidate */}
                    <td className="py-4 px-4">
                      <div className="font-heading font-bold text-white text-sm">
                        {app.fullName}
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        <span>{app.location}</span>
                      </div>
                    </td>

                    {/* Position */}
                    <td className="py-4 px-4">
                      <div className="text-xs font-bold text-[#E51B23] flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{app.position}</span>
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 mt-0.5">
                        {app.email}
                      </div>
                    </td>

                    {/* Experience & Education */}
                    <td className="py-4 px-4 space-y-0.5">
                      <div className="text-xs font-bold text-white">
                        {app.experience}
                      </div>
                      <div className="text-[11px] text-gray-400 truncate max-w-[200px]">
                        {app.education}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 text-xs font-mono text-gray-400">
                      {new Date(app.submittedAt).toLocaleDateString()}
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4">
                      <StatusBadge status={app.status} />
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onViewDetail(app)}
                          className="p-2 bg-[#141414] border border-white/10 hover:border-[#E51B23] text-gray-300 hover:text-white rounded-sm transition-colors"
                          title="View complete application details"
                        >
                          <Eye className="w-4 h-4 text-[#E51B23]" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Delete candidate application?')) {
                              onDelete(app.id);
                            }
                          }}
                          className="p-2 bg-[#141414] border border-white/10 hover:border-rose-500 text-gray-400 hover:text-rose-400 rounded-sm transition-colors"
                          title="Delete application"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="md:hidden space-y-3">
        {filteredApps.length === 0 ? (
          <div className="p-8 text-center bg-[#0D0D0D] border border-white/12 text-gray-500 font-mono text-xs">
            No career applications match your criteria.
          </div>
        ) : (
          filteredApps.map((app) => (
            <div 
              key={app.id}
              className="bg-[#0D0D0D] border border-white/12 p-4 rounded-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#E51B23] font-bold">
                  {app.id}
                </span>
                <StatusBadge status={app.status} />
              </div>

              <div>
                <div className="text-base font-extrabold font-heading text-white">
                  {app.fullName}
                </div>
                <div className="text-xs font-mono text-gray-400 mt-0.5">
                  {app.position} • {app.experience}
                </div>
              </div>

              <div className="text-xs text-gray-300 border-t border-b border-white/10 py-2 space-y-1">
                <div><strong>Location:</strong> {app.location}</div>
                <div><strong>Email:</strong> {app.email}</div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-gray-500">
                  {new Date(app.submittedAt).toLocaleDateString()}
                </span>

                <button
                  onClick={() => onViewDetail(app)}
                  className="inline-flex items-center gap-1.5 bg-[#E51B23] text-white px-3 py-1.5 rounded-sm text-xs font-mono font-bold"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW DETAILS</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
