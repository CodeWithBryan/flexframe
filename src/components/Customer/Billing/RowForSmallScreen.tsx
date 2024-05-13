import React, { ReactNode } from 'react';
import Typography from '../../shared/Typography/Typography';
import * as Icons from '../../../svg/Icons';

interface Props {
  planeName: {
    img: string;
    name: string;
  };
  amount: string;
  startDate: string;
  expireDate: string;
  method: {
    img: ReactNode;
    number: string;
  };
  status: string;
}

const RowForSmallScreen: React.FC<Props> = ({
  planeName,
  startDate,
  expireDate,
  method,
  status,
  amount,
}: Props) => {
  return (
    <div className='w-full grid cardShadow bg-white-1 border-[1px] border-white-3 rounded-[10px] px-2 py-4 grid-cols-[2fr,1fr]'>
      {/* left portion ---->  */}
      <div className='w-full flex justify-start gap-2'>
        <img src={planeName.img} alt='' className='w-[40px] h-[40px]' />
        <div className='flex flex-col gap-1 items-start'>
          <Typography.text styles='text-black-3 font-semibold'>
            {planeName.name}
          </Typography.text>
          <Typography.xsText styles='text-[#525866] font-normal'>
            {startDate} - {expireDate}
          </Typography.xsText>
          <div className='flex justify-center items-center gap-1'>
            {method.img}
            <Typography.xsText styles='text-[#525866] font-normal'>
              {method.number}
            </Typography.xsText>
          </div>
        </div>
      </div>
      {/* right portion --->  */}
      <div className='w-full h-full justify-between items-end flex flex-col'>
        {/* status */}
        {status === 'active' ? (
          <div className='flex justify-center items-center gap-1 border-[1px] border-white-3 rounded-[60px] px-[8px] py-[4px]'>
            <Icons.fillCheck className='w-[18px] h-[18px]' fill='#38C793' />
            <Typography.xsText styles='text-[#525866] font-medium'>
              Active
            </Typography.xsText>
          </div>
        ) : (
          <div className='flex justify-center items-center gap-1 border-[1px] border-white-3 rounded-[60px] px-[8px] py-[4px]'>
            <Icons.expired className='w-[18px] h-[18px]' />
            <Typography.xsText styles='text-[#525866] font-medium'>
              Expired
            </Typography.xsText>
          </div>
        )}
        {/* price */}
        <Typography.smallText styles='text-black-1 font-medium'>
          {amount}
        </Typography.smallText>
      </div>
    </div>
  );
};

export default RowForSmallScreen;
