'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import FeatureCard from './Cards/FeatureCard';

const FeatureBanner: React.FC = () => {
  return (
    <div className='w-full h-[35px] md:h-[80px] bg-red-1 flex justify-center items-center'>
      <Marquee gradient={false} pauseOnHover={true} speed={120}>
        {features.map((item, index) => {
          return <FeatureCard feature={item} key={index} />;
        })}
      </Marquee>
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
