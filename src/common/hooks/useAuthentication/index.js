import { useContext, useMemo } from 'react';
import jwtDecode from 'jwt-decode';
import { always, ifElse, isEmpty, isNil, or } from 'ramda';
import { AuthenticationContext } from '@providers/AuthenticationProvider';

function useAuthentication() {
  const { currentJwt, isAuthenticated } = useContext(AuthenticationContext);

  const getUserId = ifElse(or(isNil, isEmpty), always({}), jwtDecode);
  const { sub: currentUser } = useMemo(() => getUserId(currentJwt, {}), [getUserId, currentJwt]);

  return { currentJwt, currentUser, isAuthenticated };
}

export default useAuthentication;
