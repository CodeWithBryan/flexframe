import React, { ReactNode } from 'react';
import { Checkbox } from '@mantine/core';

interface Props {
  label: ReactNode;
}

const CheckBoxInput: React.FC<Props> = ({ label }: Props) => {
  return <Checkbox label={label} color='#B61F24' />;
};

export default CheckBoxInput;
