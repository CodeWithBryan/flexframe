import React, { ReactNode, useState } from 'react';
import { Checkbox } from '@mantine/core';
import Typography from '../../shared/Typography/Typography';
import * as Icons from '../../../svg/Icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDisclosure } from '@mantine/hooks';
import Input from '../../shared/Inputs/Input';
import SingleSelect from '../../shared/Select/SingleSelect';
import FillButton from '../../shared/Buttons/FillButton';
import CustomModal from '../../shared/Popups/Modal';

interface Props {
  planeName: {
    img: string;
    name: string;
  };
  method: {
    img: ReactNode;
    number: string;
  };
  dateAndTime: string;
  expireDate: string;
  amount: string;
  status: string;
}

const TableRow: React.FC<Props> = ({
  planeName,
  method,
  dateAndTime,
  expireDate,
  amount,
  status,
}: Props) => {
  const [editOpened, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div
        className={`w-full min-w-[820px] overflow-auto min-h-[60px] grid bg-white-1 px-3 grid-cols-[30px,1fr,1fr,1fr,1fr,1fr,1fr,20px] justify-center items-center`}
      >
        {/* check box  */}
        <div className='w-full flex justify-start items-center'>
          <Checkbox size='xs' color='#B61F24' />
        </div>
        {/* plane name ---> */}
        <div className='w-full flex justify-start items-center gap-1'>
          <img src={planeName.img} className='w-[35px] h-[35px]' alt='' />
          <Typography.smallText styles='text-black-3 font-normal'>
            {planeName.name}
          </Typography.smallText>
        </div>
        {/* date and time --->  */}
        <Typography.smallText styles='text-[#525866] w-full flex justify-start font-normal'>
          {dateAndTime}
        </Typography.smallText>
        {/* expire date --->  */}
        <Typography.smallText styles='text-[#525866] w-full flex justify-start font-normal'>
          {expireDate}
        </Typography.smallText>
        {/* amount --->  */}
        <Typography.smallText styles='text-[#525866] w-full flex justify-start font-normal'>
          {amount}
        </Typography.smallText>
        {/* payement metode */}
        <div className='flex justify-start items-center w-full gap-2'>
          {method.img}
          <Typography.smallText styles='text-[#525866] font-normal'>
            {method.number}
          </Typography.smallText>
        </div>
        {/* status  */}
        <div className='w-full flex justify-start items-center'>
          {status === 'active' ? (
            <div className='flex justify-center items-center gap-1 border-[1px] border-white-3 rounded-[60px] px-[8px] py-[4px]'>
              <Icons.fillCheck className='w-[18px] h-[18px]' fill='#38C793' />
              <Typography.xsText styles='text-[#525866] font-medium'>
                Active
              </Typography.xsText>
            </div>
          ) : (
            <div className='flex justify-center items-center gap-1 border-[1px] border-white-3 rounded-[60px] px-[8px] py-[4px]'>
              <Icons.expired className='w-[18px] h-[18px]' />
              <Typography.xsText styles='text-[#525866] font-medium'>
                Expired
              </Typography.xsText>
            </div>
          )}
        </div>
        {/* edit row ---->  */}
        <div className='flex justify-center items-center'>
          <BsThreeDotsVertical
            onClick={openEditModal}
            className='text-[16px] hover:opacity-80 cursor-pointer text-[#525866]'
          />
        </div>
      </div>
      {/* Edit detail modal ====================> */}
      <CustomModal
        title='Edit card details'
        description='The below information is collected for taxes and legal compliance'
        size='lg'
        opened={editOpened}
        onClose={closeEditModal}
      >
        <div className='w-full flex gap-3 mt-4 flex-col'>
          {/* cardholder name --------->  */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Cardholder name
            </label>
            <Input
              type='text'
              placeholder='Waleed Shabbir'
              value=''
              onChange={() => {}}
              name='name'
            />
          </div>
          {/* card number --------> */}
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='cardNumber'
              className='text-[14px] text-black-3 font-medium'
            >
              Card Number
            </label>
            <div className='w-full border-[1px] px-2 rounded-[10px] border-white-3 grid grid-cols-[30px,1fr,30px]'>
              <div className='w-full flex justify-center items-center'>
                <Icons.card1 className='w-[20px] h-[20px]' />
              </div>
              <input
                type='number'
                name='cardNumber'
                maxLength={16}
                placeholder='0000 0000 0000 0000'
                className='w-full text-[14px] select-none focus:outline-none pl-1 pr-2 h-[45px] placeholder:text-[#868C98] text-black-1 font-normal'
              />
              <div className='w-full flex justify-center items-center'>
                <Icons.card2 className='w-[32px] h-[24px]' />
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-2 gap-5'>
            {/*  expiray  --------->  */}
            <div className='flex flex-col gap-1'>
              <label
                htmlFor=''
                className='text-[14px] text-black-3 font-medium'
              >
                Expiry
              </label>
              <Input
                type='number'
                placeholder='MM/YY'
                value=''
                onChange={() => {}}
                name='expiary'
              />
            </div>
            {/*  CVC  --------->  */}
            <div className='flex flex-col gap-1'>
              <label
                htmlFor=''
                className='text-[14px] text-black-3 font-medium'
              >
                CVC
              </label>
              <Input
                type='number'
                placeholder='***'
                value=''
                onChange={() => {}}
                name='expiary'
              />
            </div>
          </div>
          {/* country select ----------> */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Country
            </label>
            <SingleSelect
              name='country'
              options={countryOptions}
              value=''
              setValue={() => {}}
              placeholder='Select Country'
            />
          </div>
          <FillButton styles='w-full mt-3 text-white-1 text-[16px] font-medium h-[54px] bg-red-1 rounded-[60px]'>
            Save details
          </FillButton>
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

export default TableRow;

const countryOptions = ['usa', 'uk', 'canada'];
