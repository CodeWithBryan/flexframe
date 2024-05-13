import React, { useState } from 'react';
import LeftNavigation from '../../../components/Customer/LeftNavigation';
import TopNavigation from '../../../components/Customer/TopNavigation';
import Billing from './Billing';

const Dashboard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  return (
    <div className='w-full min-h-screen grid grid-cols-1 clg:grid-cols-[280px,calc(100%-280px)]'>
      {/* left navigation ------>  */}
      <div className='w-full clg:block hidden'>
        <LeftNavigation
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      {/* right portion -------> */}
      <div className='w-full h-full flex flex-col'>
        {/* top navigation ---> */}
        <div className='w-full h-[72px] bg-white-1 flex justify-between items-center px-4 border-b-2'>
          <TopNavigation
            option={selectedOption}
            setOption={setSelectedOption}
          />
        </div>
        {/* =======  billing section =======> */}
        {selectedOption === 'Billings' && <Billing />}
      </div>
    </div>
  );
};

export default Dashboard;
