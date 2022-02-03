import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { TOKEN_STORAGE_KEY } from './globalValues';

export const API_URL = 'https://attomo-admin.herokuapp.com/api';

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};

const client: AxiosInstance = axios.create(config);

client.interceptors.request.use((axiosConfig) => {
  const newConfig = { ...axiosConfig };

  const token = localStorage.getItem(TOKEN_STORAGE_KEY);

  if (token && newConfig.headers) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
});

export default client;
