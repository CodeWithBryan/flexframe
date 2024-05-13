import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
}

const OutlineButton: React.FC<Props> = ({
  children,
  styles = 'text-[#525866]',
}: Props) => {
  return (
    <button
      className={`border-[1px] border-white-3 rounded-[60px] hover:bg-black-1/5 active:translate-y-[1px] px-[12px] py-[8px] font-semibold text-[14px] ${styles}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
