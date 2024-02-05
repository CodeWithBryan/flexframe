import React from 'react';
import { Select } from '@mantine/core';
import classes from '../../../pages/Customer/Welcome/Welcome.module.css';

interface Props {
  options: string[];
  placeholder: string;
  name?: string;
  value?: string;
  setValue?: any;
}

const SingleSelect: React.FC<Props> = ({
  options,
  placeholder,
  value,
  setValue,
  name,
}: Props) => {
  return (
    <Select
      name={name}
      value={value}
      onChange={setValue}
      classNames={classes}
      placeholder={placeholder}
      data={options}
    />
  );
};

export default SingleSelect;
