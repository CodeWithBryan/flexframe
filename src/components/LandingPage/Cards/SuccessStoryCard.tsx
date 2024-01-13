import React from 'react';
import Typography from '../../shared/Typography/Typography';

const SuccessStoryCard: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-[1fr,1.2fr] justify-center items-center'>
      {/* left por ===>  */}
      <div className='w-full flex justify-center items-center'>
        <img
          src='/assets/success.png'
          alt=''
          className=' w-full max-w-[610px] h-[620px] object-fill'
        />
      </div>
      {/* right por ====>  */}
      <div className='w-full flex gap-6 flex-col items-start pl-12'>
        <Typography.h3 styles='text-white-1 font-bold'>
          Emily was obese her entire adult life and knew she needed to change
        </Typography.h3>
        <Typography.text styles='text-white-1 font-normal'>
          After experimenting with numerous diets and generic fitness plans,
          Coach Ryan in on an approach that resonated with Emily - strength
          training! Choosing consistency over perfection, Emily has triumphed,
          shedding over 100 pounds! Now, she effortlessly conquers handstands,
          excels at meal planning, and continues to explore the capabilities of
          her transformed body under Ryan's guidanc
        </Typography.text>
        <div className='flex flex-col gap-1'>
          <Typography.text styles='text-white-1 font-bold'>
            Emily Smith
          </Typography.text>
          <Typography.text styles='text-white-1 font-normal'>
            Graphic Designer
          </Typography.text>
        </div>
        <div className='flex justify-center items-center gap-4 mt-3'>
          {[0, 1, 2].map((item, index) => {
            return (
              <img
                key={index}
                src='/assets/success1.png'
                width='64px'
                height='64px'
                alt=''
                className='object-fill rounded-full'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
