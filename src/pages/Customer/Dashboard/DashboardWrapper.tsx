import React from 'react';
import LeftNavigation from '../../../components/layout/Customer/LeftNavigation';
import TopNavigation from '../../../components/layout/Customer/TopNavigation';
import { Outlet } from 'react-router-dom';

const DashboardWrapper: React.FC = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 clg:grid-cols-[280px,calc(100%-280px)]'>
      {/* left navigation ------>  */}
      <div className='w-full clg:block hidden'>
        <LeftNavigation />
      </div>
      {/* right portion -------> */}
      <div className='w-full flex justify-center bg-[#F9F9F9] items-center'>
        <div className='w-full h-full flex flex-col'>
          {/* top navigation ---> */}
          <div className='w-full h-[72px] bg-white-1'>
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

export default DashboardWrapper;
