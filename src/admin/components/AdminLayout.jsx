import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] flex flex-col font-sans selection:bg-[#E51B23] selection:text-white">
      
      {/* Sticky Top Header */}
      <AdminHeader onMenuClick={() => setMobileSidebarOpen(true)} />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Responsive Sidebar (Fixed Desktop / Drawer Mobile) */}
        <AdminSidebar 
          mobileOpen={mobileSidebarOpen} 
          onMobileClose={() => setMobileSidebarOpen(false)} 
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#050505] overflow-y-auto min-w-0">
          <div className="max-w-7xl mx-auto space-y-8">
            <Outlet />
          </div>
        </main>

      </div>

    </div>
  );
}
