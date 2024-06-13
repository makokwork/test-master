import axios from 'axios';

const $url_api = 'https://moonsands-edinstvo-5488.twc1.net/';

const $host = axios.create({
  baseURL: 'https://moonsands-edinstvo-5488.twc1.net/api/',
});

const $authHost = axios.create({
  baseURL: 'https://moonsands-edinstvo-5488.twc1.net/api/',
});

$authHost.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export { $host, $authHost, $url_api };
