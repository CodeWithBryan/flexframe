import React from 'react';
import Typography from '../../common/Typography';
import ComponentWrapper from '../../common/ComponentWrapper';
import * as Icons from '../../common/Icons';
import FillButton from '../../common/Buttons/FillButton';
import { Link } from 'react-router-dom';

const CallToActionBanner: React.FC = () => {
  return (
    <div className='w-full py-10 overflow-hidden'>
      <div className='w-full bg-red-1 relative overflow-hidden'>
        <ComponentWrapper style='py-16 sm:py-24'>
          <div className='w-full flex flex-col gap-3 justify-center items-center'>
            <div className='relative'>
              <Typography.h2 styles='font-bold text-white-1 text-left md:text-center w-full'>
                Ready to transform your body?
              </Typography.h2>
              <Icons.hightLight className='w-[50px] sm:w-[100px] md:w-[51px] h-[20px] sm:h-[40px] md:h-[56px] absolute -left-6 sm:-left-16 md:-left-12 -top-8 sm:-top-10 md:-top-11' />
            </div>
            <Typography.text styles='font-normal text-white-1/80 max-w-[650px] w-full md:text-center text-left'>
              Unlock the path to a healthier, stronger you at R&P Fitness. Our
              state-of-the-art facilities, expert trainers, and diverse workout
              options await.
              <br />
              Start shaping a better you!
            </Typography.text>
            {/* button ---->  */}
            <Link to='/signup'>
              <FillButton styles='px-[24px] py-[16px] bg-black-1 rounded-[60px] mt-5'>
                <Typography.mText styles='font-inter text-white-1 font-semibold'>
                  Start Your Transformation Now!
                </Typography.mText>
              </FillButton>
            </Link>
          </div>
        </ComponentWrapper>
        {/* lines ------->  */}
        <Icons.line1 className='w-[380px] sm:w-[120px] md:w-[220px] lg:w-[320px] h-[350px] sm:h-[70px] md:h-[100px] lg:h-[151px] absolute -right-36 sm:right-0 top-0 ' />
        <Icons.line2 className='w-[190px] sm:w-[100px] md:w-[195px] h-[80px] sm:h-[22px] md:h-[31px] absolute bottom-2 sm:bottom-4 md:bottom-8 right-0 sm:right-4 md:right-6 lg:right-14' />
        <Icons.line3 className='w-[160px] sm:w-[100px] md:w-[114px] h-[140px] sm:h-[100px] md:h-[123px] absolute -bottom-16 sm:bottom-1 md:bottom-8 -left-10 sm:left-4 md:left-6 lg:left-14' />
      </div>
    </div>
  );
};

export default CallToActionBanner;
