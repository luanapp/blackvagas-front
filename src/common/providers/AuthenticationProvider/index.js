import React, { createContext, useMemo } from 'react';
import { AUTHENTICATION_KEY } from '@constants/authentication';

export const AuthenticationContext = createContext({
  currentUser: null,
  isAuthenticated: false,
});

export default function AuthenticationProvider({ children }) {
  const data = {
    currentUser: useMemo(() => localStorage.getItem(AUTHENTICATION_KEY), []),
    isAuthenticated: useMemo(() => !!localStorage.getItem(AUTHENTICATION_KEY), []),
  };

  return <AuthenticationContext.Provider value={data}>{children}</AuthenticationContext.Provider>;
}
