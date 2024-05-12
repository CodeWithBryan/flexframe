import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import FillButton from '../shared/Buttons/FillButton';
import * as Icons from '../../svg/Icons';

const AboutUs: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full grid grid-cols-1 lg:gap-0 gap-6 lg:grid-cols-2' id="aboutus">
        {/* left portion ====>  */}
        <div className='w-full order-2 lg:order-1 flex justify-center lg:justify-start items-center'>
          <img
            src='/assets/aboutUs.png'
            alt=''
            className='w-full max-w-[380px] sm:max-w-[430px] md:max-w-[540px] h-[370px] sm:h-[450px] md:h-[560px]'
          />
        </div>
        {/* right portion =====>  */}
        <div className='w-full h-full lg:order-2 order-1 flex gap-3 sm:gap-5 xl:gap-4 justify-center items-start flex-col'>
          <Typography.smallText styles='text-red-1 font-normal'>
            About us
          </Typography.smallText>
          <Typography.h2 styles='text-white-1 font-bold'>
            We offer a comprehensive fitness experience
          </Typography.h2>
          <Typography.text styles='font-normal text-white-1/80'>
            At RP Fitness, we recognize the challenges of maintaining a healthy
            lifestyle in today's fast-paced world. Our commitment goes beyond
            merely offering a gym; we provide a transformative haven where
            health, cleanliness, friendliness, and motivation converge at an
            affordable rate.
          </Typography.text>
          <Typography.text styles='font-normal text-white-1/80'>
            RP Fitness: Beyond a gym, a sanctuary for stress relief and
            well-being. Our mission is to spread wellness, providing knowledge
            on workouts, diet, and stress management for a healthier, accessible
            life.
          </Typography.text>
          <div className='w-full flex sm:flex-row flex-col-reverse justify-center sm:justify-start items-start sm:items-center gap-4 sm:gap-6 sm:mt-3 mt-3'>
            <div className='w-full sm:w-fit flex justify-center items-center'>
              <FillButton styles='px-[24px] w-full max-w-[320px] sm:w-fit py-[16px] bg-white-1/10 rounded-[60px]'>
                <Typography.mText styles='text-white-1 font-semibold'>
                  Learn More
                </Typography.mText>
              </FillButton>
            </div>
            {/* phone number ======>  */}
            <div className='flex justify-center items-center gap-2'>
              <Icons.call stroke='#B61F24' className='w-[20px] h-[20px]' />
              <div className='flex flex-col gap-1'>
                <Typography.xsText styles='text-red-1 font-medium'>
                  Call us any time
                </Typography.xsText>
                <Typography.smallText styles='text-white-1 font-medium'>
                  +1 (407)-920-9863
                </Typography.smallText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AboutUs;
