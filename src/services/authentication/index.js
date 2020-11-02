import { AUTHENTICATION_KEY } from '@constants/authentication';
import { apiClient } from '../apiClient';

const login = async ({ email, password }) => {
  const { data, status } = await apiClient.post('/login', {
    email,
    password,
  });

  if (status === 200) {
    localStorage.setItem(AUTHENTICATION_KEY, data.jwt);
  }

  return data;
};

const resetPassword = async ({ email }) => {
  await apiClient.post('/reset-password', {
    email,
  });
};

const changePassword = async ({ newPassword, confirmPassword, token }) => {
  const { data, status } = await apiClient.post('/change-password', {
    newPassword,
    confirmPassword,
    token,
  });

  if (status === 200) {
    logout();
  }

  return data;
};

const checkChangePasswdToken = async ({ token }) => {
  const { data } = await apiClient.post('/check-pass-token', {
    token,
  });
  return data;
};

const logout = async () => {
  localStorage.removeItem(AUTHENTICATION_KEY);
};

export { login, logout, resetPassword, changePassword, checkChangePasswdToken };
