import React from 'react';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';

const TopNavigation: React.FC = () => {
  return (
    <div className='w-full h-[90px] px-8 flex justify-between items-center bg-white-1 border-b-[1px] border-white-3'>
      {/* left por --> */}
      <div className='w-full max-w-[500px]'>
        <Input
          placeholder='Your email'
          leftSection={<LuSearch className='text-[20px]' />}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
