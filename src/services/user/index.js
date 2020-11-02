import { apiClient } from '../apiClient';

export const toggleFavorite = async (key, { userId, jobId }) => {
  const { data } = await apiClient.put(`/jobs/${jobId}/toggleFavoriteJob/${userId}`);
  return data;
};
