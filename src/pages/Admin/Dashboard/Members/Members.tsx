import React from 'react';
import * as Icons from '../../../../components/common/Icons';
import { Tabs } from '@mantine/core';
import Overview from '../../../../components/features/admin/memberDetails/TabsPanel/Overview';
import MemberShip from '../../../../components/features/admin/memberDetails/TabsPanel/MemberShip';
import { Menu } from '@mantine/core';

const Members: React.FC = () => {
  return (
    <div className='w-full bg-white-1 min-h-[calc(100vh-75px)] flex flex-col gap-5'>
      {/* MEMBER PROFILE =======================> */}
      <div className='w-full p-3 sm:p-5 lg:gap-0 gap-4 flex justify-between items-center'>
        {/* left portion  */}
        <div className='flex justify-center items-center gap-2 lg:gap-3'>
          <Icons.Profile className='w-[45px] sm:w-[55px] lg:w-[72px] h-[45px] sm:h-[55px] lg:h-[72px]' />
          <div className='flex flex-col gap-0 lg:gap-1'>
            <h2 className='text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-[#25324B]'>
              Waleed Shabbir
            </h2>
            <div className='flex sm:flex-row flex-col justify-center items-start sm:items-center gap-1 sm:gap-2 lg:gap-3'>
              <p className='text-[12px] sm:text-[14px] lg:text-[16px] font-normal text-[#525866]'>
                Member since Jun 12, 2023
              </p>
              <div className='flex justify-center px-1 lg:px-2 py-1 rounded-[64px] bg-[#38C793] items-center gap-1'>
                <Icons.check3 className='w-[14px] lg:w-[16px] h-[14px] lg:h-[16px]' />
                <p className='text-[10px] lg:text-[12px] font-inter font-medium text-white-1'>
                  Elite+ subscriber
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right portion  */}
        <div className='hidden md:flex justify-center items-center gap-2 lg:gap-5'>
          {userProfileOptions.map((item, index) => {
            return (
              <div
                key={index}
                className='flex justify-center items-center flex-col gap-1'
              >
                <button className='w-[40px] lg:w-[50px] group hover:bg-opacity-80 h-[40px] lg:h-[50px] rounded-full bg-[#F3F4F6] border-[1px] border-[#E2E4E9] flex justify-center items-center'>
                  {item.icon}
                </button>
                <p className='text-[12px] font-normal text-[#0A0D14]'>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
        {/* menu for small screen ---> */}
        <div className='md:hidden block'>
          <Menu>
            <div className='flex justify-center items-center flex-col gap-1'>
              <Menu.Target>
                <button className='w-[40px] lg:w-[50px] group hover:bg-opacity-80 h-[40px] lg:h-[50px] rounded-full bg-[#F3F4F6] border-[1px] border-[#E2E4E9] flex justify-center items-center'>
                  <Icons.ThreeDots className='w-[18px] lg:w-[21px] group-hover:scale-105 h-[18px] lg:h-[20px]' />
                </button>
              </Menu.Target>
              <p className='text-[12px] font-normal text-[#0A0D14]'>More</p>
            </div>
            <Menu.Dropdown>
              <Menu.Label>More</Menu.Label>
              {userProfileOptions.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <div
                      className={`w-full ${
                        index + 1 === userProfileOptions.length
                          ? 'hidden'
                          : 'flex'
                      }  justify-start items-center gap-3`}
                    >
                      {item.icon}
                      <p className='text-[12px] font-normal text-[#0A0D14]'>
                        {item.name}
                      </p>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </div>
        {/* menu for small screen ---> */}
      </div>
      {/*  TABS =====================> */}
      <Tabs defaultValue='overview'>
        <Tabs.List
          classNames={{
            list: 'min-h-[60px] font-semibold text-[#525866]',
          }}
        >
          {tabLists.map((ls, index) => {
            return (
              <Tabs.Tab
                classNames={{ tabLabel: 'text-[12px] sm:text-[14px]' }}
                key={index}
                value={ls.value}
              >
                {ls.label}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>
        {tabLists.map((panel, index) => {
          return (
            <Tabs.Panel key={index} value={panel.value}>
              {panel.component}
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </div>
  );
};

const userProfileOptions = [
  {
    icon: (
      <Icons.Message className='w-[18px] lg:w-[20px] group-hover:scale-105 h-[18px] lg:h-[21px]' />
    ),
    name: 'Message',
  },
  {
    icon: (
      <Icons.Sell className='w-[18px] lg:w-[20px] group-hover:scale-105 h-[18px] lg:h-[20px]' />
    ),
    name: 'Sell',
  },
  {
    icon: (
      <Icons.Plus className='w-[16px] lg:w-[18px] group-hover:scale-105 h-[16px] lg:h-[18px]' />
    ),
    name: 'Assign',
  },
  {
    icon: (
      <Icons.CheckIn className='w-[19px] lg:w-[21px] group-hover:scale-105 h-[19px] lg:h-[20px]' />
    ),
    name: 'Check-in',
  },
  {
    icon: (
      <Icons.ThreeDots className='w-[18px] lg:w-[21px] group-hover:scale-105 h-[18px] lg:h-[20px]' />
    ),
    name: 'More',
  },
];

const tabLists = [
  {
    label: 'Overview',
    value: 'overview',
    component: <Overview />,
  },
  {
    label: 'Workout',
    value: 'workout',
    component: 'Workout tab content',
  },
  {
    label: 'Meal plan',
    value: 'meal-plan',
    component: 'Meal plan tab content',
  },
  {
    label: 'Memberships',
    value: 'memberships',
    component: <MemberShip />,
  },
  {
    label: 'Purchases',
    value: 'purchases',
    component: 'Purchases tab content',
  },
  {
    label: 'Documents',
    value: 'documents',
    component: 'Documents tab content',
  },
  {
    label: 'Notes',
    value: 'notes',
    component: 'Notes tab content',
  },
];

export default Members;
