import React from 'react';
import * as Icons from '../../../svg/Icons';
import Typography from '../../../components/shared/Typography/Typography';
import FillButton from '../../../components/shared/Buttons/FillButton';
import OutlineButton from '../../../components/shared/Buttons/OutlineButton';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';
import TableHeader from '../../../components/Customer/Billing/TableHeader';
import TableRow from '../../../components/Customer/Billing/TableRow';
import RowForSmallScreen from '../../../components/Customer/Billing/RowForSmallScreen';
import CustomModal from '../../../components/shared/Popups/Modal';
import { useDisclosure } from '@mantine/hooks';

const Billing: React.FC = () => {
  const [upgrateOpened, { open: openUpgrateModal, close: closeUpgrateModal }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div className='w-full min-h-[calc(100vh-75px)] p-3 sm:p-5 flex flex-col gap-5'>
        {/*  */}
        <div className='justify-center flex flex-col gap-2'>
          <Typography.lgText styles='text-black-3 font-semibold'>
            Billings
          </Typography.lgText>
          <Typography.smallText styles='text-[#525866] font-normal'>
            Manage your payments, view your billing history, and keep track of
            your subscription status.
          </Typography.smallText>
        </div>
        {/* current subscription + payement method ------->  */}
        <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4'>
          {/* current sub ->  */}
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full h-full max-w-[600px] flex flex-col bg-white-1 rounded-[10px] border-[1px] border-white-3'>
              {/* header ->  */}
              <div className='w-full h-[50px] sm:h-[70px] border-b-[1px] border-white-3 flex justify-between items-center px-4'>
                <Typography.mText styles='text-black-1 font-bold'>
                  Current subscription
                </Typography.mText>
                <div className='hidden csm:flex justify-center items-center gap-3'>
                  <OutlineButton>Cancel</OutlineButton>
                  <FillButton
                    event={openUpgrateModal}
                    styles='text-white-1 bg-purple-1 font-semibold px-[12px] py-[8px] rounded-[60px]'
                  >
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
          </div>
          {/* payement method ---->  */}
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full h-full max-w-[600px] flex flex-col bg-white-1 rounded-[10px] border-[1px] border-white-3'>
              {/* header ->  */}
              <div className='w-full h-[50px] sm:h-[70px] border-b-[1px] border-white-3 flex justify-between items-center px-4'>
                <Typography.mText styles='text-black-1 font-bold'>
                  Payment method
                </Typography.mText>
                <div className='csm:block hidden'>
                  <OutlineButton>Change payment method</OutlineButton>
                </div>
              </div>
              {/* botton sect ---->  */}
              <div className='flex flex-col w-full gap-3 p-3 sm:p-4'>
                <div className='flex w-full justify-between items-start'>
                  {/* left por --> */}
                  <div className='flex flex-col'>
                    <Typography.text styles='text-black-1 font-bold'>
                      Mastercard ending with 9988
                    </Typography.text>
                    <Typography.smallText styles='text-[#525866] font-medium'>
                      Expiry 6/2027
                    </Typography.smallText>
                  </div>
                  {/* right por -->  */}
                  <Icons.visa className='w-[32px] h-[32px]' />
                </div>
                {/* button for small screen */}
                <div className='csm:hidden block'>
                  <OutlineButton>Change payment method</OutlineButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* inovice history table ------>  */}
        <div className='w-full flex bg-transparent csm:bg-white-1 flex-col border-[0px] csm:border-[1px] overflow-hidden csm:border-white-3 rounded-[10px]'>
          {/* top header --->  */}
          <div className='w-full flex csm:flex-row flex-col csm:gap-0 gap-3 justify-between px-3 lg:py-0 py-2 items-center min-h-[80px]'>
            <div className='flex flex-col'>
              <Typography.mText styles='text-black-1 font-bold'>
                Invoice history
              </Typography.mText>
              <Typography.smallText styles='text-[#525866] font-normal'>
                View and manage all your past invoices in one convenient
                location.
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
            <TableHeader headers={invoiceTable.header} />
            {/* table rows --->  */}
            <div
              className={`w-full flex flex-col ${
                invoiceTable.rowsData.length < 9 ? 'h-fit' : 'h-[350px] '
              } `}
            >
              {invoiceTable.rowsData.map((row, index) => {
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
            {invoiceTable.rowsData.map((row, index) => {
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
      {/* UPGRATE MEMBERSHIP ================> */}
      <CustomModal
        title='Upgrade plan'
        description='The below information is collected for taxes and legal compliance'
        size='85%'
        opened={upgrateOpened}
        onClose={closeUpgrateModal}
      >
        <div className='w-full flex gap-3 mt-5 flex-col'>
          <div className='w-full grid grid-cols-3 gap-4'>
            {upgradePlaneData.map((plan, index) => {
              return (
                <div
                  key={index}
                  className='w-full flex flex-col items-start bg-[#F9F9F9] border-[1px] border-[#E2E4E9] p-2 rounded-[16px]'
                >
                  <img src={plan.img} className='w-[53px] h-[54px]' alt='' />
                  <p className='text-[20px] mt-4 text-black-3 font-normal'>
                    Standard
                  </p>
                  <div className='flex justify-center gap-2 mb-4 items-center'>
                    <Typography.h2 styles='text-black-3 font-bold'>
                      {plan.price}
                    </Typography.h2>
                    <p className='text-[#525866] mt-3 text-[18px] font-normal'>
                      /Month
                    </p>
                  </div>
                  {/* attributes ------> */}
                  <div className='w-full flex flex-col gap-4'>
                    {plan.attributes.map((attri, index) => {
                      return (
                        <Typography.mText
                          key={index}
                          styles='text-[#525866] font-normal'
                        >
                          {attri}
                        </Typography.mText>
                      );
                    })}
                  </div>
                  <FillButton
                    styles={`w-full ${plan.btnStyles} mt-5 text-[#525866] text-[14px] font-medium h-[48px] rounded-[60px]`}
                  >
                    Save details
                  </FillButton>
                </div>
              );
            })}
          </div>
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

const invoiceTable = {
  header: [
    {
      name: 'Plan Name',
      isFilterIcon: false,
    },
    {
      name: 'Date & Time',
      isFilterIcon: true,
    },
    {
      name: 'Expire Date',
      isFilterIcon: true,
    },
    {
      name: 'Amount',
      isFilterIcon: true,
    },
    {
      name: 'Method',
      isFilterIcon: true,
    },
    {
      name: 'Status',
      isFilterIcon: true,
    },
  ],
  rowsData: [
    {
      planeName: {
        img: '/assets/subscription.svg',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'active',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/subscription.svg',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'active',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/subscription.svg',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'active',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
    {
      planeName: {
        img: '/assets/elite.png',
        name: 'Elite',
      },
      dateAndTime: 'Dec 18, 2023',
      expireDate: 'Jan 18, 2023',
      amount: '$45.00',
      method: {
        img: <Icons.visa className='w-[20px] h-[20px]' />,
        number: '**** 9454',
      },
      status: 'expired',
    },
  ],
};

const upgradePlaneData = [
  {
    type: 'Standard',
    img: '/assets/plan1.png',
    price: '$35',
    btnText: 'Downgrade',
    btnStyles: 'text-[#525866] bg-white-1  border-[1px] border-[#E2E4E9]',
    attributes: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
  {
    type: 'Standard',
    img: '/assets/plan1.png',
    price: '$35',
    btnText: 'Current plan',
    btnStyles: 'text-[#525866] bg-[#9494941A]',
    attributes: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
  {
    type: 'Standard',
    img: '/assets/plan1.png',
    price: '$35',
    btnText: 'Upgrade',
    btnStyles: 'text-white-1 bg-red-1',
    attributes: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
];

export default Billing;
