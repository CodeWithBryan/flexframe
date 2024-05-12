import React from 'react';
import ComponentWrapper from '../wrappers/ComponentWrapper';
import logo from '../../../assets/logo.png';
import * as Icons from '../../../svg/Icons';
import Typography from '../Typography/Typography';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className='w-full bg-[#121111] pt-8'>
      <ComponentWrapper>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full grid xl:gap-0 gap-y-8 gap-x-4 grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr,1fr] lg:grid-cols-[2fr,1fr,1fr,1fr]'>
            {/* social links ---->  */}
            <div className='w-full sm:col-span-1 col-span-2 flex flex-col gap-3 sm:gap-5 lg:gap-8 items-start'>
              <img
                src={logo}
                alt='logo'
                className='w-[40px] sm:w-[43px] h-[30px] sm:h-[38px]'
                loading='lazy'
              />
              <div className='w-full flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-[14px]'>
                {footerData.socialBannerData.addresses.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='flex justify-center items-center gap-2'
                    >
                      {item.icon}
                      <Typography.mText styles='w-full max-w-[370px] leading-[30px] font-inter text-white-2 font-normal'>
                        {item.text}
                      </Typography.mText>
                    </div>
                  );
                })}
              </div>
              {/* social icons --> */}
              <div className='flex justify-center items-center gap-3'>
                {footerData.socialBannerData.social.map((item, index) => {
                  return (
                    <Link key={index} to={item.link} className='hover:opacity-80'>
                      {item.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* pages links ----->   */}
            {footerData.links.map((item, index) => {
              return (
                <div key={index} className='w-full flex flex-col items-start'>
                  <p className='text-[20px] text-white-1 font-inter font-bold capitalize mb-2 sm:mb-3'>
                    {item.category}
                  </p>
                  <div className='flex flex-col gap-[8px] sm:gap-[10px]'>
                    {item.links.map((ls, index) => {
                      return (
                        <Link
                          key={index}
                          to={ls.path}
                          className='hover:opacity-80'
                        >
                          <Typography.mText styles='text-white-2 font-normal font-inter'>
                            {ls.name}
                          </Typography.mText>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* line --->  */}
          <div className='w-full h-[1px] bg-white-2/20 my-6'></div>
          {/* subscribe to our news letter ------>  */}
          <div className='w-full flex md:flex-row flex-col  justify-between xl:gap-0 gap-x-4 gap-y-6 items-center py-1'>
            {/* left por --->  */}
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] text-white-1 font-bold font-inter'>
                Subscribe to our newsletter
              </p>
              <Typography.text styles='font-normal text-white-2 font-inter'>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </Typography.text>
            </div>
            {/* right por ---->  */}
            <div className='max-w-[380px] lg:max-w-[450px] w-full h-[50px] sm:h-[55px] lg:h-[60px] grid-cols-[1fr,120px] grid sm:grid-cols-[1fr,130px] lg:grid-cols-[1fr,150px] rounded-[10px] sm:rounded-[60px] bg-[#292828]'>
              <input
                type='email'
                placeholder='Enter your email'
                className='h-full w-full bg-[#292828] focus:outline-none rounded-l-[60px] sm:rounded-l-[60px] text-white-2 text-[16px] sm:text-[18px] font-normal font-inter pl-3 sm:pl-5 pr-2'
              />
              <button className='w-full h-full hover:opacity-80 bg-red-1 rounded-r-[10px] sm:rounded-r-[60px]'>
                <Typography.mText styles='font-inter tracking-wider text-white-2 font-semibold'>
                  Subscribe
                </Typography.mText>
              </button>
            </div>
          </div>
          {/* line --->  */}
          <div className='w-full h-[1px] bg-white-2/20 my-6'></div>
          {/* copyright ----->  */}
          <Typography.text styles='font-inter font-normal text-white-2 pb-6'>
            © 2024 RP Fitness. All Rights Reserved
          </Typography.text>
        </div>
      </ComponentWrapper>
    </div>
  );
};

const footerData = {
  socialBannerData: {
    addresses: [
      {
        icon: <Icons.Search stroke='#CDD0D5' />,
        text: 'info@rnpfitness.com',
      },
      {
        icon: <Icons.call stroke='#CDD0D5' />,
        text: '+1 (407)-920-9863',
      },
      {
        icon: <Icons.location stroke='#CDD0D5' />,
        text: '885 S Charles Richard Beall Blvd. DeBary, FL 32713, USA',
      },
    ],
    social: [
      {
        icon: <Icons.faceBook
          fill='#ffffff'
          stroke='none'
          className='w-[23px] h-[23px]'
        />,
        link: 'https://www.facebook.com/rnpfitnessgymm/',
      },
      {
        icon: <Icons.insta3 className='w-[32px] h-[32px]' />,
        link: 'https://www.instagram.com/ifbbproryanpateracki/',
      },
    ],
  },

  links: [
    {
      category: 'Useful links',
      links: [
        {
          path: '#',
          name: 'Home',
        },
        {
          path: '#',
          name: 'My account',
        },
        {
          path: '#',
          name: 'Become a partner',
        },
        {
          path: '#',
          name: 'Start a Memebership',
        },
        {
          path: '#',
          name: 'Career',
        },
      ],
    },
    {
      category: 'Company',
      links: [
        {
          path: '#',
          name: 'About us',
        },
        {
          path: '#',
          name: 'Our trainers',
        },
        {
          path: '#',
          name: 'Services',
        },
        {
          path: '#',
          name: 'Careers',
        },
      ],
    },
    {
      category: 'Community',
      links: [
        {
          path: '#',
          name: 'Testimonials',
        },
        {
          path: '#',
          name: 'Gallery',
        },
        {
          path: '#',
          name: 'Blogs',
        },
        {
          path: '#',
          name: 'Help & Support',
        },
      ],
    },
  ],
};

export default Footer;
