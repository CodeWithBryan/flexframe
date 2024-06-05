import React, { useState } from 'react';
import SearchInput from '../../../../common/Inputs/SearchInput';
import * as Icons from '../../../../common/Icons';
import SingleSelect from '../../../../common/SingleSelect';
import FillButton from '../../../../common/Buttons/FillButton';
import OutlineButton from '../../../../common/Buttons/OutlineButton';
import MealCard from './Cards/MealCard';
import TabCarousel from '../../../../common/TabCarousel';

const MealPlan: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('11 Saturday');

  return (
    <div className='w-full p-4 bg-[#F9F9F9] flex flex-col'>
      {/* FILTER SECTION -------> */}
      <div className='w-full gap-3 grid mt-3 grid-cols-1 md:grid-cols-[1fr,2fr] items-center'>
        <SearchInput
          placeholder='Search meal...'
          size='max-w-[400px] w-full rounded-[60px] h-[45px]'
        />
        <div className='w-full gap-2 md:gap-3 flex-wrap flex justify-end items-center'>
          <button className='flex bg-white-1 border-[1px] hover:bg-black-1/5 h-[40px] px-4 border-[#E2E4E9] rounded-[60px] justify-center items-center gap-2'>
            <Icons.filter className='w-[18px] h-[16px]' />
            <p className='text-[#525866] text-[14px] font-medium'>Filter</p>
          </button>
          <SingleSelect
            placeholder='This week'
            defaultValue='This week'
            options={timeOptions}
            inputSize='w-[130px] text-[#525866] font-medium text-[14px] h-[40px] rounded-[60px]'
          />
          <SingleSelect
            placeholder='All meals'
            defaultValue='All meals'
            options={mealOptions}
            inputSize='w-[130px] text-[#525866] font-medium text-[14px] h-[40px] rounded-[60px]'
          />
          <FillButton styles='w-[130px] h-[40px] bg-red-1 rounded-[60px] font-medium text-[14px] text-white-1'>
            Assign meal
          </FillButton>
        </div>
      </div>
      {/* CARSOUSEL ----------> */}
      <div className='w-full mt-3 md:mt-7'>
        <TabCarousel
          sliderItems={timeSliderOptions}
          selectedday={selectedTime}
          setDay={setSelectedTime}
        />
      </div>
      <p className='text-[16px] font-normal mt-5 text-[#0A0D14]'>
        11 Saturday Dec, 2023
      </p>
      {/* MEALS TABLE ------> */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 cmd:grid-cols-3 mt-5 gap-3'>
        {/* BREAKFASR ---> */}
        {mealPlans.map((item, index) => {
          return (
            <div key={index} className='w-full flex flex-col gap-3'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>
                {item.type}
              </p>
              <div className='w-full flex justify-center items-center'>
                <OutlineButton styles='w-full max-w-[350px] h-[40px] border-[1px] border-[#E2E4E9] rounded-[60px]'>
                  Add product
                </OutlineButton>
              </div>
              {/* meal cards --> */}
              <div className='w-full flex flex-col gap-3'>
                {item.meals.map((meal, index) => {
                  return <MealCard key={index} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealPlan;

const timeOptions = ['This Week', 'This Day', 'Last Week'];

const mealOptions = ['All meals', 'Day Meal', 'Monthly Meal'];

const timeSliderOptions = [
  '11 Saturday',
  '12 Sunday',
  '13 Monday',
  '14 Tuesday',
  '15 Wednesday',
  '16 Thursday',
  '17 Friday',
  '18 Saturday',
  '19 Sunday',
];

const mealPlans = [
  {
    type: 'Breakfast',
    meals: [0, 1, 2],
  },
  {
    type: 'Lunch',
    meals: [0, 1],
  },
  {
    type: 'Dinner',
    meals: [0, 1, 2],
  },
];
