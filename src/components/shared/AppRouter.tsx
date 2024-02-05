import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Login from '../../pages/Login';
import SignUp from '../../pages/Customer/SignUp';
import VerifyEmail from '../../pages/Customer/VerifyEmail';
import Welcome from '../../pages/Customer/Welcome/Welcome';
import Dashboard from '../../pages/Customer/Dashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/verify-email' element={<VerifyEmail />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/customer' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
