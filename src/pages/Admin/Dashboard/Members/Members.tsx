import React from 'react';
import FillButton from '../../../../components/common/Buttons/FillButton';
import OutlineButton from '../../../../components/common/Buttons/OutlineButton';
import { adminDashboardData } from '../../../../data/adminDashboard';
import StatsWidget from '../../../../components/common/StatsWidget';
import SearchInput from '../../../../components/common/Inputs/SearchInput';

const Members: React.FC = () => {
  return (
    <div className='w-full bg-[#F9F9F9] p-4 flex flex-col'>
      {/* TOP SECTION --------> */}
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <h2 className='text-[24px] text-[#0A0D14] font-semibold'>Members</h2>
          <p className='text-[14px] font-normal text-[#525866]'>
            View, add, edit and delete your client's details.
          </p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <OutlineButton styles='text-[14px] font-semibold px-3 py-2 text-[#525866]'>
            Export
          </OutlineButton>
          <FillButton styles='bg-[#B61F24] rounded-[60px] text-[14px] font-semibold px-3 py-2 text-white-1'>
            Add member
          </FillButton>
        </div>
      </div>
      {/* STATISTICS WIDEGTS ---------> */}
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6'>
        {adminDashboardData.generalStatistics.map((item, index) => {
          return (
            <StatsWidget key={index} type={item.type} value={item.value} />
          );
        })}
      </div>
      {/*  */}
    </div>
  );
};

export default Members;
