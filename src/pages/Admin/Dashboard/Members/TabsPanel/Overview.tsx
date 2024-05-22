import React from 'react';
import * as Icons from '../../../../../../src/components/common/Icons';
import OutlineButton from '../../../../../components/common/Buttons/OutlineButton';
import { Timeline, Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';

const Overview: React.FC = () => {
  return (
    <div className='w-full p-4 bg-[#F9F9F9] grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 sm:gap-4'>
      {/* LEFT PORTION ==================> */}
      <div className='w-full flex flex-col gap-4'>
        {/* top-statistics ----> */}
        <div className='w-full bg-white-1 p-4 border-[1px] gap-3 flex flex-wrap justify-between items-center border-[#E2E4E9] rounded-[16px]'>
          {generalStatistics.map((sta, index) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-1 sm:gap-2 items-start'
              >
                <p className='text-[12px] text-[#0A0D14] font-normal'>
                  {sta.type}
                </p>
                <h2 className='text-[20px] sm:text-[24px] font-medium text-[#0A0D14] font-inter'>
                  {sta.value}
                </h2>
              </div>
            );
          })}
        </div>
        {/* Attendence bar chart -------> */}
        <div className='w-full flex p-4 gap-4 flex-col border-[1px] border-[#E2E4E9] rounded-[16px] bg-white-1'>
          <p className='text-[16px] text-[#0A0D14] font-medium'>Attendance</p>
          <BarChart
            classNames={{
              tooltip:
                'bg-white-1 p-3 rounded-[20px] border-[1px] border-[#E2E4E9]',
            }}
            h={280}
            data={attendenceData}
            dataKey='month'
            series={[{ name: 'attendence', color: '#FFB8BA' }]}
          />
        </div>
        {/* Notes + Documents --------> */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* notes  */}
          <div className='w-full bg-white-1 p-4 border-[1px] flex flex-col gap-3 border-[#E2E4E9] rounded-[16px]'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>Notes</p>
              <button className='flex hover:bg-white-3 justify-center px-2 py-[2px] rounded-[64px] bg-white-1 border-[1px] border-[#E2E4E9] items-center gap-1 sm:gap-2'>
                <Icons.Plus className='w-[10px] sm:w-[12px] h-[10px] sm:h-[12px]' />
                <p className='text-[12px] sm:text-[14px] text-[#525866] font-medium'>
                  Add Note
                </p>
              </button>
            </div>
            {/* notes */}
            {[0, 1].map((notes, index) => {
              return (
                <div key={index} className='w-full flex flex-col gap-3'>
                  <div className='w-full flex flex-col gap-1 rounded-[12px] noteBg p-3'>
                    <h3 className='text-[14px] font-semibold text-[#0A0D14]'>
                      Fit & Fabulous Fridays
                    </h3>
                    <p className='text-[12px] font-normal text-[#20232D]'>
                      19 Dec, 2023 01:23 AM
                    </p>
                    <p className='text-[14px] font-normal text-[#0A0D14]'>
                      Energize your weekend with a mix of cardio, strength, and
                      flexibility. All levels welcome!
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Documents  */}
          <div className='w-full bg-white-1 p-4 border-[1px] flex flex-col gap-5 border-[#E2E4E9] rounded-[16px]'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>
                Documents
              </p>
              <button className='flex hover:bg-white-3 justify-center px-2 py-[2px] rounded-[64px] bg-white-1 border-[1px] border-[#E2E4E9] items-center gap-1 sm:gap-2'>
                <Icons.Plus className='w-[10px] sm:w-[12px] h-[10px] sm:h-[12px]' />
                <p className='text-[12px] sm:text-[14px] text-[#525866] font-medium'>
                  Upload
                </p>
              </button>
            </div>
            {/* files  */}
            <div className='w-full flex flex-col gap-5'>
              {[0, 1].map((fil, index) => {
                return (
                  <div
                    key={index}
                    className='w-full flex justify-between items-center'
                  >
                    <div className='flex gap-2 justify-center items-center'>
                      <img
                        src='/assets/pdf.svg'
                        className='w-[34px] h-[34px] object-fill'
                        alt=''
                      />
                      <div className='flex flex-col'>
                        <p className='text-[14px] font-inter font-normal text-[#0A0D14]'>
                          File.name.pdf
                        </p>
                        <p className='text-[12px] font-inter font-normal text-[#525866]'>
                          2.3 MB
                        </p>
                      </div>
                    </div>
                    <Icons.Download className='w-[29px] cursor-pointer hover:opacity-80 h-[30px]' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT PORTION ==================> */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-full md:max-w-full max-w-[500px] h-full flex flex-col gap-4 sm:gap-5'>
          {/* information ---> */}
          <div className='w-full gap-3 sm:gap-4 flex flex-col bg-white-1 border-[1px] border-[#E2E4E9] rounded-[16px] p-4'>
            <p className='text-[14px] font-semibold text-[#868C98]'>
              Information
            </p>
            <div className='w-full flex flex-wrap justify-between gap-3 items-center '>
              {userProfile.size.map((item, index) => {
                return (
                  <div key={index} className='flex sm:gap-0 gap-1 flex-col'>
                    <p className='text-[14px] sm:text-[16px] font-normal text-[#525866]'>
                      {item.type}
                    </p>
                    <h3 className='text-[18px] sm:text-[20px] font-normal text-[#0A0D14]'>
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
            {userProfile.otherInformation.map((info, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col h-[55px] sm:h-[60px] ${
                    index + 1 === userProfile.otherInformation.length
                      ? 'border-none'
                      : 'border-b-[1px] border-[#E2E4E9]'
                  } `}
                >
                  <p className='text-[12px] text-[#868C98] font-normal'>
                    {info.type}
                  </p>
                  <p className='text-[14px] font-medium text-[#0A0D14]'>
                    {info.value}
                  </p>
                </div>
              );
            })}
          </div>
          {/* membership widget -----> */}
          <div className='w-full gap-4 flex flex-col bg-white-1 border-[1px] border-[#E2E4E9] rounded-[16px] p-4'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-[16px] font-semibold text-[#0A0D14]'>
                Memberships
              </p>
              <button className='flex hover:bg-white-3 justify-center w-[20px] h-[20px] rounded-full border-[1px] border-[#E2E4E9] items-center'>
                <Icons.DownArrow className='w-[12px] h-[8px]' />
              </button>
            </div>
            <div className='w-full flex justify-between items-start'>
              <div className='flex justify-center items-start gap-2'>
                <img
                  src='/assets/elite.png'
                  className='w-[32px] h-[32px]'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h2 className='text-[18px] font-semibold text-[#121111]'>
                    Elite Plan
                  </h2>
                  <p className='text-[14px] text-[#525866] font-normal'>
                    $45 / month
                  </p>
                </div>
              </div>
              <div className='flex justify-center rounded-[60px] px-[6px] py-[3px] bg-[#38C793] items-center gap-1'>
                <Icons.check3 className='w-[18px] h-[18px]' />
                <p className='text-[12px] font-medium text-white-1 font-inter'>
                  Active
                </p>
              </div>
            </div>
            <div className='w-full flex justify-between rounded-[8px] bg-red-1/10 px-2 py-[3px] items-center'>
              <p className='text-[12px] font-normal text-[#B61F24]'>
                Next payment on Jan 18, 2024.
              </p>
              <Icons.ExclimationSign className='w-[16px] h-[16px]' />
            </div>
            <OutlineButton styles='h-[40px]'>Manage membership</OutlineButton>
          </div>
          {/* Activity ----------> */}
          <div className='w-full flex flex-col gap-4'>
            <p className='text-[16px] font-semibold text-[#0A0D14]'>Activity</p>
            <Timeline color='#E2E4E9' active={2} bulletSize={11} lineWidth={1}>
              {activityData.map((item, index) => {
                return (
                  <Timeline.Item
                    key={index}
                    className='text-[14px] font-normal text-[#0A0D14]'
                    bullet={<div></div>}
                    title={item.title}
                  >
                    <Text className='text-[18px] font-medium text-[#121111]'>
                      {item.des}
                    </Text>
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

const generalStatistics = [
  {
    type: 'Total memberships',
    value: '20',
  },
  {
    type: 'Total refunds',
    value: '1',
  },
  {
    type: 'Total cancellations',
    value: '1',
  },
  {
    type: 'Total spending',
    value: '$300.00',
  },
];

const userProfile = {
  size: [
    {
      type: 'Height',
      value: '6.0',
    },
    {
      type: 'Weight',
      value: '75 kg',
    },
    {
      type: 'Age',
      value: '23 yrs',
    },
    {
      type: 'Check-in code',
      value: '0815 ',
    },
  ],
  otherInformation: [
    {
      type: 'Email',
      value: 'iamwaleedshabbir@gmail.com',
    },
    {
      type: 'Phone number',
      value: '+923039626640',
    },
    {
      type: 'Gender',
      value: 'Male',
    },
    {
      type: 'Date of birth',
      value: '11 Mar, 1997',
    },
    {
      type: 'Address',
      value: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
    },
  ],
};

const activityData = [
  {
    title: 'December 2023',
    des: 'Contact added to the list',
  },
  {
    title: 'December 2023',
    des: 'Member created',
  },
  {
    title: 'December 2023',
    des: 'Contact added to the list',
  },
];

const attendenceData = [
  { month: 'January', attendence: 1200 },
  { month: 'February', attendence: 1900 },
  { month: 'March', attendence: 400 },
  { month: 'April', attendence: 1000 },
  { month: 'May', attendence: 800 },
  { month: 'June', attendence: 750 },
  { month: 'March', attendence: 400 },
  { month: 'April', attendence: 1000 },
  { month: 'May', attendence: 800 },
  { month: 'June', attendence: 750 },
  { month: 'May', attendence: 800 },
  { month: 'March', attendence: 400 },
];

export default Overview;
