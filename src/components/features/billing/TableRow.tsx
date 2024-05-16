import React, { ReactNode, useState } from 'react';
import { Checkbox } from '@mantine/core';
import Typography from '../../common/Typography';
import * as Icons from '../../common/Icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDisclosure } from '@mantine/hooks';
import Input from '../../common/Inputs/Input';
import SingleSelect from '../../common/SingleSelect';
import FillButton from '../../common/Buttons/FillButton';
import CustomModal from '../../common/Modal';

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
  //  STATES ============================>
  const [editOpened, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });
  const [country, setCountry] = useState('');

  // TAKING AND FORMATING CARD INFO =============================>
  const formatCardNumber = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '').substring(0, 16);
    const formattedValue = onlyNumbers.replace(/(\d{4})/g, '$1 ').trim();
    return formattedValue;
  };

  const formatExpiry = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '').substring(0, 8);
    let formattedValue = '';

    if (onlyNumbers.length > 2) {
      formattedValue =
        onlyNumbers.substring(0, 2) + ' / ' + onlyNumbers.substring(2);
    } else {
      formattedValue = onlyNumbers;
    }

    return formattedValue;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    let formattedValue;
    if (name === 'number') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiry') {
      formattedValue = formatExpiry(value);
    } else {
      formattedValue = value;
    }
    setCardInfo({ ...cardInfo, [name]: formattedValue });
  };

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
      {/* EDIT DETAIL MODAL  ======================> */}
      <CustomModal
        title='Edit card details'
        description='The below information is collected for taxes and legal compliance'
        size='lg'
        opened={editOpened}
        onClose={closeEditModal}
      >
        <div className='w-full flex gap-2 sm:gap-3 mt-4 flex-col'>
          {/* cardholder name --------->  */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Cardholder name
            </label>
            <Input
              type='text'
              styles='h-[45px] rounded-[10px]'
              placeholder='Waleed Shabbir'
              value={cardInfo.name}
              onChange={handleInputChange}
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
                type='text'
                name='number'
                value={cardInfo.number}
                onChange={handleInputChange}
                placeholder='0000 0000 0000 0000'
                className='w-full rounded-[10px] text-[14px] select-none focus:outline-none pl-1 pr-2 h-[45px] placeholder:text-[#868C98] text-black-1 font-normal'
              />
              <div className='w-full flex justify-center items-center'>
                <Icons.card2 className='w-[32px] h-[24px]' />
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5'>
            {/*  expiray  --------->  */}
            <div className='flex flex-col gap-1'>
              <label
                htmlFor=''
                className='text-[14px] text-black-3 font-medium'
              >
                Expiry
              </label>
              <Input
                styles='h-[45px] rounded-[10px]'
                type='text'
                placeholder='MM / YY'
                value={cardInfo.expiry}
                onChange={handleInputChange}
                name='expiry'
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
                styles='h-[45px] rounded-[10px]'
                placeholder='***'
                name='cvc'
                value={cardInfo.cvc}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* country select ----------> */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Country
            </label>
            <SingleSelect
              inputSize='h-[45px] rounded-[10px]'
              options={countryOptions}
              value={country}
              setValue={setCountry}
              placeholder='Select Country'
            />
          </div>
          <FillButton styles='w-full mt-2 sm:mt-3 text-white-1 text-[16px] font-medium h-[50px] sm:h-[54px] bg-red-1 rounded-[60px]'>
            Save details
          </FillButton>
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

export default TableRow;

const countryOptions = ['usa', 'uk', 'canada'];
