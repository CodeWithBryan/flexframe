import React, { ReactNode } from 'react';
import { Checkbox } from '@mantine/core';
import { BsThreeDotsVertical } from 'react-icons/bs';
import * as Icons from '../../../common/Icons';

interface Props {
  name: {
    img: ReactNode;
    name: string;
  };

  email: string;
  mobileNumber: string;
  joinedDate: string;
  spending: string;
  status: string;
}

const TableRow: React.FC<Props> = ({
  name,
  email,
  mobileNumber,
  joinedDate,
  spending,
  status,
}: Props) => {
  return (
    <div className='w-full min-w-[1080px] border-b-[1px] border-[#E2E4E9] overflow-auto min-h-[60px] grid bg-white-1 px-3 grid-cols-[30px,1fr,1fr,.8fr,.8fr,.8fr,1fr,30px] justify-center items-center'>
      {/* check box  */}
      <div className='w-full flex justify-start items-center'>
        <Checkbox size='xs' color='#B61F24' />
      </div>
      {/* member name  */}
      <div className='w-full gap-2 flex justify-start items-center'>
        {name.img}
        <p className='text-[14px] text-[#0A0D14] font-normal'>{name.name}</p>
      </div>
      {/* email */}
      <p className='w-full text-[14px] text-[#525866] font-normal flex justify-start'>
        {email}
      </p>
      {/* mobile-number */}
      <p className='w-full text-[14px] text-[#525866] font-normal flex justify-start'>
        {mobileNumber}
      </p>
      {/* joined-date */}
      <p className='w-full text-[14px] text-[#525866] font-normal flex justify-start'>
        {joinedDate}
      </p>
      {/* spendings */}
      <p className='w-full text-[14px] text-[#525866] font-normal flex justify-start'>
        {spending}
      </p>
      {/* status */}
      {status === 'active' ? (
        <div className='flex justify-start items-center gap-2'>
          <div className='flex border-[1px] rounded-[6px] px-[6px] py-[2px] border-[#E2E4E9] justify-center items-center gap-[2px]'>
            <Icons.fillCheck className='w-[16px] h-[16px]' fill='#38C793' />
            <p className='text-[12px] font-normal text-[#525866]'>Active</p>
          </div>
          <p className='px-3 py-1 bg-[#FFDAC2] text-[#6E330C] rounded-[60px] text-[12px] font-medium'>
            Subscribed
          </p>
        </div>
      ) : (
        <div className='w-full flex justify-start items-center'>
          <div className='flex border-[1px] rounded-[6px] px-[6px] py-[2px] border-[#E2E4E9] justify-center items-center gap-[2px]'>
            <Icons.inActive className='w-[16px] h-[16px]' />
            <p className='text-[12px] font-normal text-[#525866]'>Inactive</p>
          </div>
        </div>
      )}
      {/* edit option  */}
      <div className='flex justify-center items-center'>
        <BsThreeDotsVertical className='text-[16px] hover:opacity-80 cursor-pointer text-[#525866]' />
      </div>
    </div>
  );
};

export default TableRow;
