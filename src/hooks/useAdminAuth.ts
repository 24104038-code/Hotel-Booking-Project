import { useState, useEffect, useCallback } from 'react';

const AUTH_KEY = 'aroma_admin_auth';
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'aroma@2024',
};

interface AuthState {
  isAuthenticated: boolean;
  loginAt: number;
}

function loadAuth(): AuthState {
  if (typeof window === 'undefined') return { isAuthenticated: false, loginAt: 0 };
  try {
    const stored = window.localStorage.getItem(AUTH_KEY);
    if (!stored) return { isAuthenticated: false, loginAt: 0 };
    const parsed = JSON.parse(stored) as AuthState;
    // Session expires after 24 hours
    if (Date.now() - parsed.loginAt > 24 * 60 * 60 * 1000) {
      window.localStorage.removeItem(AUTH_KEY);
      return { isAuthenticated: false, loginAt: 0 };
    }
    return parsed;
  } catch {
    return { isAuthenticated: false, loginAt: 0 };
  }
}

export function useAdminAuth() {
  const [auth, setAuth] = useState<AuthState>(() => loadAuth());

  useEffect(() => {
    const sync = () => setAuth(loadAuth());
    window.addEventListener('storage', sync);
    window.addEventListener('aroma:auth-updated', sync as EventListener);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('aroma:auth-updated', sync as EventListener);
    };
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    if (
      username.trim() === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const next: AuthState = { isAuthenticated: true, loginAt: Date.now() };
      window.localStorage.setItem(AUTH_KEY, JSON.stringify(next));
      window.dispatchEvent(new CustomEvent('aroma:auth-updated'));
      setAuth(next);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_KEY);
    window.dispatchEvent(new CustomEvent('aroma:auth-updated'));
    setAuth({ isAuthenticated: false, loginAt: 0 });
  }, []);

  return {
    isAuthenticated: auth.isAuthenticated,
    login,
    logout,
  };
}
