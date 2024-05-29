import React, { ReactNode } from 'react';
import Typography from '../../../common/Typography';

interface props {
  icon: ReactNode;
  title: string;
  des: string;
}

const PowerOfRipCard: React.FC<props> = ({ icon, title, des }: props) => {
  return (
    <div
      className={`w-full h-full max-w-[420px] flex flex-col gap-2 border-[1px] p-[20px] sm:p-[32px] bg-transparent border-white-1/10 rounded-[8px]`}
    >
      {icon}
      <Typography.lgText styles='text-white-1 font-bold mt-4'>
        {title}
      </Typography.lgText>
      <Typography.text styles='font-normal text-white-1/80'>
        {des}
      </Typography.text>
    </div>
  );
};

export default PowerOfRipCard;
