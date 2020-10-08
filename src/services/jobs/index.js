import { apiClient } from '../apiClient';

export const getJobs = async (key, filters) =>
  apiClient.get('/jobs', {
    params: {
      ...filters,
    },
  });

export const getJobLocations = async key => apiClient.get('/jobs/locations');
export const getJobTypes = async key => apiClient.get('/jobs/types');
