import React from 'react';
import { Select } from '@mantine/core';

interface Props {
  options: string[];
  placeholder: string;
  name?: string;
  value?: string;
  setValue?: any;
  inputSize?: string;
}

const SingleSelect: React.FC<Props> = ({
  options,
  placeholder,
  value,
  setValue,
  inputSize,
}: Props) => {
  return (
    <Select
      classNames={{ input: `${inputSize} focus:border-[1px] border-white-3` }}
      value={value}
      onChange={setValue}
      className='input day'
      placeholder={placeholder}
      data={options}
    />
  );
};

export default SingleSelect;
