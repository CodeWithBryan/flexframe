import React from 'react';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';
import * as Icons from '../common/Icons';
import { MdNotificationsNone } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../../assets/logo.png';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Typography from '../common/Typography';
import { BillingNavigation } from '../../data/billing';

interface Props {
  option: string;
  setOption: any;
}

const TopNavigation: React.FC<Props> = ({ option, setOption }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className='w-full border-b-[1px] border-[#E2E4E9]  h-[65px] sm:h-[75px] gap-6 px-3 sm:px-5 flex justify-between items-center bg-white-1'>
        {/* left por --> */}
        {/* logo  ---> */}
        <img
          src={logo}
          className='w-[40px] sm:w-[44px] clg:hidden block h-[30px] sm:h-[38px] object-fill'
        />

        <div className='clg:block hidden w-full max-w-[500px]'>
          <Input
            classNames={{
              input:
                'h-[40px] rounded-[10px] border-[#E2E4E9] text-[14px] placeholder:text-[#868C98] font-normal',
            }}
            placeholder='Your email'
            leftSection={<LuSearch className='text-[20px]' />}
          />
        </div>
        {/* right portion ---->  */}
        <div className='flex justify-center items-center gap-3 sm:gap-4'>
          {/* search ----> */}
          <div className='border-[1px] clg:hidden hover:bg-black-1/5 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center border-[#E2E4E9] rounded-full'>
            <LuSearch className='text-[18px] sm:text-[22px] text-[#525866]' />
          </div>
          <button className='border-[1px] hover:bg-black-1/5 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center border-[#E2E4E9] rounded-full lg:rounded-[10px]'>
            <Icons.bag className='w-[20px] sm:w-[22px] h-[20px] sm:h-[22px]' />
          </button>
          {/* notification ---> */}
          <button className='border-[1px] hover:bg-black-1/5 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center border-[#E2E4E9] rounded-full'>
            <MdNotificationsNone className='text-[22px] sm:text-[27px] text-[#525866]' />
          </button>
          {/* profile ---> */}
          <button className='hover:opacity-80'>
            <Icons.profile className='w-[35px] sm:w-[43px] h-[35px] sm:h-[43px]' />
          </button>
          {/* hamburger --->  */}
          <button
            onClick={open}
            className='w-[35px] sm:w-[45px] clg:hidden h-[35px] sm:h-[45px] flex justify-center bg-[#F3F4F6] items-center rounded-full border-[1px] border-[#E2E4E9]'
          >
            <RxHamburgerMenu className='text-[22px] sm:text-[27px] text-[#525866]' />
          </button>
        </div>
      </div>
      {/* drawer for small screen --------> */}
      <Drawer opened={opened} position='right' onClose={close}>
        <div className='w-full flex flex-col items-start'>
          {/* top section */}
          <div className='flex justify-center items-center gap-3'>
            <img src={logo} className='w-[30px] h-[30px] object-fill' alt='' />
            <Typography.mText styles='text-black-1 font-bold'>
              RP Fitness
            </Typography.mText>
          </div>
          {/* links ------>  */}

          <div className='w-full flex flex-col items-start py-5 gap-2'>
            {BillingNavigation.map((item, index) => {
              return (
                <button
                  onClick={() => setOption(item.name)}
                  key={index}
                  className={`w-full ${
                    option === item.name
                      ? 'bg-red-1 hover:bg-red-1 text-white-1'
                      : 'bg-transparent hover:bg-red-1/5 text-[#525866]'
                  }  rounded-md h-[45px] px-3 flex justify-start items-center gap-2`}
                >
                  {item.icon}
                  <Typography.mText styles=' font-medium'>
                    {item.name}
                  </Typography.mText>
                </button>
              );
            })}
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default TopNavigation;