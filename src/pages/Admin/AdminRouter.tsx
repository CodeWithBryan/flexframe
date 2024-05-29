import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardWrapper from './Dashboard/AdminDashboardWrapper';
import Dashboard from './Dashboard/Dashboard';
import MemberDetails from './Dashboard/MemberDetails/MemberDetails';
import Members from './Dashboard/Members/Members';

const AdminRouter = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoutes />}> */}
      <Route>
        <Route path='/dashboard' element={<DashboardWrapper />}>
          <Route index element={<Dashboard />} />
          <Route path='member-details' element={<MemberDetails />} />
          <Route path='members' element={<Members />} />
        </Route>
        <Route path='*' element={<Navigate to='/admin/dashboard' replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
