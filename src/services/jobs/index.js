import {
  apiClient
} from '../apiClient';

export const getJobs = async () => apiClient.get('/jobs');
