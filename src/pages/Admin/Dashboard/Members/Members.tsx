import React from 'react';
import FillButton from '../../../../components/common/Buttons/FillButton';
import OutlineButton from '../../../../components/common/Buttons/OutlineButton';
import { adminDashboardData } from '../../../../data/adminDashboard';
import StatsWidget from '../../../../components/common/StatsWidget';
import SearchInput from '../../../../components/common/Inputs/SearchInput';
import * as Icons from '../../../../components/common/Icons';
import SingleSelect from '../../../../components/common/SingleSelect';
import TableHeader from '../../../../components/features/customer/billing/TableHeader';
import { InvoiceTable } from '../../../../data/billing';
import TableRow from '../../../../components/features/admin/members/TableRow';
import { MembersData } from '../../../../data/members';

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
      {/* FILTER -----> */}
      <div className='w-full my-6 grid grid-cols-1 md:grid-cols-[1fr,1.8fr] md:gap-y-0 gap-y-4 gap-x-3 items-center'>
        <SearchInput
          placeholder='Search by name, email or phone number...'
          size='w-full max-w-[400px] md:max-w-full rounded-[60px]  h-[50px]'
        />
        <div className='w-full flex flex-wrap justify-end items-center gap-2'>
          <button className='flex border-[1px] border-[#E2E4E9] bg-white-1 hover:bg-black-1/5 px-[14px] h-[45px] gap-2 rounded-[60px] justify-center items-center'>
            <Icons.date className='w-[18px] h-[19px]' />
            <p className='text-[14px] font-medium text-[#525866]'>Date</p>
          </button>
          <SingleSelect
            inputSize='w-[180px] h-[45px] rounded-[60px]'
            options={memberOptions}
            defaultValue='All Members'
            placeholder='All members'
          />
          <SingleSelect
            inputSize='w-[230px] h-[45px] rounded-[60px]'
            options={memberShipOptions}
            defaultValue='Any active membership'
            placeholder='Any active membership'
          />
        </div>
      </div>
      {/* MEMBERS TABLE -----> */}
      <div className='w-full flex bg-transparent csm:bg-white-1 flex-col border-[0px] csm:border-[1px] overflow-hidden csm:border-white-3 rounded-[10px]'>
        <div className='w-full overflow-auto'>
          {/* table header --->  */}
          <TableHeader
            cols='grid-cols-[30px,1fr,1fr,.8fr,.8fr,.8fr,1fr,30px]'
            height='h-[60px]'
            headers={MembersData.membersTable.header}
            width='min-w-[1080px]'
          />
          {/* table rows --->  */}
          <div
            className={`w-full flex flex-col ${
              InvoiceTable.rowsData.length < 9 ? 'h-fit' : 'h-[350px] '
            } `}
          >
            {MembersData.membersTable.rowsData.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  status={row.status}
                  name={row.name}
                  joinedDate={row.joinDate}
                  mobileNumber={row.mobileNumber}
                  email={row.email}
                  spending={row.speding}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const memberOptions = [
  'All members',
  'Active members',
  'Inactive',
  'Suspended',
  'Premium Member',
  'Tuition Fee',
  'Phone Bill',
];

const memberShipOptions = [
  'Any active membership',
  'No active membership',
  'Standard',
  'Elite',
  'Elite+',
];

export default Members;
