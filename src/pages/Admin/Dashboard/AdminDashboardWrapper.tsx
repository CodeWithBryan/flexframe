import React from 'react';
import LeftNavigation from '../../../components/layout/Customer/LeftNavigation';
import TopNavigation from '../../../components/layout/Customer/TopNavigation';
import { Outlet } from 'react-router-dom';
import { BsGrid } from 'react-icons/bs';
import { MdOutlinePriceChange } from 'react-icons/md';

const DashboardWrapper: React.FC = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 clg:grid-cols-[280px,calc(100%-280px)]'>
      {/* left navigation ------>  */}
      <div className='w-full clg:block hidden'>
        <LeftNavigation data={leftNavigationLink} />
      </div>
      {/* right portion -------> */}
      <div className='w-full flex justify-center bg-[#F9F9F9] items-center'>
        <div className='w-full h-full flex flex-col'>
          {/* top navigation ---> */}
          <div className='w-full'>
            <TopNavigation />
          </div>

          <div className='flex-grow flex justify-center items-center'>
            <div className='w-full max-w-[1200px]'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const leftNavigationLink = [
  {
    name: 'Dashboard',
    icon: <BsGrid className='text-[20px]' />,
    link: '/admin/dashboard',
  },
  {
    name: 'Members',
    icon: <MdOutlinePriceChange className='text-[20px]' />,
    link: '/admin/dashboard/members',
  },
];

export default DashboardWrapper;
