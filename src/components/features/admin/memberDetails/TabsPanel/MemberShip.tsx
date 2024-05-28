import React from 'react';
import Typography from '../../../../../components/common/Typography';
import FillButton from '../../../../../components/common/Buttons/FillButton';
import OutlineButton from '../../../../../components/common/Buttons/OutlineButton';
import * as Icons from '../../../../../../src/components/common/Icons';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';
import TableRow from '../../../../../components/features/customer/billing/TableRow';
import TableHeader from '../../../../../components/features/customer/billing/TableHeader';
import RowForSmallScreen from '../../../../../components/features/customer/billing/RowForSmallScreen';
import { InvoiceTable } from '../../../../../data/billing';

const MemberShip: React.FC = () => {
  return (
    <div className='w-full py-4 px-6 bg-[#F9F9F9] gap-4 flex flex-col'>
      {/* MEMBERSHIP WIDGET ---------->    */}
      <div className='w-full h-full flex flex-col bg-white-1 rounded-[16px] border-[1px] border-white-3'>
        {/* header ->  */}
        <div className='w-full h-[50px] sm:h-[70px] border-b-[1px] border-white-3 flex justify-between items-center px-4'>
          <Typography.mText styles='text-black-1 font-bold'>
            Current subscription
          </Typography.mText>
          <div className='hidden csm:flex justify-center items-center gap-3'>
            <OutlineButton>Cancel</OutlineButton>
            <FillButton styles='text-white-1 bg-purple-1 font-semibold px-[12px] py-[8px] rounded-[60px]'>
              Upgrade membership
            </FillButton>
          </div>
        </div>
        {/* bottom sect ---->  */}
        <div className='w-full flex flex-col p-3 sm:p-4 gap-3'>
          <div className='flex w-full justify-between items-start'>
            {/* left por --> */}
            <div className='flex justify-start items-start gap-2'>
              <img
                src='/assets/subscription.svg'
                className='w-[35px] h-[35px]'
                alt=''
              />
              <div className='flex flex-col'>
                <Typography.text styles='text-black-1 font-bold'>
                  Elite Plan
                </Typography.text>
                <Typography.smallText styles='text-[#525866] font-medium'>
                  Next payment $45 on Jan 18, 2024.
                </Typography.smallText>
                <Typography.xsText styles='text-[#525866] font-normal'>
                  Automatic renewal every month
                </Typography.xsText>
              </div>
            </div>
            {/* right por -->  */}
            <button className='flex bg-green-1 rounded-[4px] px-[8px] py-[4px] justify-center items-center gap-1'>
              <Icons.fillCheck className='w-[16px] h-[16px] ' />
              <Typography.xsText styles='text-[12px] text-white-1 font-semibold'>
                Active
              </Typography.xsText>
            </button>
          </div>
          {/* bottons for small screen ---> */}
          <div className='w-full grid csm:hidden grid-cols-[1fr,3fr] justify-center items-center gap-3'>
            <OutlineButton styles='w-full'>Cancel</OutlineButton>
            <FillButton styles='w-full text-white-1 bg-purple-1 font-semibold px-[12px] py-[8px] rounded-[60px]'>
              Upgrade membership
            </FillButton>
          </div>
        </div>
      </div>
      {/* INVOICE HISTORY TABLE ------>  */}
      <div className='w-full flex bg-transparent csm:bg-white-1 flex-col border-[0px] csm:border-[1px] overflow-hidden csm:border-white-3 rounded-[10px]'>
        {/* top header --->  */}
        <div className='w-full flex csm:flex-row flex-col csm:gap-0 gap-3 justify-between px-3 lg:py-0 py-2 items-center min-h-[80px]'>
          <div className='flex flex-col'>
            <Typography.mText styles='text-black-1 font-bold'>
              Invoice history
            </Typography.mText>
            <Typography.smallText styles='text-[#525866] font-normal'>
              View and manage all your past invoices in one convenient location.
            </Typography.smallText>
          </div>
          <div className='csm:flex csm:w-fit w-full grid grid-cols-[3fr,1fr] justify-center items-center gap-3'>
            <Input
              classNames={{
                input:
                  'h-[40px] rounded-[64px] w-full csm:w-[200px] lg:w-[330px] border-[#E2E4E9] text-[14px] placeholder:text-[#868C98] font-normal',
              }}
              placeholder='Search...'
              leftSection={<LuSearch className='text-[20px]' />}
            />
            <OutlineButton styles='w-full csm:w-fit bg-white-1 text-[#525866]'>
              Export
            </OutlineButton>
          </div>
        </div>
        <div className='w-full csm:block hidden overflow-auto'>
          {/* table header --->  */}
          <TableHeader headers={InvoiceTable.header} />
          {/* table rows --->  */}
          <div
            className={`w-full flex flex-col ${
              InvoiceTable.rowsData.length < 9 ? 'h-fit' : 'h-[350px] '
            } `}
          >
            {InvoiceTable.rowsData.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  planeName={row.planeName}
                  amount={row.amount}
                  method={row.method}
                  dateAndTime={row.dateAndTime}
                  expireDate={row.expireDate}
                  status={row.status}
                />
              );
            })}
          </div>
        </div>

        {/* table card for small screen ------>  */}
        <div className='w-full csm:hidden flex flex-col gap-4 mt-4'>
          {InvoiceTable.rowsData.map((row, index) => {
            return (
              <RowForSmallScreen
                key={index}
                planeName={row.planeName}
                method={row.method}
                startDate={row.dateAndTime}
                status={row.status}
                expireDate={row.expireDate}
                amount={row.amount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
