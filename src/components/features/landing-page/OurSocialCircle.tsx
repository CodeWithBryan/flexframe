import React from 'react';
import ComponentWrapper from '../../common/ComponentWrapper';
import Typography from '../../common/Typography';

const OurSocialCircle: React.FC = () => {
  return (
    <div className='w-full max-w-[1500px] m-auto h-full flex flex-col py-10'>
      <ComponentWrapper>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
          <Typography.h2 styles='font-bold text-white-1 text-left md:text-center w-full'>
            Our social cirlce
          </Typography.h2>
          <Typography.text styles='font-normal text-white-1/80 max-w-[850px] w-full text-left md:text-center'>
            Explore the fitness buzz in our Social Circle! Dive into our
            Instagram feed for real-time inspiration, workout highlights, and a
            community united by wellness. Join us, share your fitness journey,
            and let the energy elevate your motivation
          </Typography.text>
        </div>
      </ComponentWrapper>
      <div className='w-full grid grid-cols-1 md:grid-cols-[230px,calc(100%-230px)] cmd:grid-cols-[300px,calc(100%-300px)] lg:grid-cols-[500px,calc(100%-500px)] xl:grid-cols-[550px,calc(100%-550px)] mt-6 sm:mt-10'>
        {/* one portion ----->  */}
        <img
          src='/assets/socialCircle1.png'
          className='w-full md:block hidden h-[600px] cmd:object-cover object-fill'
        />
        {/* 2nd portion ------>  */}
        <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3'>
          <img
            src='/assets/socialCircle2.png'
            alt=''
            className='cmd:object-fill object-cover sm:object-fill w-full h-[250px] sm:h-[300px]'
          />
          <img
            src='/assets/socialCircle3.png'
            alt=''
            className='cmd:object-fill object-cover sm:object-fill w-full h-[250px] sm:h-[300px]'
          />
          <img
            src='/assets/socialCircle4.png'
            alt=''
            className=' sm:block hidden cmd:object-fill object-fill  w-full h-[300px]'
          />
          <div className='w-full grid col-span-3'>
            <div className='w-full grid grid-cols-2'>
              <img
                src='/assets/socialCircle5.png'
                alt=''
                className='cmd:object-cover object-cover sm:object-fill w-full h-[250px] sm:h-[300px]'
              />
              <img
                src='/assets/socialCircle6.png'
                alt=''
                className='cmd:object-cover object-cover sm:object-fill w-full h-[250px] sm:h-[300px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSocialCircle;
