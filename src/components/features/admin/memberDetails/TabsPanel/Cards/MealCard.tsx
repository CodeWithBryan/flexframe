import React from 'react';
import * as Icons from '../../../../../../components/common/Icons';

const MealCard: React.FC = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[360px] bg-white-1 p-3 border-[1px] gap-3 border-[#E2E4E9] rounded-[16px] grid grid-cols-[100px,1fr] '>
        <img src='/assets/meal.svg' className='w-full h-[100px]' alt='' />
        <div className='flex flex-col w-full '>
          <h3 className='text-[18px] font-semibold text-[#272D37]'>
            Oatmeal Bowl
          </h3>
          <p className='text-[12px] my-2 font-normal text-[#525866]'>
            Rolled oats, almond milk, sliced bananas, chia seeds.
          </p>
          <div className='flex flex-wrap justify-start gap-x-5 gap-y-2 items-center'>
            {mealEnergy.map((meal, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-center gap-1 items-center'
                >
                  {meal.icon}
                  <p className='text-[14px] font-medium text-[#525866]'>
                    {meal.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mealEnergy = [
  {
    icon: <Icons.gram className='w-[16px] h-[16px]' />,
    value: '50g',
  },
  {
    icon: <Icons.protein className='w-[14px] h-[16px]' />,
    value: '15g',
  },
  {
    icon: <Icons.fish className='w-[14px] h-[16px]' />,
    value: '10g',
  },
];

export default MealCard;
