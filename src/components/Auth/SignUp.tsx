import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Typography from '../shared/Typography/Typography';
import * as Icons from '../../svg/Icons';
import { Link } from 'react-router-dom';
import Input from '../shared/Inputs/Input';
import PasswordField from '../shared/Inputs/PasswordField';
import FillButton from '../shared/Buttons/FillButton';
import MobileNumInput from '../shared/Inputs/PhoneInput';
import CheckBoxInput from '../shared/Inputs/CheckBox';

const SignUp: React.FC = () => {
  // states ----->
  const [signIn, setSignIn] = useState({
    fullName: '',
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
    <div className='w-full min-h-screen bg-white-1 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
      {/* left portion ------->  */}
      <div className='w-full py-10 flex justify-center items-center'>
        <div className='w-full max-w-[420px] flex flex-col gap-3 px-4 sm:px-8 h-full justify-center items-center'>
          <img src={logo} className='w-[44px] h-[38px] object-fill' />
          <Typography.lgText styles='text-black-1 font-bold'>
            Welcome to RP Fitness
          </Typography.lgText>
          <Typography.mText styles='text-center font-normal text-[#525866]'>
            Login to unlock a world of fitness tailored just for you.
          </Typography.mText>
          {/* sign In with ---->  */}
          <div className='w-full py-3 grid grid-cols-3 gap-2'>
            {signWith.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className='w-full shadow-sm h-[48px] hover:bg-black-1/5 active:translate-y-[1px] flex justify-center items-center rounded-[60px] border-white-3 border-[1px]'
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
          {/* or ----->  */}
          <div className='w-full grid grid-cols-[1fr,20px,1fr] justify-center items-center gap-2'>
            <div className='w-full h-[1px] bg-white-3'></div>
            <p className='text-[11px] font-inter font-medium text-[#868C98]'>
              OR
            </p>
            <div className='w-full h-[1px] bg-white-3'></div>
          </div>
          {/* inputs ----->  */}
          <div className='flex flex-col gap-3 mt-2 sm:mt-4 items-start w-full'>
            {/* full name ----->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>
                Full name
              </p>
              <Input
                value={signIn.fullName}
                type='text'
                name='fullName'
                onChange={setSignInValue}
                placeholder='Enter Your Full Name'
              />
            </div>
            {/* email --> */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>Email</p>
              <Input
                value={signIn.email}
                type='text'
                name='email'
                onChange={setSignInValue}
                placeholder='Enter Your Email'
              />
            </div>
            {/* phoneInput ---->  */}
            <div className='w-full flex flex-col gap-2'>
              <p className='text-[14px] text-[#0A0D14] font-medium'>
                Mobile number
              </p>
              <MobileNumInput />
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
          {/* agreement checkbox ----->  */}
          <div className='w-full flex mt-2 justify-start items-center'>
            <CheckBoxInput
              label={
                <p className='text-[14px] font-normal text-black-3 font-inter'>
                  I agree to the Privacy Policy,{' '}
                  <Link to='#' className='text-red-1 font-medium'>
                    Terms of Use{' '}
                  </Link>{' '}
                  and{' '}
                  <Link to='#' className='text-red-1 font-medium'>
                    {' '}
                    Terms of Service
                  </Link>
                </p>
              }
            />
          </div>
          {/* button ---->  */}
          <div className='w-full py-3'>
            <FillButton styles='w-full h-[50px] text-white-1 bg-red-1 rounded-[60px]'>
              Sign up
            </FillButton>
          </div>
          {/* sign Up ---->  */}
          <Typography.mText styles='font-medium text-[#525866]'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-red-1 hover:opacity-80 font-semibold'
            >
              Login
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
      <div className='w-full lg:block hidden h-full'>
        <img src='/assets/auth.png' className='w-full h-full object-fill' />
      </div>
    </div>
  );
};

const signWith = [
  {
    icon: <Icons.apple className='w-[20px] h-[21px]' />,
    path: '#',
  },
  {
    icon: <Icons.faceBook3 className='w-[20px] h-[21px]' />,
    path: '#',
  },
  {
    icon: <Icons.google className='w-[20px] h-[21px]' />,
    path: '#',
  },
];

export default SignUp;
