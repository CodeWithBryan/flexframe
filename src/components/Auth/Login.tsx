import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Typography from '../shared/Typography/Typography';
import * as Icons from '../../svg/Icons';
import { Link } from 'react-router-dom';
import Input from '../shared/Inputs/Input';
import PasswordField from '../shared/Inputs/PasswordField';

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
    <div className='w-full h-screen bg-white-1 grid grid-cols-2 justify-center items-center'>
      {/* left portion ------->  */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-[420px] flex flex-col gap-3 px-8 h-full justify-center items-center'>
          <img src={logo} className='w-[44px] h-[38px] object-fill' />
          <Typography.lgText styles='text-black-1 font-bold'>
            Welcome to RP Fitness
          </Typography.lgText>
          <Typography.mText styles='text-black-1 text-center font-normal text-[#525866]'>
            Login to unlock a world of fitness tailored just for you.
          </Typography.mText>
          {/* sign In with ---->  */}
          <div className='w-full py-3 grid grid-cols-3 gap-2'>
            {signWith.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className='w-full h-[48px] hover:bg-black-1/5 active:translate-y-[1px] flex justify-center items-center rounded-[60px] border-white-3 border-[1px]'
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
          <div className='flex flex-col gap-3 mt-4 items-start w-full'>
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
        </div>
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

export default Login;
