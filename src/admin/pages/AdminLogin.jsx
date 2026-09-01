import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { Eye, EyeOff, ShieldCheck, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';
import rpcsLogo from '../../assets/images/rpcs_logo.png';
import heroComponentImg from '../../assets/images/hero_component.png';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already authenticated, redirect to /admin/dashboard
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/admin/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username.trim() || !password) {
      setErrorMsg('Please enter both username and password.');
      return;
    }

    setIsSubmitting(true);

    // Brief simulation for smooth UX transition
    setTimeout(() => {
      const result = login(username, password);
      setIsSubmitting(false);

      if (result.success) {
        const from = location.state?.from?.pathname || '/admin/dashboard';
        navigate(from, { replace: true });
      } else {
        setErrorMsg(result.error || 'Invalid username or password.');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center p-4 sm:p-6 lg:p-12 relative overflow-hidden font-sans selection:bg-[#E51B23] selection:text-white">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E51B23]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-5xl bg-[#0D0D0D] border border-white/12 rounded-sm shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* ==================================================================
            LEFT SIDE: Technical Engineering Visual (Desktop/Tablet)
            ================================================================== */}
        <div className="hidden lg:flex lg:col-span-6 bg-[#080808] border-r border-white/12 p-10 flex-col justify-between relative overflow-hidden grid-bg-pattern">
          
          {/* Top Brand Badges */}
          <div className="space-y-3 z-10">
            <div className="inline-flex items-center gap-2 bg-[#141414] border border-white/12 px-3 py-1 text-[11px] font-mono text-[#E51B23] uppercase tracking-widest font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RPCS CONTROL PROTOCOL</span>
            </div>
            
            <h2 className="text-2xl font-extrabold font-heading text-white tracking-tight">
              Rise Point Consultancy Services
            </h2>
          </div>

          {/* Center Technical Frame */}
          <div className="my-8 relative group">
            <div className="tech-corner-tl" />
            <div className="tech-corner-tr" />
            
            <div className="border border-white/12 bg-[#050505] p-3 rounded-sm relative">
              <img 
                src={heroComponentImg} 
                alt="RPCS Engineering Precision" 
                className="w-full h-56 object-cover opacity-80 rounded-sm"
              />
              
              {/* Technical Labels Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0D0D0D]/90 backdrop-blur-md border border-white/12 p-3.5 flex items-center justify-between text-[11px] font-mono">
                <div className="space-y-0.5">
                  <div className="text-[#E51B23] font-bold">PRECISION • ENGINEERING</div>
                  <div className="text-gray-400">SYS_AUTH_PORTAL // 2026</div>
                </div>
                <div className="text-right text-gray-500">
                  SECURE MODE
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Technical Grid Info */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400 z-10">
            <span>PRECISION</span>
            <span>•</span>
            <span>ENGINEERING</span>
            <span>•</span>
            <span>INNOVATION</span>
          </div>

        </div>

        {/* ==================================================================
            RIGHT SIDE: Admin Login Form
            ================================================================== */}
        <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative bg-[#0D0D0D]">
          
          <div className="space-y-6 max-w-md mx-auto w-full">
            
            {/* Logo & Heading */}
            <div className="space-y-3">
              <img 
                src={rpcsLogo} 
                alt="Rise Point Consultancy Services Official Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />

              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-[#E51B23] uppercase tracking-widest block">
                  ADMINISTRATION PANEL
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mt-1">
                  Welcome back
                </h1>
                <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1">
                  Sign in to manage your Rise Point Consultancy Services website.
                </p>
              </div>
            </div>

            {/* Error Message Box */}
            {errorMsg && (
              <div className="bg-[#E51B23]/10 border border-[#E51B23] text-white p-3.5 rounded-sm flex items-center gap-3 text-xs animate-fade-in">
                <AlertCircle className="w-4 h-4 text-[#E51B23] shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Username Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#A1A1A1] block">
                  USERNAME
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter admin username"
                    className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none pl-10 pr-4 py-3 text-sm text-white rounded-sm transition-colors"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#A1A1A1] block">
                  PASSWORD
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full bg-[#050505] border border-white/12 focus:border-[#E51B23] focus:outline-none pl-10 pr-10 py-3 text-sm text-white rounded-sm transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white transition-colors"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Options: Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-[#A1A1A1] hover:text-white transition-colors">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded-sm bg-[#050505] border-white/20 text-[#E51B23] focus:ring-[#E51B23]"
                  />
                  <span>Remember me</span>
                </label>

                <a 
                  href="#forgot-password" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset functionality is disabled in dev mode. Use password: RPCS@2026');
                  }}
                  className="text-xs font-mono text-[#A1A1A1] hover:text-[#E51B23] transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E51B23] text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-sm hover:bg-[#C4151B] active:translate-y-0.5 transition-all shadow-red-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SIGNING IN...</span>
                    </>
                  ) : (
                    <>
                      <span>SIGN IN</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>

            <div className="text-[11px] font-mono text-gray-500 text-center pt-4 border-t border-white/10">
              © 2026 Rise Point Consultancy Services • Admin Portal
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
