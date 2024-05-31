import React, { useState } from 'react';
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
import CustomModal from '../../../../components/common/Modal';
import { useDisclosure } from '@mantine/hooks';
import Input from '../../../../components/common/Inputs/Input';
import MobileNumInput from '../../../../components/common/Inputs/PhoneInput';
import CheckBoxInput from '../../../../components/common/Inputs/CheckBox';
import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IoCopyOutline } from 'react-icons/io5';
import { FaRegCheckSquare } from 'react-icons/fa';

const Members: React.FC = () => {
  // STATES FOR MODALS =========================>
  const [addMemberModal, { open: openMemberModal, close: closeMemberModal }] =
    useDisclosure(false);
  const [
    invitationSendModal,
    { open: openInvitationModal, close: closeInvitationModal },
  ] = useDisclosure(false);

  const [memberData, setMemberData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [memberShipPlan, setMemberShipPlan] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setMemberData({ ...memberData, [name]: value });
  };

  return (
    <React.Fragment>
      <div className='w-full bg-[#F9F9F9] p-4 flex flex-col'>
        {/* TOP SECTION --------> */}
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <h2 className='text-[24px] text-[#0A0D14] font-semibold'>
              Members
            </h2>
            <p className='text-[14px] font-normal text-[#525866]'>
              View, add, edit and delete your client's details.
            </p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <OutlineButton styles='text-[14px] font-semibold px-3 py-2 text-[#525866]'>
              Export
            </OutlineButton>
            <FillButton
              event={openMemberModal}
              styles='bg-[#B61F24] rounded-[60px] text-[14px] font-semibold px-3 py-2 text-white-1'
            >
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
      {/* ADD NEW MEMBER MODAL ------------->  */}
      <CustomModal
        title='Add new client'
        description=''
        size='34rem'
        opened={addMemberModal}
        onClose={closeMemberModal}
      >
        <div className='w-full flex gap-3 mt-5 flex-col'>
          {/* first name --> */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              First name
            </label>
            <Input
              styles='h-[45px] rounded-[10px]'
              type='text'
              placeholder='First name'
              value={memberData.firstName}
              onChange={handleInputChange}
              name='firstName'
            />
          </div>
          {/* last name  */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Last name
            </label>
            <Input
              styles='h-[45px] rounded-[10px]'
              type='text'
              placeholder='Last name'
              value={memberData.lastName}
              onChange={handleInputChange}
              name='lastName'
            />
          </div>
          {/* Email address  */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Email
            </label>
            <Input
              styles='h-[45px] rounded-[10px]'
              type='text'
              placeholder='iamwaleedshabbir@gmail.com'
              value={memberData.email}
              onChange={handleInputChange}
              name='email'
            />
          </div>
          {/* Mobile number ---->  */}
          <div className='w-full flex flex-col gap-2'>
            <p className='text-[14px] text-[#0A0D14] font-medium'>
              Mobile number
            </p>
            <MobileNumInput
              phone={memberData.phone}
              setPhone={(newPhone: string) =>
                setMemberData((prevState) => ({
                  ...prevState,
                  phone: newPhone,
                }))
              }
            />
          </div>
          {/* Membership plan select ----------> */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-[14px] text-black-3 font-medium'>
              Membership plan
            </label>
            <SingleSelect
              inputSize='h-[45px] rounded-[10px]'
              options={memberShipPlanOptions}
              value={memberShipPlan}
              setValue={setMemberShipPlan}
              placeholder='Select Plan'
            />
          </div>
          {/* check box ---> */}
          <CheckBoxInput
            label={
              <div className='flex flex-col'>
                <h3 className='text-[14px] font-normal text-[#0A0D14]'>
                  Send email invitation
                </h3>
                <p className='text-[12px] text-[#525866] font-normal'>
                  Client will receive an invitation to create a client account
                </p>
              </div>
            }
          />
          <div className='w-full mt-2'>
            <FillButton
              event={() => {
                closeMemberModal();
                openInvitationModal();
              }}
              styles='bg-red-1 text-white-1 text-[14px] font-semibold w-full h-[45px] sm:h-[50px] rounded-[60px]'
            >
              Invite
            </FillButton>
          </div>
        </div>
      </CustomModal>
      {/* Invitation Send Modal -----------> */}
      <CustomModal
        title=''
        description=''
        size='34rem'
        opened={invitationSendModal}
        onClose={closeInvitationModal}
      >
        <div className='w-full justify-center items-center flex gap-3 mt-5 flex-col'>
          <Icons.Invitation className='w-[124px] h-[166px]' />
          <h3 className='text-[20px] text-[#121111] font-semibold'>
            Invitation sent to Waleed
          </h3>
          <p className='text-[14px] text-[#0A0D14] font-normal text-center'>
            Your client will be receiving an invite email shortly, but you can
            also copy the invite link below
          </p>
          {/* copy url --> */}
          <div className='w-full grid h-[45px] grid-cols-[1fr,50px] border-[1px] border-[#E2E4E9] rounded-[10px]'>
            <p className='w-full flex overflow-auto justify-start px-3 items-center text-[14px] font-normal text-[#868C98]'>
              https://client.rpfitness.io/signup/804rUKvu80
            </p>
            <div className='w-full flex justify-center items-center border-l-[1px] border-[#E2E4E9]'>
              <CopyButton
                value='https://client.rpfitness.io/signup/804rUKvu80'
                timeout={2000}
              >
                {({ copied, copy }) => (
                  <Tooltip
                    label={copied ? 'Copied' : 'Copy'}
                    withArrow
                    position='right'
                  >
                    <ActionIcon
                      color={copied ? 'teal' : 'gray'}
                      variant='subtle'
                      onClick={copy}
                    >
                      {copied ? (
                        <FaRegCheckSquare className='text-[24px] text-green-1' />
                      ) : (
                        <IoCopyOutline className='text-[24px] text-red-1' />
                      )}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            </div>
          </div>
          <div className='w-full mt-2'>
            <FillButton
              event={() => {
                closeMemberModal();
                openInvitationModal();
              }}
              styles='bg-red-1 text-white-1 text-[14px] font-semibold w-full h-[45px] sm:h-[50px] rounded-[60px]'
            >
              Assign first workout
            </FillButton>
          </div>
          <OutlineButton styles='border-[#E2E4E9] text-[#525866] text-[14px] font-semibold w-full h-[45px] sm:h-[50px] rounded-[60px]'>
            I’ll assign later
          </OutlineButton>
        </div>
      </CustomModal>
    </React.Fragment>
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

const memberShipPlanOptions = ['Standard', 'Basic', 'Premium'];

export default Members;
