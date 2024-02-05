import React, { useState } from 'react';
import LeftNavigation from '../../components/Customer/LeftNavigation';

const Dashboard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  return (
    <div className='w-full min-h-screen grid grid-cols-[280px,calc(100%-280px)]'>
      {/* left navigation ------>  */}
      <LeftNavigation option={selectedOption} setOption={setSelectedOption} />
      {/* right portion -------> */}
      <div className='w-full h-full flex flex-col'>
        {/* top navigation ---> */}
      </div>
    </div>
  );
};

export default Dashboard;
