import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
  event?: any;
  type?: "button" | "submit" | "reset";
}

const FillButton: React.FC<Props> = ({
  children,
  styles = 'px-[16px] py-[24px] rounded-[60px] bg-red-main',
  event = () => {},
  type,
}: Props) => {
  return (
    <button
      onClick={event}
      className={` ${styles} hover:opacity-80 active:translate-y-[1px]`}
      type={type}
    >
      {children}
    </button>
  );
};

export default FillButton;
