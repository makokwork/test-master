import { $host } from '../../../API/config';

export const auth = async (username, password) => {
  const response = await $host.post('login/', { username, password });

  return response.data;
};
