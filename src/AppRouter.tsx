import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Customer/SignUp';
import VerifyEmail from './pages/Customer/VerifyEmail';
import Welcome from './pages/Customer/Welcome/Welcome';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import CustomerRouter from './pages/Customer/MemberRouter';
import Logout from './pages/Logout';
import AdminRouter from './pages/Admin/AdminRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/member/*' element={<CustomerRouter />} />
        <Route path='/admin/*' element={<AdminRouter />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
