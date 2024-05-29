import React from 'react';
import ComponentWrapper from '../../common/ComponentWrapper';
import Typography from '../../common/Typography';
import * as Icons from '../../common/Icons';
import PowerOfRipCard from './Cards/PowerOfRipCard';
import ReviewsLargeComponent from './ReviewsLarge';

const PowerOfRip: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <Typography.h2 styles='text-white-1 font-bold leading-[50px]'>
          Experience the power of <span className='text-red-1'>R&P Fitness</span>
        </Typography.h2>
        <Typography.text styles='font-normal max-w-[800px] w-full text-white-1/80 text-left md:text-center'>
          Discover the exhilarating power of R&P Fitness, where fitness dreams
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
        <div className='w-full flex md:flex-row flex-col  lg:gap-0 gap-10 md:gap-4 justify-between items-center mt-10 md:mt-24'>
          {/* left portion ====>  */}
          <ReviewsLargeComponent />
          {/* right por =====>  */}
          <div className='w-full flex justify-center items-center translate-x-4 sm:translate-x-2 lg:translate-x-8 xl:translate-x-8'>
            {stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] md:w-[170px] lg:w-[230px] xl:w-[300px]  md:h-[170px] lg:h-[230px] xl:h-[300px] ${
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
    title: '24/7 Access',
    des: "Enjoy the flexibility of round-the-clock gym access, allowing you to work out at a time that suits your schedule best, whether it's early morning or late at night.",
  },
  {
    icon: <Icons.modren />,
    title: 'Modern Equipment',
    des: 'Experience cutting-edge fitness with our state-of-the-art equipment, carefully selected to provide you with the latest in exercise technology for optimal results.',
  },
  {
    icon: <Icons.trainer />,
    title: 'Professional Trainers',
    des: "Reach your fitness goals faster with the guidance of our certified professional trainers. They'll personalize your workouts and provide expert advice to maximize your fitness journey.",
  },
  {
    icon: <Icons.groupClass />,
    title: 'Group Classes',
    des: 'Join invigorating group classes led by experienced instructors. Boost motivation, share the energy, and achieve your fitness objectives in a dynamic and social setting.',
  },
  {
    icon: <Icons.fit />,
    title: '1:1 Fitness Assessment',
    des: 'Receive a personalized fitness assessment with our experts. Understand your current fitness level, set realistic goals, and embark on a tailored journey to achieve your health.',
  },
  {
    icon: <Icons.retail />,
    title: 'Retail',
    des: 'Explore our retail section for fitness essentials, supplements, and apparel. Conveniently access quality products to support your health and wellness journey.',
  },
];

const stats = [
  {
    value: '300+',
    name: 'Happy customers',
  },
  {
    value: '100+',
    name: "Machines",
  },
  {
    value: '5+',
    name: 'Years in business',
  },
];

export default PowerOfRip;
