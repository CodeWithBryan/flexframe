import React, { ReactNode } from 'react';
import { Checkbox } from '@mantine/core';
import Typography from '../../shared/Typography/Typography';
import * as Icons from '../../../svg/Icons';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface Props {
  planeName: {
    img: string;
    name: string;
  };
  method: {
    img: ReactNode;
    number: string;
  };
  dateAndTime: string;
  expireDate: string;
  amount: string;
  status: string;
}

const TableRow: React.FC<Props> = ({
  planeName,
  method,
  dateAndTime,
  expireDate,
  amount,
  status,
}: Props) => {
  return (
    <div
      className={`w-full min-w-[820px] overflow-auto min-h-[60px] grid bg-white-1 px-3 grid-cols-[30px,1fr,1fr,1fr,1fr,1fr,1fr,20px] justify-center items-center`}
    >
      {/* check box  */}
      <div className='w-full flex justify-start items-center'>
        <Checkbox size='xs' color='#B61F24' />
      </div>
      {/* plane name ---> */}
      <div className='w-full flex justify-start items-center gap-1'>
        <img src={planeName.img} className='w-[35px] h-[35px]' alt='' />
        <Typography.smallText styles='text-black-3 font-normal'>
          {planeName.name}
        </Typography.smallText>
      </div>
      {/* date and time --->  */}
      <Typography.smallText styles='text-[#525866] w-full flex justify-start font-normal'>
        {dateAndTime}
      </Typography.smallText>
      {/* expire date --->  */}
      <Typography.smallText styles='text-[#525866] w-full flex justify-start font-normal'>
        {expireDate}
      </Typography.smallText>
      {/* amount --->  */}
      <Typography.smallText styles='text-[#525866] w-full flex justify-start font-normal'>
        {amount}
      </Typography.smallText>
      {/* payement metode */}
      <div className='flex justify-start items-center w-full gap-2'>
        {method.img}
        <Typography.smallText styles='text-[#525866] font-normal'>
          {method.number}
        </Typography.smallText>
      </div>
      {/* status  */}
      <div className='w-full flex justify-start items-center'>
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
      </div>
      {/* edit row ---->  */}
      <div className='flex justify-center items-center'>
        <BsThreeDotsVertical className='text-[16px] hover:opacity-80 cursor-pointer text-[#525866]' />
      </div>
    </div>
  );
};

export default TableRow;
