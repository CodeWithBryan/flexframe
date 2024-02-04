import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import LoginPage from '../../pages/Login';
import SignUpPage from '../../pages/SignUp';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
