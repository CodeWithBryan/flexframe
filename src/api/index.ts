import axios from 'axios';
import useAuthStore from '../stores/auth.store';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001', // Change to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; // Get the token from the auth store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const currentPath = window.location.pathname + window.location.search;
      useAuthStore.getState().logout();
      window.location.assign(`/login?redirect=${encodeURIComponent(currentPath)}`);
    }
    return Promise.reject(error);
  }
);

export default api;