import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
}

const FillButton: React.FC<Props> = ({
  children,
  styles = 'px-[16px] py-[24px] rounded-[60px] bg-red-main',
}: Props) => {
  return (
    <button className={` ${styles} hover:opacity-80 active:translate-y-[2px]`}>
      {children}
    </button>
  );
};

export default FillButton;
