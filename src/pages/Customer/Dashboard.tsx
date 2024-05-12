import React from 'react';
import LeftNavigation from '../../components/Customer/LeftNavigation';

const Dashboard: React.FC = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-[280px,calc(100%-280px)]'>
      {/* left navigation ------>  */}
      <LeftNavigation />
      {/* right portion -------> */}
      <div className='w-full h-full flex flex-col bg-zinc-100'>
        {/* top navigation ---> */}
        <div className="w-full h-[72px] bg-white-1 flex justify-between items-center px-4 border-b-2">
          <h1>Search Bar Goes Here</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
