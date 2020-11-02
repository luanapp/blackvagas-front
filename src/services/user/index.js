import { apiClient } from '../apiClient';

export const toggleFavorite = async (key, { userId, jobId }) => {
  const { data } = await apiClient.put(`/user/${userId}/toggleFavoriteJob/${jobId}`);
  return data;
};
