import { useContext } from 'react';
import { AuthenticationContext } from '@providers/AuthenticationProvider';

function useAuthentication() {
  const { currentUser, isAuthenticated } = useContext(AuthenticationContext);

  return { currentUser, isAuthenticated };
}

export default useAuthentication;
