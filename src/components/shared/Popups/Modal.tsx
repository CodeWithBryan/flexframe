import React, { ReactNode } from 'react';
import { Modal } from '@mantine/core';
import * as Icons from '../../../svg/Icons';

interface Props {
  size: string;
  title: string;
  description?: string;
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CustomModal: React.FC<Props> = ({
  size,
  title,
  children,
  description,
  opened,
  onClose,
}: Props) => {
  return (
    <Modal
      classNames={{
        title: 'text-[20px] font-semibold text-[#121111]',
        header: 'min-h-fit pb-0',
        content: 'p-1 rounded-[18px]',
      }}
      opened={opened}
      onClose={onClose}
      size={size}
      centered
      closeButtonProps={{
        icon: (
          <div className='min-w-[40px] mr-3 h-[40px] border-[1px] border-[#E2E4E9] rounded-full flex justify-center items-center'>
            <Icons.cross className='w-[12px] h-[12px]' />
          </div>
        ),
      }}
      title={title}
    >
      <p className='text-[14px] text-black-3 font-normal'>{description}</p>
      {children}
    </Modal>
  );
};

export default CustomModal;