import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore, { AuthState } from '../stores/auth.store';

const Logout: React.FC = () => {
  const logout = useAuthStore((state: AuthState) => state.logout);
  logout();

  return <Navigate to="/login" />;
};

export default Logout;
