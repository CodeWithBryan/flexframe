import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore, { AuthState } from '../stores/auth.store';

interface Props {
  permissions?: string[];
}

const PrivateRoutes: React.FC<Props> = ({ permissions = [] }) => {
  const token = useAuthStore((state: AuthState) => state.token);
  const user = useAuthStore((state: AuthState) => state.user);

  const hasValidToken = !!token;
  const hasRequiredPermissions = permissions.every((permission) =>
    user?.permissions.includes(permission)
  );

  if (!hasValidToken) {
    return <Navigate to="/login" />;
  }

  if (permissions.length > 0 && !hasRequiredPermissions) {
    return <Navigate to="/member/dashboard" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
