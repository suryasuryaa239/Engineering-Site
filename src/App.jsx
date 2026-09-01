import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './admin/auth/AuthContext';
import ProtectedRoute from './admin/auth/ProtectedRoute';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import CareersPage from './components/CareersPage';
import Footer from './components/Footer';

import AdminLogin from './admin/pages/AdminLogin';
import AdminLayout from './admin/components/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import ContactPage from './admin/pages/ContactPage';
import CareersAdminPage from './admin/pages/CareersAdminPage';

function PublicApp() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#careers' ? 'careers' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#careers') {
        setCurrentPage('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash && hash !== '#home') {
          setTimeout(() => {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else if (hash === '#home' || !hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '#home';
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#E51B23] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {currentPage === 'careers' ? (
          <CareersPage onNavigateHome={navigateToHome} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Industries />
            <WhyChooseUs />
            <Process />
            <MissionVision />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Website Route */}
          <Route path="/" element={<PublicApp />} />

          {/* Admin Login Route */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* Protected Admin Dashboard & Sub-routes */}
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="careers" element={<CareersAdminPage />} />
            <Route path="services" element={<Dashboard />} />
            <Route path="industries" element={<Dashboard />} />
            <Route path="projects" element={<Dashboard />} />
            <Route path="inquiries" element={<ContactPage />} />
            <Route path="settings" element={<Dashboard />} />
            {/* Catch-all fallback inside admin */}
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>

          {/* Public Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
