import React from 'react';

interface Props {
  type: string;
  value: string;
}

const StatsWidget: React.FC<Props> = ({ type, value }: Props) => {
  return (
    <div className='w-full bg-white-1 border-[1px] p-3 border-[#E2E4E9] rounded-[16px] flex flex-col gap-2'>
      <p className='text-[12px] text-[#0A0D14] font-normal'>{type}</p>
      <h3 className='text-[24px] font-semibold text-[#0A0D14]'>{value}</h3>
    </div>
  );
};

export default StatsWidget;
