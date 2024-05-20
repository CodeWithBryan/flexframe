import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardWrapper from './Dashboard/DashboardWrapper';
import Dashboard from './Dashboard/Dashboard';
import Billing from './Dashboard/Billing';
import Welcome from './Welcome/Welcome';
import PrivateRoutes from '../PrivateRoutes';

const MemberRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<DashboardWrapper />}>
          <Route index element={<Dashboard />} />
          <Route path='billing' element={<Billing />} />
        </Route>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='*' element={<Navigate to='/member/dashboard' replace />} />
      </Route>
    </Routes>
  );
};

export default MemberRouter;
