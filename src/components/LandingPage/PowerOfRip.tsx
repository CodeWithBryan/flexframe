import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import * as Icons from '../../svg/Icons';
import PowerOfRipCard from './Cards/PowerOfRipCard';

const PowerOfRip: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <Typography.h2 styles='text-white-1 font-bold leading-[50px]'>
          Experience the power of <span className='text-red-1'>RP</span>
        </Typography.h2>
        <Typography.text styles='font-normal max-w-[800px] w-full text-center text-white-1/80'>
          Discover the exhilarating power of RP Fitness, where fitness dreams
          become a reality. Our dynamic gym is more than just a workout space –
          it's a catalyst for unleashing your inner strength and achieving
          remarkable results
        </Typography.text>
        {/* power of rips cards =====>  */}
        <div className='w-full grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
          {powerRips.map((item, index) => {
            return (
              <div className='w-full h-full flex justify-center items-center'>
                <PowerOfRipCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  des={item.des}
                />
              </div>
            );
          })}
        </div>
        {/*  Reviews ===========>  */}
        <div className='w-full flex md:flex-row flex-col  lg:gap-0 gap-10 md:gap-4 justify-between items-center mt-12 md:mt-24'>
          {/* left portion ====>  */}
          <div className='flex max-w-[400px] flex-col items-center md:items-start gap-3'>
            <Typography.h3 styles='text-white-1 font-bold md:text-left text-center'>
              Gym with the best service and quality always
            </Typography.h3>
            <div className='md:block hidden w-full h-[1px] bg-white-1/10 my-3' />
            <div className='flex flex-col gap-3'>
              <div className='flex justify-center items-center gap-3'>
                <div className=' flex justify-center items-center gap-1'>
                  {[0, 1, 2, 3, 4].map((item, index) => {
                    return (
                      <Icons.star className='w-[32px] h-[32px]' key={index} />
                    );
                  })}
                </div>
                <Typography.lgText styles='text-white-1 font-bold'>
                  5.0
                </Typography.lgText>
              </div>
              <Typography.smallText styles='text-white-1 font-normal md:text-left text-center'>
                2.1k reviews
              </Typography.smallText>
            </div>
          </div>
          {/* right por =====>  */}
          <div className='w-full flex justify-center items-center translate-x-5 sm:translate-x-2 lg:translate-x-8 xl:translate-x-12'>
            {stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] md:w-[170px] lg:w-[230px] xl:w-[300px]  md:h-[170px] lg:h-[230px] xl:h-[300px] ${
                    index === 1
                      ? '-translate-x-5 sm:-translate-x-2 md:-translate-x-5 lg:-translate-x-10'
                      : index === 2
                      ? '-translate-x-10 sm:-translate-x-4 md:-translate-x-10 lg:-translate-x-20'
                      : 'translate-x-0'
                  }
                  gap-1 rounded-full border-[1px] border-white-1/10 flex flex-col justify-center items-center`}
                >
                  <p className='text-[22px] md:text-[32px] lg:text-[48px] text-red-1 font-bold'>
                    {item.value}
                  </p>
                  <p className='text-white-2 text-[8px] sm:text-[12px] lg:text-[18px] text-center font-normal'>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

const powerRips = [
  {
    icon: <Icons.anyTimeService />,
    title: '24/7 access',
    des: "Enjoy the flexibility of round-the-clock gym access, allowing you to work out at a time that suits your schedule best, whether it's early morning or late at night.",
  },
  {
    icon: <Icons.modren />,
    title: 'Modern equipments',
    des: 'Experience cutting-edge fitness with our state-of-the-art equipment, carefully selected to provide you with the latest in exercise technology for optimal results.',
  },
  {
    icon: <Icons.trainer />,
    title: 'Professional trainer',
    des: "Reach your fitness goals faster with the guidance of our certified professional trainers. They'll personalize your workouts and provide expert advice to maximize your fitness journey.",
  },
  {
    icon: <Icons.groupClass />,
    title: 'Group class',
    des: 'Join invigorating group classes led by experienced instructors. Boost motivation, share the energy, and achieve your fitness objectives in a dynamic and social setting.',
  },
  {
    icon: <Icons.fit />,
    title: '1:1 Fitness Assessment',
    des: 'Receive a personalized fitness assessment with our experts. Understand your current fitness level, set realistic goals, and embark on a tailored journey to achieve your health.',
  },
  {
    icon: <Icons.retail />,
    title: 'Retails',
    des: 'Explore our retail section for fitness essentials, supplements, and apparel. Conveniently access quality products to support your health and wellness journey.',
  },
];

const stats = [
  {
    value: '15k+',
    name: 'Happy customers',
  },
  {
    value: '100+',
    name: "Gym equipment's",
  },
  {
    value: '8+',
    name: 'Years of experience',
  },
];

export default PowerOfRip;
