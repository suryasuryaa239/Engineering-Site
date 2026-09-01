import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Wrench, 
  Building2, 
  Briefcase, 
  Inbox, 
  Settings,
  LogOut,
  X,
  ChevronRight
} from 'lucide-react';
import rpcsLogo from '../../assets/images/rpcs_logo.png';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Contact Inquiries', path: '/admin/contact', icon: Inbox },
  { name: 'Career Applications', path: '/admin/careers', icon: Briefcase },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminSidebar({ mobileOpen, onMobileClose }) {
  const { logout } = useAuth();

  const handleNavClick = () => {
    if (onMobileClose) {
      onMobileClose();
    }
  };

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-6 bg-[#0D0D0D] border-r border-white/12 select-none">
      
      {/* Top Section: Logo & Nav */}
      <div className="space-y-6">
        
        {/* Brand Logo & Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <img 
              src={rpcsLogo} 
              alt="Rise Point Consultancy Services" 
              className="h-8 w-auto object-contain"
            />
            <div className="text-[10px] font-mono font-bold text-[#E51B23] tracking-widest uppercase mt-2">
              ADMIN PANEL
            </div>
          </div>

          {/* Close button for Mobile Drawer */}
          {onMobileClose && (
            <button
              onClick={onMobileClose}
              className="lg:hidden p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-sm"
              aria-label="Close Sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation Menu Links */}
        <nav className="space-y-1" aria-label="Admin Sidebar Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#141414] text-white border-l-2 border-[#E51B23] font-bold shadow-sm'
                      : 'text-[#A1A1A1] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#E51B23]' : 'text-gray-400'}`} />
                      <span>{item.name}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#E51B23]" />}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

      </div>

      {/* Bottom Section: User Info & Logout Button */}
      <div className="pt-6 border-t border-white/10 space-y-4">
        
        {/* User Online Status Card */}
        <div className="bg-[#141414] border border-white/10 p-3 rounded-sm flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-heading font-bold text-white">
              Administrator
            </div>
            <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>
          </div>
        </div>

        {/* Logout CTA Button */}
        <button
          onClick={() => {
            handleNavClick();
            logout();
          }}
          className="w-full flex items-center justify-center gap-2 bg-[#141414] border border-white/12 hover:border-[#E51B23] text-[#A1A1A1] hover:text-[#E51B23] py-2.5 rounded-sm text-xs font-mono font-bold uppercase transition-all duration-200"
        >
          <LogOut className="w-4 h-4 text-[#E51B23]" />
          <span>LOGOUT</span>
        </button>

      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden lg:block w-64 flex-shrink-0 min-h-[calc(100vh-80px)]">
        {sidebarContent}
      </aside>

      {/* Mobile Off-Canvas Drawer Backdrop */}
      {mobileOpen && (
        <div 
          onClick={onMobileClose}
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"
        />
      )}

      {/* Mobile Off-Canvas Drawer */}
      <div className={`lg:hidden fixed inset-y-0 left-0 w-72 z-50 transform transition-transform duration-300 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {sidebarContent}
      </div>
    </>
  );
}
