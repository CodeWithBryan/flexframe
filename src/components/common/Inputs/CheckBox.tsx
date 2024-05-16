import React, { ReactNode } from 'react';
import { Checkbox } from '@mantine/core';

interface Props {
  label: ReactNode;
  size?: string;
  value?: any;
  onChange?: any;
}

const CheckBoxInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  size = 'sm',
}: Props) => {
  return (
    <Checkbox
      value={value}
      onChange={onChange}
      size={size}
      label={label}
      color='#B61F24'
    />
  );
};

export default CheckBoxInput;
