import React from 'react';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';

interface Props {
  placeholder: string;
  size: string;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  size = 'w-full h-[40px] rounded-[64px] csm:w-[200px] lg:w-[330px]',
}: Props) => {
  return (
    <Input
      classNames={{
        input: `{rounded-[64px] ${size} border-[#E2E4E9] text-[14px] placeholder:text-[#868C98] font-normal}`,
      }}
      placeholder={placeholder}
      leftSection={<LuSearch className='text-[20px]' />}
    />
  );
};

export default SearchInput;
