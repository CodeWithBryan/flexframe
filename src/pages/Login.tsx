import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Typography from '../components/common/Typography';
import * as Icons from '../components/common/Icons';
import { Link } from 'react-router-dom';
import Input from '../components/common/Inputs/Input';
import PasswordField from '../components/common/Inputs/PasswordField';
import FillButton from '../components/common/Buttons/FillButton';

const Login: React.FC = () => {
  // states ----->
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });

  // functions ----->
  const setSignInValue = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignIn((prevSignIn) => ({
      ...prevSignIn,
      [name]: value,
    }));
  };

  return (
    <div className='w-full h-screen bg-white-1 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
      {/* left portion ------->  */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-[420px] flex flex-col gap-3 px-4 sm:px-8 h-full justify-center items-center'>
          <img src={logo} className='w-[44px] h-[38px] object-fill' />
          <Typography.lgText styles='text-black-1 font-bold'>
            Welcome to RP Fitness
          </Typography.lgText>
          <Typography.mText styles='text-center font-normal text-[#525866]'>
            Login to unlock a world of fitness tailored just for you.
          </Typography.mText>

          {/* inputs ----->  */}
          <div className='flex flex-col gap-3 mt-2 sm:mt-4 items-start w-full'>
            {/* email --> */}
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
            {/* password ---->  */}
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
          </div>
          {/* forgot password ---->  */}
          <div className='w-full flex justify-end items-center'>
            <Link to='#'>
              <Typography.smallText styles='text-black-3 hover:opacity-80 font-normal'>
                Forgot password?
              </Typography.smallText>
            </Link>
          </div>
          {/* button ---->  */}
          <div className='w-full py-3'>
            <FillButton styles='w-full h-[50px] text-white-1 bg-red-1 rounded-[60px]'>
              Login
            </FillButton>
          </div>
          {/* sign Up ---->  */}
          <Typography.mText styles='font-medium text-[#525866]'>
            Not a member yet?{' '}
            <Link
              to='/signup'
              className='text-red-1 hover:opacity-80 font-semibold'
            >
              Sign up
            </Link>
          </Typography.mText>
          {/* language change + support ------>  */}
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
      {/* right portion ----->  */}
      <div className='w-full lg:block hidden h-full overflow-hidden'>
        <img src='/assets/auth.png' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Login;
