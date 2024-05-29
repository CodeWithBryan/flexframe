import React from 'react';
import * as Icons from '../../../common/Icons';

interface props {
  feature: string;
}

const FeatureCard: React.FC<props> = ({ feature }: props) => {
  return (
    <div className='p-5 flex justify-center gap-2 items-center'>
      <Icons.dumbel className='md:w-[23px] md:h-[23px] sm:w-[20px] sm:h-[20px] w-[12px] h-[12px]' />
      <p className='text-white-1 text-[12px] sm:text-[18px] md:text-[24px] font-medium'>
        {feature}
      </p>
    </div>
  );
};

export default FeatureCard;
