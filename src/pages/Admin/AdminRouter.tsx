import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardWrapper from './Dashboard/AdminDashboardWrapper';
import Dashboard from './Dashboard/Dashboard';
import Members from './Dashboard/Members';

const AdminRouter = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoutes />}> */}
      <Route>
        <Route path='/dashboard' element={<DashboardWrapper />}>
          <Route index element={<Dashboard />} />
          <Route path='members' element={<Members />} />
        </Route>
        <Route path='*' element={<Navigate to='/admin/dashboard' replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
