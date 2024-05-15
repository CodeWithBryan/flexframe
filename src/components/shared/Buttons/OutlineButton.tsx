import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
  event?: any;
}

const OutlineButton: React.FC<Props> = ({
  children,
  styles = 'text-[#525866] border-white-3',
  event = () => {},
}: Props) => {
  return (
    <button
      onClick={event}
      className={`border-[1px] rounded-[60px] hover:bg-black-1/5 active:translate-y-[1px] px-[12px] py-[8px] font-semibold text-[14px] ${styles}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
