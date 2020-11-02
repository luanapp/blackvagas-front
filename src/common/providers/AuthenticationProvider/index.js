import React, { createContext, useMemo } from 'react';
import { AUTHENTICATION_KEY } from '@constants/authentication';

export const AuthenticationContext = createContext({
  currentUser: null,
  isAuthenticated: false,
});

export default function AuthenticationProvider({ children }) {
  const currentJwt = localStorage.getItem(AUTHENTICATION_KEY);

  const data = {
    currentJwt,
    isAuthenticated: useMemo(() => !!currentJwt, [currentJwt]),
  };

  return <AuthenticationContext.Provider value={data}>{children}</AuthenticationContext.Provider>;
}
