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
  'Medicine Ball Slams',
  'Kettlebell Swings',
  'Dumbbell Rows',
  'Barbell Squats',
  'Bench Press',
  'Deadlifts',
  'Pull-Ups',
  'Push-Ups',
  'Battle Ropes',
  'Plank to Push-Up',
  'Russian Twists with Medicine Ball',
  'Kettlebell Goblet Squats',
  'Dumbbell Shoulder Press',
  'Barbell Deadlifts',
  'Incline Bench Press',
  'Renegade Rows',
  'TRX Suspension Training',
  'Box Jumps',
  'Burpees'
];


export default FeatureBanner;
