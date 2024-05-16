import React, { ReactNode } from 'react';
import { Checkbox } from '@mantine/core';

interface Props {
  label: ReactNode;
  size?: string;
}

const CheckBoxInput: React.FC<Props> = ({ label, size = 'sm' }: Props) => {
  return <Checkbox size={size} label={label} color='#B61F24' />;
};

export default CheckBoxInput;
