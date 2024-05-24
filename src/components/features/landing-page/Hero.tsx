import React from 'react';
import ComponentWrapper from '../../common/ComponentWrapper';
import Typography from '../../common/Typography';
import * as Icons from '../../common/Icons';
import FillButton from '../../common/Buttons/FillButton';
import { Link } from 'react-router-dom';
import Navibar from '../../layout/LandingPage/Navibar';
import ReviewsComponent from './reviews';

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-auto relative sm:min-h-[calc(100vh-50px)] z-10 bg-center xl:bg-right bg-cover bg-no-repeat bg-none md:bg-[url('/assets/heroBg.png')]">
      <Navibar />
      <ComponentWrapper>
        <div className='w-full xl:py-0 py-4 lg:py-5 min-h-auto sm:min-h-[calc(100vh-130px)] max-w-[670px] flex flex-col gap-5 items-start justify-center'>
          <Typography.h1 styles='text-white-1'>
            Shape Your Body & Live a Healthy Life
          </Typography.h1>
          <Typography.text styles='text-white-1/80 font-normal'>
            Welcome to R&P Fitness – where sweat becomes liquid awesome! Join us
            on a journey to peak fitness and well-being. Start your journey
            today and become fitter, healthier and happier.
          </Typography.text>
          {/* attributes ====>  */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4'>
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
          <div className='w-full flex justify-center sm:justify-start items-center gap-6 mt-2 sm:mt-4'>
            <Link to='/signup'>
              <FillButton styles='bg-red-1 sm:w-fit w-full max-w-[320px] px-[24px] py-[12px] sm:py-[16px] rounded-[60px]'>
                <Typography.mText styles='text-white-1 font-semibold'>
                  Join R&P Fitness Today
                </Typography.mText>
              </FillButton>
            </Link>
            <button className='sm:flex hidden px-[24px] py-[16px] bg-transparent hover:bg-white-1/15 duration-200 rounded-[60px] justify-center items-center gap-2 hover:opacity-80 active:translate-y-[2px]'>
              <Icons.play />
              <Typography.mText styles='text-white-1 font-semibold'>
                Watch Gym Tour
              </Typography.mText>
            </button>
          </div>
          {/* reviews =====>  */}
          <ReviewsComponent />
        </div>
      </ComponentWrapper>
      {/* shadow for bg image ----->  */}
      <div className='absolute w-full max-w-[800px] right-0 bottom-0 h-[70px] sm:h-[100px] md:h-[150px] xl:h-[100px] bg-black-1 blur-[50px] z-20'></div>
      {/* image for small screen ----->  */}
      <div className="w-full md:hidden -mt-12 sm:-mt-24 md:mt-0 block h-[480px] sm:h-[500px] bg-cover bg-right bg-no-repeat bg-[url('/assets/heroBg.png')]"></div>
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
