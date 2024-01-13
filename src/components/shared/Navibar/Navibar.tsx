import React from 'react';
import ComponentWrapper from '../wrappers/ComponentWrapper';
import logo from '../../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import Typography from '../Typography/Typography';
import * as Icons from '../../../svg/Icons';
import FillButton from '../Buttons/FillButton';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Navibar: React.FC = () => {
  const location = useLocation();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className='w-full h-[88px] bg-transparent'>
        <ComponentWrapper style='h-full'>
          <div className='w-full h-full flex justify-between items-center'>
            {/* left por =====>  */}
            <div className='flex gap-6 lg:gap-16 justify-center items-center'>
              <img
                src={logo}
                alt='logo'
                className='w-[43px] h-[38px]'
                loading='lazy'
              />
              {/* links ====>  */}
              <div className='hidden md:flex justify-center items-center gap-6 lg:gap-8'>
                {naviLinks.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className='capitalize hover:opacity-80 relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-red-1 hover:after:w-full after:duration-200'
                    >
                      <Typography.smallText
                        styles={`${
                          location.pathname === item.path
                            ? 'text-red-1'
                            : 'text-white-1 '
                        }`}
                      >
                        {item.text}
                      </Typography.smallText>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* right por =======>  */}
            <div className='hidden md:flex justify-center items-center gap-3'>
              <button className='p-[10px] xl:p-[12px] bg-white-1/10 border-[1px] border-white-1/10 active:translate-y-[2px] hover:opacity-80 rounded-full flex justify-center items-center'>
                <Icons.person />
              </button>
              <FillButton styles='bg-red-1 px-[20px] xl:px-[24px] py-[12px] xl:py-[16px] rounded-[60px]'>
                <Typography.mText styles='text-white-1 font-semibold'>
                  Join RP Fitness Today
                </Typography.mText>
              </FillButton>
            </div>
            {/* drawer for small screen ========>  */}
            <div className='md:hidden flex '>
              <button onClick={open}>
                <Icons.hamburger />
              </button>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </React.Fragment>
  );
};

const naviLinks = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '#',
    text: 'products',
  },
  {
    path: '#',
    text: 'about',
  },
  {
    path: '#',
    text: 'membership',
  },
  {
    path: '#',
    text: 'contact us',
  },
];

export default Navibar;
