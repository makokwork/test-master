import { host } from '../../../API';

export const auth = async (username, password) => {
  const response = await host.post('login/', { username, password });

  return response.data;
};
