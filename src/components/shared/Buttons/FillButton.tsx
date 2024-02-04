import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
  event?: any;
}

const FillButton: React.FC<Props> = ({
  children,
  styles = 'px-[16px] py-[24px] rounded-[60px] bg-red-main',
  event = () => {},
}: Props) => {
  return (
    <button
      onClick={event}
      className={` ${styles} hover:opacity-80 active:translate-y-[1px]`}
    >
      {children}
    </button>
  );
};

export default FillButton;
