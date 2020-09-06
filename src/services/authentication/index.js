import { apiClient } from '../apiClient';

const login = async ({ email, password }) => {
  const { data } = await apiClient.post('/login', {
    email,
    password,
  });
  return data;
};

export { login };
