import React, { useState } from 'react';
import Typography from '../../components/shared/Typography/Typography';
import logo from '../../assets/logo.png';
import * as Icons from '../../svg/Icons';

const VerifyEmail: React.FC = () => {
  const [veriyCode, setVeifyCode] = useState([
    {
      name: 'one',
      value: '',
    },
    {
      name: 'two',
      value: '',
    },
    {
      name: 'three',
      value: '',
    },
    {
      name: 'four',
      value: '',
    },
  ]);

  // functions ----->
  const setVerificationCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setVeifyCode((prevVeriyCode) =>
      prevVeriyCode.map((code) =>
        code.name === name ? { ...code, value } : code
      )
    );
  };

  return (
    <div className='w-full relative h-screen bg-white-1 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
      {/* left portion ------->  */}
      <div className='w-full py-10 flex justify-center items-center'>
        <div className='w-full max-w-[420px] flex flex-col gap-3 px-4 sm:px-8 h-full justify-center items-center'>
          <img src={logo} className='w-[44px] h-[38px] object-fill' />
          <Typography.lgText styles='text-black-1 font-bold'>
            Verify your email address
          </Typography.lgText>
          <Typography.mText styles='text-center font-normal text-[#525866]'>
            We sent a six-digit verification code to iamwaleedshabbir@gmail.com
          </Typography.mText>

          {/* verify email inputs --->  */}
          <div className='w-full grid grid-cols-4 gap-2 py-3 sm:py-4'>
            {veriyCode.map((item, index) => {
              return (
                <input
                  key={index}
                  type='number'
                  maxLength={1}
                  value={item.value}
                  name={item.name}
                  onChange={(e) => setVerificationCode(e)}
                  className={`w-full h-[50px] sm:h-[60px] text-[22px] sm:text-[24px] font-semibold text-black-3 rounded-[10px] ${
                    item.value === '' ? 'bg-transparent' : 'bg-[#F9F9F9]'
                  } border-[1px] border-white-3 focus:outline-none text-center`}
                />
              );
            })}
          </div>

          <Typography.smallText styles='text-black-3 font-normal'>
            Didn’t receive a code? Send a new code in{' '}
            <span className='text-red-1 font-semibold'> 00:29 </span>
          </Typography.smallText>

          {/* verify button ---->  */}
          <div className='w-full py-3'>
            <button
              disabled={true}
              className={`w-full disabled:bg-[#F6D4D5] text-[14px] font-semibold font-inter hover:opacity-90 h-[50px] text-white-1 bg-red-1 rounded-[60px]`}
            >
              Verify
            </button>
          </div>
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
      {/* go back button ----->  */}
      <button className='text-[14px] shadow-sm absolute hover:bg-black-1/5 active:translate-y-[1px] left-4 sm:left-10 top-6 px-3 py-2 font-inter text-[#525866] font-medium rounded-xl border-[1px] border-white-3'>
        Go Back
      </button>
    </div>
  );
};

export default VerifyEmail;
