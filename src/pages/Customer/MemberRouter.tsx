import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardWrapper from './Dashboard/DashboardWrapper';
import Dashboard from './Dashboard/Dashboard';
import Billing from './Dashboard/Billing';
import Welcome from './Welcome/Welcome';

const MemberRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardWrapper />}>
        <Route index element={<Dashboard />} />
        <Route path="billing" element={<Billing />} />
      </Route>
      <Route path="/welcome" element={<Welcome />} />
      <Route
        path="*"
        element={<Navigate to="/member/dashboard" replace />}
      />
    </Routes>
  );
};

export default MemberRouter;