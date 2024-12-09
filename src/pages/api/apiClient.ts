import axios from 'axios';
import config from '@/_config';
const apiClient = axios.create({
  baseURL: config.API_URL,
  timeout: 5000,
});

export default apiClient;
