import React from 'react';
import Typography from '../../../common/Typography';

const SuccessStoryCard: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-1 cmd:grid-cols-[1fr,1.2fr] cmd:gap-0 gap-6 justify-center items-center'>
      {/* left por ===>  */}
      <div className='w-full flex justify-center items-center'>
        <img
          src='/assets/success.png'
          alt=''
          className=' w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[580px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[470px] xl:h-[570px] object-fill'
        />
      </div>
      {/* right por ====>  */}
      <div className='w-full flex gap-6 flex-col items-start pl-4 lg:pl-12'>
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
      </div>
    </div>
  );
};

export default SuccessStoryCard;
