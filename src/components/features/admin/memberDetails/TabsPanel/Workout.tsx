import React, { useState } from 'react';
import SearchInput from '../../../../common/Inputs/SearchInput';
import * as Icons from '../../../../common/Icons';
import SingleSelect from '../../../../common/SingleSelect';
import FillButton from '../../../../common/Buttons/FillButton';
import TabCarousel from '../../../../common/TabCarousel';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { RxCross2 } from 'react-icons/rx';
import WorkOutCard from './Cards/WorkOutCard';
import { DateInput } from '@mantine/dates';

const Workout: React.FC = () => {
  // STATES  =========================>
  const [selectedTime, setSelectedTime] = useState('11 Saturday');
  const [date, setDate] = useState<Date | null>(null);
  const [
    addExerciseModal,
    { open: openExerciseModal, close: closeExerciseModal },
  ] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className='w-full p-4 bg-[#F9F9F9] flex flex-col'>
        {/* FILTER SECTION -------> */}
        <div className='w-full gap-3 grid mt-3 grid-cols-1 md:grid-cols-[1fr,2fr] items-center'>
          <SearchInput
            placeholder='Search exercise...'
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
              placeholder='All exercises'
              defaultValue='All exercises'
              options={mealOptions}
              inputSize='w-[130px] text-[#525866] font-medium text-[14px] h-[40px] rounded-[60px]'
            />
            <FillButton
              event={openExerciseModal}
              styles='w-[130px] h-[40px] bg-red-1 rounded-[60px] font-medium text-[14px] text-white-1'
            >
              Assign workout
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
        {/* WORKOUT TABEL */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:mt-0 mt-5 cmd:grid-cols-3 gap-3'>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((work, index) => {
            return (
              <img
                key={index}
                src='/assets/workout.svg'
                alt=''
                className='w-full object-contain h-[280px]'
              ></img>
            );
          })}
        </div>
      </div>
      {/* add workout modal -------> */}
      <Modal
        classNames={{ body: 'p-0', content: 'rounded-[15px]' }}
        opened={addExerciseModal}
        onClose={closeExerciseModal}
        withCloseButton={false}
        size='80%'
        centered
      >
        <div className='w-full flex flex-col'>
          <div className='w-full border-b-[1px] border-[#E2E4E9] pt-4 px-3 bg-[#F3F4F6] flex flex-col'>
            {/* header ----> */}
            <div className='w-full flex justify-between items-center'>
              <button
                onClick={closeExerciseModal}
                className='w-[40px] hover:bg-black-1/5 flex justify-center items-center cursor-pointer h-[40px] rounded-full border-[1px] border-[#E2E4E9]'
              >
                <RxCross2 className='text-[24px] text-[#0A0D14]' />
              </button>
              <h2 className='text-[20px] font-semibold text-[#121111]'>
                Add exercises to workout
              </h2>
              <FillButton
                event={closeExerciseModal}
                styles='bg-red-1 text-[14px] font-semibold text-white-1 px-4 py-2 rounded-[60px]'
              >
                Save
              </FillButton>
            </div>
            {/* filter  */}
            <div className='w-full flex pb-5 mt-5 justify-center items-center gap-2'>
              <SearchInput
                size='w-[200px] md:w-[300px] lg:w-[500px] h-[45px] rounded-[60px]'
                placeholder='Search exercises..'
              />
              <button className='flex bg-white-1 border-[1px] hover:bg-black-1/5 h-[40px] px-4 border-[#E2E4E9] rounded-[60px] justify-center items-center gap-2'>
                <Icons.filter className='w-[18px] h-[16px]' />
                <p className='text-[#525866] text-[14px] font-medium'>Filter</p>
              </button>
            </div>
          </div>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
            {/* 1st col  */}
            <div className='w-full border-b-[1px] lg:border-r-[1px] border-[#E2E4E9] flex flex-col p-3'>
              <p className='text-[16px] font-normal text-[#0A0D14]'>
                Select or drag and drop to other section
              </p>
              {/*  workout card --->   */}
              <div className='w-full mt-3 lg:pb-0 pb-3 flex flex-col gap-3'>
                {[0, 1, 2, 3].map((card, index) => {
                  return <WorkOutCard key={index} />;
                })}
              </div>
            </div>
            {/* 2nd col  */}
            <div className='w-full gap-3 lg:pt-0 pt-5 flex flex-col p-3'>
              <DateInput
                classNames={{
                  input: 'h-[40px] rounded-[10px] border-[#E2E4E9]',
                }}
                clearable
                value={date}
                description='Select date where you want to add exercise '
                onChange={setDate}
                label='Date *'
                placeholder='MM/DD/YYYY'
              />
              <p className='text-[16px] font-normal text-[#0A0D14]'>
                2 selected
              </p>
              <div className='w-full flex flex-col gap-3'>
                {[0, 1].map((item, index) => {
                  return <WorkOutCard key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

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

export default Workout;
