import React from 'react';
import * as Icons from '../../../../../common/Icons';
import { LuPlus } from 'react-icons/lu';

const WorkOutCard: React.FC = () => {
  return (
    <div className='w-full border-[1px] p-3 border-[#E2E4E9] rounded-[12px] flex justify-between items-center '>
      <div className='flex gap-3 justify-center items-center'>
        <img src='/assets/workout2.png' className='w-[80px] h-[70px]' alt='' />
        <div className='flex flex-col gap-1'>
          <h3 className='text-[16px] font-bold text-[#0A0D14]'>
            Superman Leg Stretch
          </h3>
          <div className='flex gap-x-3 gap-y-3 flex-wrap justify-start items-center'>
            {excerciseGuide.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-center items-center gap-1'
                >
                  {item.icon}
                  <p className='text-[14px] font-normal text-[#525866]'>
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className='min-w-[40px] hover:bg-black-1/5 min-h-[40px] rounded-full flex justify-center items-center border-[1px] border-[#E2E4E9]'>
        <LuPlus className='text-[#525866] text-[20px]' />
      </button>
    </div>
  );
};

const excerciseGuide = [
  {
    icon: <Icons.reps className='w-[14px] h-[16px]' />,
    value: '3x4 reps',
  },
  {
    icon: <Icons.time2 className='w-[16px] h-[16px]' />,
    value: '60s',
  },
  {
    icon: <Icons.dumbel2 className='w-[16px] h-[16px]' />,
    value: 'Exercise mat',
  },
];

export default WorkOutCard;
