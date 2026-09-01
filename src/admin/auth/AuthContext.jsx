import React, { createContext, useContext, useState, useEffect } from 'react';
import { ADMIN_AUTH_CONFIG } from './authConfig';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const stored = sessionStorage.getItem(ADMIN_AUTH_CONFIG.SESSION_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.authenticated === true;
      }
    } catch (e) {
      console.error('Error reading auth session from sessionStorage:', e);
    }
    return false;
  });

  const [user, setUser] = useState(() => {
    try {
      const stored = sessionStorage.getItem(ADMIN_AUTH_CONFIG.SESSION_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.user || null;
      }
    } catch (e) {
      console.error('Error reading user session:', e);
    }
    return null;
  });

  const login = (username, password) => {
    // Modular check - easily replaceable with API fetch in future backend integration
    if (
      username.trim() === ADMIN_AUTH_CONFIG.DEV_USERNAME &&
      password === ADMIN_AUTH_CONFIG.DEV_PASSWORD
    ) {
      const userPayload = {
        username: ADMIN_AUTH_CONFIG.DEV_USERNAME,
        role: 'Administrator',
        loginTime: new Date().toISOString()
      };

      setIsAuthenticated(true);
      setUser(userPayload);

      try {
        sessionStorage.setItem(
          ADMIN_AUTH_CONFIG.SESSION_STORAGE_KEY,
          JSON.stringify({ authenticated: true, user: userPayload })
        );
      } catch (e) {
        console.error('Failed to save session:', e);
      }

      return { success: true };
    }

    return { success: false, error: 'Invalid username or password.' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    try {
      sessionStorage.removeItem(ADMIN_AUTH_CONFIG.SESSION_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear auth session:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
