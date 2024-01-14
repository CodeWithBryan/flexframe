import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import FillButton from '../shared/Buttons/FillButton';

const ManBehindPr: React.FC = () => {
  return (
    <div className='w-full xl:block hidden bg-red-1 py-12 my-10'>
      <ComponentWrapper>
        <div className='w-full grid grid-cols-2 justify-center items-center'>
          {/* left port ====> */}
          <div className='w-full flex justify-center relative items-center'>
            {/* border */}
            <div className='w-[419px] h-[628px] absolute rounded-[256px] border-[2px] border-yellow-1 right-[90px] -top-[14px] z-10'></div>

            {/* image container */}
            <div className='w-[410px] h-[605px] z-20 relative'>
              <div className='w-full h-full bg-[#c3474a] rounded-[256px] overflow-hidden'>
                <img
                  src='/assets/rayan.png'
                  alt=''
                  className='w-[470px] h-[594px] mt-4'
                />
              </div>
            </div>
          </div>
          {/* right por ====>  */}
          <div className='w-full flex flex-col gap-8 items-start'>
            <h1 className='text-[60px] text-white-1 leading-[72px] font-bold '>
              Meet the man behind RP Fitness
            </h1>
            <Typography.text styles='text-white-1 font-normal'>
              Meet Ryan, the passionate owner and personal trainer at RP
              Fitness. With a deep commitment to your fitness journey, Ryan
              brings expertise and personalized guidance to every session.
              Transform your fitness goals into reality with RP Fitness, where
              Ryan's dedication makes each workout an empowering experience.
            </Typography.text>
            {/* instructor name ---->  */}
            <div className='max-w-[200px] w-full grid grid-cols-[20px,1fr]'>
              {/*  */}
              <div className='w-full h-full border-l-[2px] border-white-1'></div>
              <div className='w-full flex flex-col'>
                <Typography.lgText styles='text-white-1 font-bold'>
                  RYAN
                </Typography.lgText>
                <Typography.smallText styles='text-white-1 font-normal'>
                  Fitness trainer
                </Typography.smallText>
              </div>
            </div>
            {/* button ---->  */}
            <FillButton styles='px-[24px] py-[16px] bg-black-1 rounded-[60px]'>
              <Typography.mText styles='text-white-1 font-semibold'>
                Learn more
              </Typography.mText>
            </FillButton>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default ManBehindPr;
