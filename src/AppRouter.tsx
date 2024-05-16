import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Customer/SignUp';
import VerifyEmail from './pages/Customer/VerifyEmail';
import Welcome from './pages/Customer/Welcome/Welcome';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import CustomerRouter from './pages/Customer/MemberRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/verify-email' element={<VerifyEmail />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path="/member/*" element={<CustomerRouter />} />
        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
