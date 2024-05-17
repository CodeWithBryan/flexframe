import axios, { AxiosResponse } from 'axios';
import type { User } from '../stores/auth.store';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001', // Change to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

interface LoginResponse {
  access_token: string;
  user: User;
}

export const login = (email: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
  return api.post<LoginResponse>('/auth/login', { email, password });
};

interface RegisterResponse {
  access_token: string;
  user: User;
}

export const register = (email: string, password: string, firstName: string, lastName: string): Promise<AxiosResponse<RegisterResponse>> => {
  return api.post<RegisterResponse>('/auth/register', { email, password, firstName, lastName });
};

export default api;