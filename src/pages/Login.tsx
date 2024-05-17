import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Typography from '../components/common/Typography';
import * as Icons from '../components/common/Icons';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/common/Inputs/Input';
import PasswordField from '../components/common/Inputs/PasswordField';
import FillButton from '../components/common/Buttons/FillButton';
import type { AuthState } from '../stores/auth.store';
import useAuthStore from '../stores/auth.store';
import { login } from '../util/api';

const Login: React.FC = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const storeLogin = useAuthStore((state: AuthState) => state.login);
  const navigate = useNavigate();

  // Functions ----->
  const setSignInValue = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignIn((prevSignIn) => ({
      ...prevSignIn,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(signIn.email, signIn.password);
      const token = response.data.access_token;
      const user = response.data.user;

      storeLogin(token, user);
      navigate('/member/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='w-full h-screen bg-white-1 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
      {/* Left portion ------->  */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-[420px] flex flex-col gap-3 px-4 sm:px-8 h-full justify-center items-center'>
          <img src={logo} className='w-[44px] h-[38px] object-fill' alt='Logo' />
          <Typography.lgText styles='text-black-1 font-bold'>
            Welcome to RP Fitness
          </Typography.lgText>
          <Typography.mText styles='text-center font-normal text-[#525866]'>
            Login to unlock a world of fitness tailored just for you.
          </Typography.mText>

          {/* Inputs ----->  */}
          <form onSubmit={handleLogin} className='flex flex-col gap-3 mt-2 sm:mt-4 items-start w-full'>
            {/* Email --> */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>Email</p>
              <Input
                value={signIn.email}
                type='text'
                name='email'
                onChange={setSignInValue}
                placeholder='Enter your email'
              />
            </div>
            {/* Password ---->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] select-none text-[#0A0D14] font-medium'>
                Password
              </p>
              <PasswordField
                value={signIn.password}
                name='password'
                onChange={setSignInValue}
              />
            </div>
            {/* Error message ---->  */}
            {error && (
              <Typography.smallText styles='text-red-500 font-normal'>
                {error}
              </Typography.smallText>
            )}
            {/* Forgot password ---->  */}
            <div className='w-full flex justify-end items-center'>
              <Link to='#'>
                <Typography.smallText styles='text-black-3 hover:opacity-80 font-normal'>
                  Forgot password?
                </Typography.smallText>
              </Link>
            </div>
            {/* Button ---->  */}
            <div className='w-full py-3'>
              <FillButton
                styles='w-full h-[50px] text-white-1 bg-red-1 rounded-[60px]'
                type='submit'
              >
                Login
              </FillButton>
            </div>
          </form>
          {/* Sign Up ---->  */}
          <Typography.mText styles='font-medium text-[#525866]'>
            Not a member yet?{' '}
            <Link
              to='/signup'
              className='text-red-1 hover:opacity-80 font-semibold'
            >
              Sign up
            </Link>
          </Typography.mText>
          {/* Language change + support ------>  */}
          <div className='w-full flex gap-4 justify-center items-center mt-4 sm:mt-10'>
            <button className='flex hover:opacity-80 justify-center items-center gap-1'>
              <Icons.language className='w-[20px] h-[21px]' />
              <Typography.smallText styles='text-black-3 font-normal'>
                English
              </Typography.smallText>
            </button>
            <button className='flex hover:opacity-80 justify-center items-center gap-1'>
              <Icons.support className='w-[18px] h-[16px]' />
              <Typography.smallText styles='text-black-3 font-normal'>
                Support
              </Typography.smallText>
            </button>
          </div>
        </div>
      </div>
      {/* Right portion ----->  */}
      <div className='w-full lg:block hidden h-full overflow-hidden'>
        <img src='/assets/auth.png' className='w-full h-full object-cover' alt='Auth' />
      </div>
    </div>
  );
};

export default Login;
