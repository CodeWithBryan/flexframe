import React from 'react';
import Typography from '../../common/Typography';
import ComponentWrapper from '../../common/ComponentWrapper';
import TrainerCard from './Cards/TrainerCard';

const OurExpertTrainer: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <Typography.h2 styles='font-bold text-white-1'>
          Meet our expert trainer
        </Typography.h2>
        <Typography.text styles='font-normal text-white-1/80 max-w-[850px] w-full text-left md:text-center'>
          Meet our Expert Trainers: Your dedicated guides to personalized
          fitness success. Elevate your journey with tailored workouts and
          expert advice.
        </Typography.text>
      </div>
      {/*  */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[22px] sm:gap-[2rem] md:gap-[3rem] mt-12'>
        {/* left side */}
        {trainerData.map((item, index) => {
          return (
            <TrainerCard
              key={index}
              index={index}
              img={item.img}
              name={item.name}
              speciality={item.speciality}
            />
          );
        })}
      </div>
    </ComponentWrapper>
  );
};

const trainerData = [
  {
    img: '/assets/expert1.png',
    name: 'Ryan',
    speciality: 'Fitness trainer',
  },
  {
    img: '/assets/expert1.png',
    name: 'Ryan',
    speciality: 'Fitness trainer',
  },
];

export default OurExpertTrainer;
