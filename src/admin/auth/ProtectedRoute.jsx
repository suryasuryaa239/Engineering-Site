import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to /admin login while preserving intended destination
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
}
