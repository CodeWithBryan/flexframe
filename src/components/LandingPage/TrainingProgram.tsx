import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';

const TrainingProgram: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <Typography.h2 styles='font-bold text-white-1'>
          Training program for you
        </Typography.h2>
        <Typography.text styles='font-normal text-white-1/80 max-w-[850px] w-full text-center'>
          We're committed to your fitness goals. Personalized training for all
          levels. Specialized expertise in body transformation, weight loss,
          bodybuilding, and competition.
        </Typography.text>
        {/* programs =========>  */}
        <div className='w-[200px] h-[670px]'></div>
      </div>
    </ComponentWrapper>
  );
};

export default TrainingProgram;
