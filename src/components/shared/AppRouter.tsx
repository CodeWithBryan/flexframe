import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import VerifyEmail from '../../pages/VerifyEmail';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/verify-email' element={<VerifyEmail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
