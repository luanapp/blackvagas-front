import { BehaviorSubject } from 'rxjs';
import { apiClient } from '../apiClient';

const AUTHENTICATION_KEY = 'currentUser';
const currentUserSubject = new BehaviorSubject(localStorage.getItem(AUTHENTICATION_KEY));

const isAuthenticated = !!currentUserSubject.value;
const authenticatedUser = currentUserSubject.value;

const login = async ({ email, password }) => {
  const { data, status } = await apiClient.post('/login', {
    email,
    password,
  });

  if (status === 200) {
    localStorage.setItem(AUTHENTICATION_KEY, data.jwt);
    await currentUserSubject.next(data.jwt);
  }

  return data;
};

const resetPassword = async ({ email }) => {
  await apiClient.post('/reset-password');
};

const logout = async () => {
  localStorage.removeItem(AUTHENTICATION_KEY);
  await currentUserSubject.next(null);
};

export { isAuthenticated, authenticatedUser, login, logout, resetPassword };