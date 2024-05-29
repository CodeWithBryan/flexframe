import { AxiosResponse } from "axios";
import api from ".";
import { User } from "../stores/auth.store";

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

export const register = (email: string, password: string, phone: string, firstName: string, lastName: string): Promise<AxiosResponse<RegisterResponse>> => {
  return api.post<RegisterResponse>('/auth/register', { email, password, phone, firstName, lastName });
};