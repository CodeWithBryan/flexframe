import React from 'react';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';
import * as Icons from '../../common/Icons';
import { MdNotificationsNone } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../../../assets/logo.png';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsGrid } from 'react-icons/bs';
import { MdOutlinePriceChange } from 'react-icons/md';
import Typography from '../../common/Typography';
import { NavLink } from 'react-router-dom';
import ProfileDropdown from '../../common/ProfileDropdown';

const TopNavigation: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className='w-full border-b-[1px] border-[#E2E4E9] h-[70px] sm:h-[75px] gap-6 px-3 sm:px-5 flex justify-between items-center bg-white-1'>
        {/* left portion */}
        {/* logo */}
        <img
          src={logo}
          className='w-[40px] sm:w-[44px] clg:hidden block h-[30px] sm:h-[38px] object-fill'
          alt='RP Fitness Logo'
        />

        <div className='clg:block hidden w-full max-w-[500px]'>
          <Input
            classNames={{
              input:
                'h-[40px] rounded-[10px] border-[#E2E4E9] text-[14px] placeholder:text-[#868C98] font-normal',
            }}
            placeholder='Search'
            leftSection={<LuSearch className='text-[20px]' />}
          />
        </div>
        {/* right portion */}
        <div className='flex justify-center items-center gap-4'>
          {/* search */}
          <div className='border-[1px] clg:hidden hover:bg-black-1/5 w-[45px] h-[45px] flex justify-center items-center border-[#E2E4E9] rounded-full'>
            <LuSearch className='text-[22px] text-[#525866]' />
          </div>
          <button className='border-[1px] hover:bg-black-1/5 w-[45px] h-[45px] flex justify-center items-center border-[#E2E4E9] rounded-full lg:rounded-[10px]'>
            <Icons.bag className='w-[22px] h-[22px]' />
          </button>
          {/* notification */}
          <button className='border-[1px] hover:bg-black-1/5 w-[45px] h-[45px] flex justify-center items-center border-[#E2E4E9] rounded-full'>
            <MdNotificationsNone className='text-[27px] text-[#525866]' />
          </button>
          {/* profile */}
          <ProfileDropdown />
          {/* hamburger */}
          <button
            onClick={open}
            className='w-[45px] clg:hidden h-[45px] flex justify-center bg-[#F3F4F6] items-center rounded-full border-[1px] border-[#E2E4E9]'
          >
            <RxHamburgerMenu className='text-[27px] text-[#525866]' />
          </button>
        </div>
      </div>
      {/* drawer for small screen */}
      <Drawer opened={opened} position='right' onClose={close}>
        <div className='w-full flex flex-col items-start'>
          {/* top section */}
          <div className='flex justify-center items-center gap-3'>
            <img
              src={logo}
              className='w-[30px] h-[30px] object-fill'
              alt='RP Fitness Logo'
            />
            <Typography.mText styles='text-black-1 font-bold'>
              RP Fitness
            </Typography.mText>
          </div>
          {/* links */}
          <div className='w-full flex flex-col items-start py-5 gap-2'>
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  [
                    'w-full rounded-md h-[45px] px-3 flex justify-start items-center gap-2',
                    isActive
                      ? 'bg-red-1 hover:bg-red-1 text-white-1'
                      : 'bg-transparent hover:bg-red-1/5 text-[#525866]',
                  ].join(' ')
                }
                end={item.exact}
                onClick={close}
              >
                {item.icon}
                <Typography.mText styles='font-medium'>
                  {item.name}
                </Typography.mText>
              </NavLink>
            ))}
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

const links = [
  {
    name: 'Dashboard',
    icon: <BsGrid className='text-[20px]' />,
    link: '/member/dashboard',
    exact: true,
  },
  {
    name: 'Billing',
    icon: <MdOutlinePriceChange className='text-[20px]' />,
    link: '/member/dashboard/billing',
    exact: false,
  },
];

export default TopNavigation;
