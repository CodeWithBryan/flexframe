import React from 'react';
import * as Icons from '../../../../components/common/Icons';
import { Tabs } from '@mantine/core';
import Overview from './TabsPanel/Overview';

const Members: React.FC = () => {
  return (
    <div className='w-full min-h-[calc(100vh-75px)] p-3 sm:p-5 flex flex-col gap-5'>
      {/* MEMBER PROFILE =======================> */}
      <div className='w-full flex justify-between items-center'>
        {/* left portion  */}
        <div className='flex justify-center items-center gap-3'>
          <Icons.Profile className='w-[72px] h-[72px]' />
          <div className='flex flex-col gap-1'>
            <h2 className='text-[24px] font-medium text-[#25324B]'>
              Waleed Shabbir
            </h2>
            <div className='flex justify-center items-center gap-3'>
              <p className='text-[16px] font-normal text-[#525866]'>
                Member since Jun 12, 2023
              </p>
              <div className='flex justify-center px-2 py-1 rounded-[64px] bg-[#38C793] items-center gap-1'>
                <Icons.check3 className='w-[16px] h-[16px]' />
                <p className='text-[12px] font-inter font-medium text-white-1'>
                  Elite+ subscriber
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right portion  */}
        <div className='flex justify-center items-center gap-5'>
          {userProfileOptions.map((item, index) => {
            return (
              <div
                key={index}
                className='flex justify-center items-center flex-col gap-1'
              >
                <button className='w-[50px] group hover:bg-opacity-80 h-[50px] rounded-full bg-[#F3F4F6] border-[1px] border-[#E2E4E9] flex justify-center items-center'>
                  {item.icon}
                </button>
                <p className='text-[12px] font-normal text-[#0A0D14]'>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/*  TABS =====================> */}
      <Tabs classNames={{}} defaultValue='overview'>
        <Tabs.List
          classNames={{
            list: 'text-[14px] h-[60px] font-semibold text-[#525866]',
          }}
        >
          {tabLists.map((ls, index) => {
            return (
              <Tabs.Tab key={index} value={ls.value}>
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
    icon: <Icons.Message className='w-[20px] group-hover:scale-105 h-[21px]' />,
    name: 'Message',
  },
  {
    icon: <Icons.Sell className='w-[20px] group-hover:scale-105 h-[20px]' />,
    name: 'Sell',
  },
  {
    icon: <Icons.Plus className='w-[18px] group-hover:scale-105 h-[18px]' />,
    name: 'Assign',
  },
  {
    icon: <Icons.CheckIn className='w-[21px] group-hover:scale-105 h-[20px]' />,
    name: 'Check-in',
  },
  {
    icon: (
      <Icons.ThreeDots className='w-[21px] group-hover:scale-105 h-[20px]' />
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
    component: 'Memberships tab content',
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
