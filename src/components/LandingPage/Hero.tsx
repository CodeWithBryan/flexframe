import React from 'react';
import Navibar from '../shared/Navibar/Navibar';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import * as Icons from '../../svg/Icons';
import FillButton from '../shared/Buttons/FillButton';

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh-50px)] bg-right bg-cover bg-no-repeat bg-[url('/assets/heroBg.png')]">
      <Navibar />
      <ComponentWrapper>
        <div className='w-full min-h-[calc(100vh-130px)] max-w-[670px] flex flex-col gap-5 items-start justify-center'>
          <Typography.h1 styles='text-white-1'>
            Shape your body & live healthy life
          </Typography.h1>
          <Typography.text styles='text-white-1/80 font-normal'>
            Welcome to RP Fitness – where sweat becomes liquid awesome! Join us
            on a journey to peak fitness and well-being. Start your journey
            today and become fitter, healthier and happier.
          </Typography.text>
          {/* attributes ====>  */}
          <div className='w-full grid grid-cols-2 gap-y-4'>
            {atributes.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full flex justify-start items-center'
                >
                  <div className='flex justify-center items-center gap-1'>
                    {item.icon}
                    <Typography.text styles='text-white-1/80 font-normal'>
                      {item.text}
                    </Typography.text>
                  </div>
                </div>
              );
            })}
          </div>
          {/* buttons ====>  */}
          <div className='flex justify-center items-center gap-6 mt-4'>
            <FillButton styles='bg-red-1 px-[24px] py-[16px] rounded-[60px]'>
              <Typography.mText styles='text-white-1 font-semibold'>
                Join RP Fitness Today
              </Typography.mText>
            </FillButton>
            <button className='flex px-[24px] py-[16px] bg-transparent hover:bg-white-1/15 duration-200 rounded-[60px] justify-center items-center gap-2 hover:opacity-80 active:translate-y-[2px]'>
              <Icons.play />
              <Typography.mText styles='text-white-1 font-semibold'>
                Watch Gym Tour
              </Typography.mText>
            </button>
          </div>
          {/* reviews =====>  */}
          <div className='flex flex-col gap-4 mt-4'>
            <Typography.mText styles='text-white-1 font-medium'>
              Trusted by 15000+ customers
            </Typography.mText>
            <div className='flex justify-center items-center gap-1'>
              {[0, 1, 2, 3, 4].map((item, index) => {
                return <Icons.star key={index} />;
              })}
              <Typography.mText styles='text-white-1 font-medium ml-2'>
                5.0
              </Typography.mText>
              <Typography.mText styles='text-white-1 font-normal'>
                (2.1k reviews)
              </Typography.mText>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

const atributes = [
  {
    icon: <Icons.time />,
    text: '24/7 access',
  },
  {
    icon: <Icons.strength />,
    text: 'Cardio & strength equipment',
  },
  {
    icon: <Icons.group />,
    text: 'Group fitness classes',
  },
  {
    icon: <Icons.power />,
    text: '1:1 fitness assessment',
  },
];

export default Hero;
