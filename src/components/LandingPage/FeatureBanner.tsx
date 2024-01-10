import React from 'react';
import * as Icons from '../../svg/Icons';
import Typography from '../shared/Typography/Typography';

const FeatureBanner: React.FC = () => {
  return (
    <div className='w-full bg-red-1 h-[80px] flex justify-between items-center px-1'>
      {features.map((item, index) => {
        return (
          <div key={index} className='flex justify-center gap-2 items-center'>
            <Icons.dumbel />
            <Typography.lgText styles='text-white-1 font-medium'>
              {item}
            </Typography.lgText>
          </div>
        );
      })}
    </div>
  );
};

const features = [
  'Side Planks',
  'Medicine ball',
  'kettlebell',
  'Dumbbell rows',
  'Barbell Squats',
  'Bench Press',
];

export default FeatureBanner;
