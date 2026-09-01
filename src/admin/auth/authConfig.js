// Centralized configuration for frontend admin authentication.
// Note: This is temporary for development and can be seamlessly replaced 
// with API endpoint calls (e.g. POST /api/auth/login) in production.

export const ADMIN_AUTH_CONFIG = {
  DEV_USERNAME: 'admin',
  DEV_PASSWORD: 'RPCS@2026',
  SESSION_STORAGE_KEY: 'rpcs_admin_auth_session'
};
