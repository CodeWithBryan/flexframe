import React from 'react';
import { Select } from '@mantine/core';

interface Props {
  options: string[];
  placeholder: string;
  name?: string;
  value?: string;
  setValue?: any;
  defaultValue?: string;
  inputSize?: string;
}

const SingleSelect: React.FC<Props> = ({
  options,
  placeholder,
  value,
  setValue,
  inputSize,
  defaultValue,
}: Props) => {
  return (
    <Select
      classNames={{ input: `${inputSize} focus:border-[1px] border-white-3` }}
      value={value}
      defaultSearchValue={defaultValue}
      onChange={setValue}
      className='input day'
      placeholder={placeholder}
      data={options}
    />
  );
};

export default SingleSelect;
