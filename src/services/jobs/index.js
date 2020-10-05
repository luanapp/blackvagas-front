import { apiClient } from '../apiClient';

export const getJobs = async (key, filters) =>
  apiClient.get('/jobs', {
    params: {
      ...filters,
    },
  });
