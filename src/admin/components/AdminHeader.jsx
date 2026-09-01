import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  ChevronDown, 
  Shield, 
  ExternalLink 
} from 'lucide-react';
import rpcsLogo from '../../assets/images/rpcs_logo.png';

export default function AdminHeader({ onMenuClick }) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="h-20 bg-[#0A0A0A] border-b border-white/12 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-md">
      
      {/* LEFT: Mobile Hamburger + Title & Subtitle */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden p-2 text-white hover:text-[#E51B23] border border-white/12 rounded-sm bg-[#141414] focus:outline-none"
          aria-label="Open Navigation Drawer"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Logo View (<1024px) */}
        <img 
          src={rpcsLogo} 
          alt="RPCS Logo" 
          className="lg:hidden h-7 w-auto object-contain"
        />

        {/* Page Title & Description */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold font-heading text-white tracking-tight">
              Dashboard
            </h1>
            <span className="text-xs font-mono text-[#E51B23] bg-[#E51B23]/10 px-2 py-0.5 border border-[#E51B23]/30 rounded-sm">
              LIVE
            </span>
          </div>
          <p className="text-xs text-[#A1A1A1] font-sans">
            Overview of your Rise Point Consultancy Services website.
          </p>
        </div>
      </div>

      {/* RIGHT: Search, Notifications & Profile Avatar */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Search Input Bar (Desktop/Tablet) */}
        <div className="hidden md:flex items-center relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 pointer-events-none" />
          <input 
            type="text" 
            placeholder="Search inquiries, services..."
            className="w-48 xl:w-64 bg-[#141414] border border-white/12 focus:border-[#E51B23] focus:outline-none pl-9 pr-4 py-1.5 text-xs text-white rounded-sm transition-colors"
          />
        </div>

        {/* Notification Bell Icon */}
        <button 
          type="button"
          className="p-2 text-slate-300 hover:text-white bg-[#141414] border border-white/12 rounded-sm relative transition-colors"
          title="System Notifications"
          aria-label="System Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-[#E51B23] absolute top-1.5 right-1.5" />
        </button>

        {/* View Public Website Quick Link */}
        <a 
          href="/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1A1] hover:text-white bg-[#141414] border border-white/10 px-3 py-2 rounded-sm transition-colors"
          title="Open Public Website"
        >
          <span className="hidden md:inline">PUBLIC SITE</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#E51B23]" />
        </a>

        {/* Administrator Profile Card & Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2.5 bg-[#141414] border border-white/12 hover:border-white/20 p-1.5 sm:px-3 rounded-sm transition-colors"
          >
            <div className="w-7 h-7 rounded-sm bg-[#E51B23]/20 border border-[#E51B23]/40 flex items-center justify-center text-[#E51B23] font-bold font-mono text-xs">
              AD
            </div>
            
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-white leading-none">
                Administrator
              </div>
              <div className="text-[10px] font-mono text-[#A1A1A1] mt-0.5">
                rpcs.co.in
              </div>
            </div>

            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#0D0D0D] border border-white/12 rounded-sm shadow-2xl p-2 z-50 text-xs font-mono animate-fade-in">
              <div className="px-3 py-2 border-b border-white/10 text-gray-400">
                Logged in as <strong className="text-white">admin</strong>
              </div>
              <a 
                href="/admin/settings"
                onClick={() => setProfileDropdownOpen(false)}
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              >
                Admin Settings
              </a>
              <a 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setProfileDropdownOpen(false)}
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              >
                Visit Public Site
              </a>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}
