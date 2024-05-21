import React, { useState } from 'react';
import * as Icons from '../../../components/common/Icons';
import Typography from '../../../components/common/Typography';
import FillButton from '../../../components/common/Buttons/FillButton';
import OutlineButton from '../../../components/common/Buttons/OutlineButton';
import { Input } from '@mantine/core';
import { LuSearch } from 'react-icons/lu';
import TableHeader from '../../../components/features/billing/TableHeader';
import TableRow from '../../../components/features/billing/TableRow';
import RowForSmallScreen from '../../../components/features/billing/RowForSmallScreen';
import { useDisclosure } from '@mantine/hooks';
import CheckBoxInput from '../../../components/common/Inputs/CheckBox';
import CustomModal from '../../../components/common/Modal';
import {
  InvoiceTable,
  UpgradePlaneData,
  CancelSubscriptionData,
  CancelSubReasonData,
} from '../../../data/billing';

const CancelButton: React.FC = () => {
  const [cancelSub, { open }] = useDisclosure(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`flex rounded-[4px] px-[8px] py-[4px] justify-center items-center gap-1 ${
        isHovered ? 'bg-red-500' : 'bg-green-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={open}
    >
      {!isHovered && (<Icons.fillCheck className='w-[16px] h-[16px]' />)}
      <Typography.xsText styles='text-[12px] text-white-1 font-semibold'>
        {isHovered ? 'Cancel' : 'Active'}
      </Typography.xsText>
    </button>
  );
}

const Billing: React.FC = () => {
  // STATES FOR MODALS =========================>
  const [upgrateOpened, { open: openUpgrateModal, close: closeUpgrateModal }] =
    useDisclosure(false);
  const [cancelSub, { open: openCancelSub, close: closeCancelSub }] =
    useDisclosure(false);
  const [cancelSubReason, { open: openSubReason, close: closeSubReason }] =
    useDisclosure(false);
  const [
    subCanceledSuccessfully,
    { open: openSubCancel, close: closeSubCancel },
  ] = useDisclosure(false);

  // REASONS FOR CANCEL SUBSCRIPTIONS STATE ===================>
  const [reasonsToCancelSub, setReasonsToCancelSub] = useState<{
    [key: string]: boolean;
  }>(
    CancelSubReasonData.reduce((acc: { [key: string]: boolean }, reason) => {
      acc[reason] = false;
      return acc;
    }, {})
  );

  const handleCheckBoxChange = (reason: string) => {
    setReasonsToCancelSub((prevCheckedItems) => ({
      ...prevCheckedItems,
      [reason]: !prevCheckedItems[reason],
    }));
  };

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
        <div className='w-full grid grid-cols-1 xl:grid-cols-[1.5fr,1fr] gap-5'>
          {/* current sub ->  */}
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full h-full max-w-[600px] xl:max-w-none flex flex-col bg-white-1 rounded-[16px] border-[1px] border-white-3'>
              {/* header ->  */}
              <div className='w-full h-[50px] sm:h-[70px] border-b-[1px] border-white-3 flex justify-between items-center px-4'>
                <Typography.mText styles='text-black-1 font-bold'>
                  Current subscriptions
                </Typography.mText>
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
                  <div className='flex justify-between gap-3'>
                    <CancelButton />
                    <button className='flex bg-purple-1 rounded-[4px] px-[8px] py-[4px] justify-center items-center gap-1' onClick={openUpgrateModal}>
                      <Icons.fillCheck className='w-[16px] h-[16px] ' />
                      <Typography.xsText styles='text-[12px] text-white-1 font-semibold'>
                        Upgrade
                      </Typography.xsText>
                    </button>
                  </div>
                </div>
                {/* bottons for small screen ---> */}
                <div className='w-full grid csm:hidden grid-cols-[1fr,3fr] justify-center items-center gap-3'>
                  <OutlineButton event={openCancelSub} styles='w-full'>
                    Cancel
                  </OutlineButton>
                  <FillButton
                    event={openUpgrateModal}
                    styles='w-full text-white-1 bg-purple-1 font-semibold px-[12px] py-[8px] rounded-[60px]'
                  >
                    Upgrade membership
                  </FillButton>
                </div>
              </div>
            </div>
          </div>
          {/* payement method ---->  */}
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-full h-full max-w-[600px] flex flex-col bg-white-1 rounded-[16px] border-[1px] border-white-3'>
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
      {/* UPGRATE MEMBERSHIP =================> */}
      <CustomModal
        title='Upgrade plan'
        description='The below information is collected for taxes and legal compliance'
        size='85%'
        opened={upgrateOpened}
        onClose={closeUpgrateModal}
      >
        <div className='w-full flex gap-3 mt-5 flex-col'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {UpgradePlaneData.map((plan, index) => {
              return (
                <div
                  className='w-full flex justify-center items-center'
                  key={index}
                >
                  <div className='w-full max-w-[350px] md:max-w-none flex flex-col items-start bg-[#F9F9F9] border-[1px] border-[#E2E4E9] p-3 sm:p-3 rounded-[16px]'>
                    <img src={plan.img} className='w-[53px] h-[54px]' alt='' />
                    <p className='text-[20px] mt-3 sm:mt-4 text-black-3 font-normal'>
                      Standard
                    </p>
                    <div className='flex justify-center gap-2 mb-3 sm:mb-4 items-center'>
                      <Typography.h2 styles='text-black-3 font-bold'>
                        {plan.price}
                      </Typography.h2>
                      <p className='text-[#525866] mt-3 text-[18px] font-normal'>
                        /Month
                      </p>
                    </div>
                    {/* attributes ------> */}
                    <div className='w-full flex flex-col gap-2 sm:gap-4'>
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
                </div>
              );
            })}
          </div>
        </div>
      </CustomModal>
      {/* CANCEL SUBSCRIPTION ================>  */}
      <CustomModal
        title='Cancel subscription'
        description='We’re sorry to see you go. If you cancel your membership, you’ll still have your benefits unstill the end of your current billing cycle.'
        size='md'
        opened={cancelSub}
        onClose={closeCancelSub}
      >
        <div className='w-full flex gap-3 mt-5 flex-col'>
          <div className='bg-[#F9F9F9] p-3 border-[1px] flex flex-col border-[#E2E4E9] rounded-[16px]'>
            <p className='text-[18px] sm:text-[20px] leading-[25px] text-black-3 font-semibold'>
              Resume membership at any time to...
            </p>
            {CancelSubscriptionData.map((attri, index) => {
              return (
                <p
                  key={index}
                  className='text-[#525866] mt-2 sm:mt-3 font-normal text-[16px]'
                >
                  {attri}
                </p>
              );
            })}
          </div>
          {/* buttons -------> */}
          <div className='w-full mt-1 grid grid-cols-[.9fr,2fr] sm:grid-cols-[.7fr,2fr] justify-center items-center gap-2 sm:gap-3'>
            <OutlineButton
              event={() => {
                closeCancelSub();
                openSubReason();
              }}
              styles='w-full h-[48px] text-red-1 border-red-1'
            >
              Cancel
            </OutlineButton>
            <FillButton styles='w-full rounded-[60px] h-[48px] text-white-1 border-black-1 border-[1px] bg-black-1'>
              Keep subscription
            </FillButton>
          </div>
        </div>
      </CustomModal>
      {/* CANCEL SUBSCRIPTION REASON ================>  */}
      <CustomModal
        title='Cancel subscription'
        description='Your feedback matters to us. we appreciate your time in providing feedback to help us improve our services. Your input is valuable to us.'
        size='34rem'
        opened={cancelSubReason}
        onClose={closeSubReason}
      >
        <div className='w-full flex gap-3 mt-5 flex-col'>
          <div className='bg-[#F9F9F9] p-3 border-[1px] flex flex-col border-[#E2E4E9] rounded-[16px]'>
            <p className='text-[18px] sm:text-[20px] text-black-3 font-semibold'>
              Can you tell us why?
            </p>
            {CancelSubReasonData.map((attri, index) => {
              return (
                <div
                  key={index}
                  className='w-full flex mt-2 sm:mt-3 justify-start items-center'
                >
                  <CheckBoxInput
                    value={reasonsToCancelSub[attri]}
                    onChange={() => handleCheckBoxChange(attri)}
                    size='xs'
                    label={attri}
                  />
                </div>
              );
            })}
          </div>
          {/* textArea -----> */}
          <div className='w-full gap-2 mt-1 sm:mt-2 flex flex-col'>
            <label
              htmlFor='message'
              className='text-[14px] font-normal text-black-3'
            >
              Is there anything you would like to share with us?{' '}
              <span className='text-[#868C98]'> (Optional)</span>
            </label>
            <textarea
              placeholder='Other information you would like to highlight'
              className='focus:outline-none p-2 rounded-[20px] min-h-[80px] border-[1px] border-[#E2E4E9] text-[14px] font-normal text-black-3 placeholder:text-[#868C98]'
            />
          </div>
          {/* buttons -------> */}
          <div className='w-full mt-1 grid grid-cols-[.9fr,2fr] sm:grid-cols-[.7fr,2fr] justify-center items-center gap-2 sm:gap-3'>
            <OutlineButton
              event={() => {
                closeSubReason();
                openSubCancel();
              }}
              styles='w-full h-[48px] text-red-1 border-red-1'
            >
              Cancel
            </OutlineButton>
            <FillButton styles='w-full rounded-[60px] h-[48px] border-black-1 text-white-1 border-[1px] bg-black-1'>
              Keep subscription
            </FillButton>
          </div>
        </div>
      </CustomModal>
      {/* MEMBERSHIP CANCELED ================>  */}
      <CustomModal
        title=''
        description=''
        size='30rem'
        opened={subCanceledSuccessfully}
        onClose={closeSubCancel}
      >
        <div className='w-full justify-center items-center flex gap-3 mt-5 flex-col'>
          <img
            src='/assets/illustration1.png'
            className='w-[300px] sm:w-[360px] h-[180px] sm:h-[220px]'
            alt=''
          />
          <p className='text-[20px] font-semibold text-black-3'>
            Membership canceled
          </p>
          <p className='text-[14px] font-normal text-black-3 text-center'>
            Your membership has ended. you’ll still have your benefits unstill
            the end of your current billing cycle. If you change your mind, you
            can upgrade again at any time. Thanks you for being a part of the RP
            Fitness member.
          </p>
          {/* buttons -------> */}
          <div className='w-full mt-3 justify-center items-center gap-3'>
            <FillButton
              event={closeSubCancel}
              styles='w-full rounded-[60px] h-[48px] text-white-1 border-[1px] bg-red-1'
            >
              Back to home
            </FillButton>
          </div>
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

export default Billing;
