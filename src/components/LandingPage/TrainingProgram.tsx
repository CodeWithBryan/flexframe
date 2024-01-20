import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import FillButton from '../shared/Buttons/FillButton';
import TrainingProgramCard from './Cards/TrainingProgramCard';

const TrainingProgram: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <Typography.h2 styles='font-bold text-white-1'>
          Training program for you
        </Typography.h2>
        <Typography.text styles='font-normal text-white-1/80 max-w-[850px] w-full text-left md:text-center'>
          We're committed to your fitness goals. Personalized training for all
          levels. Specialized expertise in body transformation, weight loss,
          bodybuilding, and competition.
        </Typography.text>
        {/* programs =========>  */}
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-[300px,calc(100%-300px)] lg:grid-cols-[350px,calc(100%-350px)] xl:grid-cols-[540px,calc(100%-540px)] gap-4 md:gap-2 lg:gap-4 mt-8'>
          {/* left por ===>  */}
          <div className="w-full h-[240px] sm:h-[650px] grayscale sm:grayscale-0 rounded-md bg-[url('/assets/trainingP1.webp')] bg-cover bg-no-repeat bg-center">
            <div className='flex h-full justify-end flex-col gap-3 px-4 py-6'>
              <h4 className='text-white-1 text-[38px] font-semibold'>
                Body building
              </h4>
              <Typography.text styles='text-white-1/80 font-normal sm:block hidden'>
                Elevate your physique with our Bodybuilding Service: Tailored
                programs for strength, muscle growth, and sculpting at RP
                Fitness.
              </Typography.text>
              <FillButton styles='px-[24px] w-fit py-[16px] rounded-[60px] border-[1px] border-white-1 mt-4 sm:block hidden'>
                <Typography.smallText styles='capitalize text-white-1 font-semibold'>
                  start body building
                </Typography.smallText>
              </FillButton>
            </div>
          </div>
          {/* right por ===>  */}
          <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 lg:gap-4 h-full'>
            {tainingPrograms.map((item, index) => {
              return (
                <TrainingProgramCard
                  key={index}
                  title={item.text}
                  bgImage={item.bgImage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

const tainingPrograms = [
  {
    bgImage: "bg-[url('/assets/trainingP2.webp')]",
    text: 'WEIGHT LIFTING',
  },
  {
    bgImage: "bg-[url('/assets/trainingP3.webp')]",
    text: 'Weight loss',
  },
  {
    bgImage: "bg-[url('/assets/trainingP4.webp')]",
    text: 'CARDIO training',
  },
  {
    bgImage: "bg-[url('/assets/trainingP5.webp')]",
    text: 'Personal training',
  },
];

export default TrainingProgram;
