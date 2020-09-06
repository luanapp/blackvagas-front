import { apiClient } from '../apiClient';

export const getSkills = async () => {
  return apiClient.get('/skills');
};
