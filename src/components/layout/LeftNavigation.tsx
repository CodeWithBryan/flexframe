import React from 'react';
import logo from '../../assets/logo.png';
import Typography from '../common/Typography';
import { BsGrid } from 'react-icons/bs';
import { MdOutlinePriceChange } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

interface Props {
  selectedOption: string;
  setSelectedOption: any;
}

const LeftNavigation: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
}: Props) => {
  return (
    <div className='w-full flex flex-col justify-between h-full p-4 border-r-[1px] border-[#E2E4E9]'>
      <div className='w-full flex flex-col'>
        {/* top section */}
        <div className='flex h-[50px] justify-between items-center w-full'>
          <div className='flex justify-center items-center gap-3'>
            <img src={logo} className='w-[30px] h-[30px] object-fill' alt='' />
            <Typography.mText styles='text-black-1 font-bold'>
              RP Fitness
            </Typography.mText>
          </div>
          {/* <GoSidebarCollapse className='text-[27px] rotate-180 cursor-pointer text-[#525866]' /> */}
        </div>
        {/* links ----->  */}
        <div className='w-full flex flex-col items-start py-8 gap-2'>
          {leftNavigationLink.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link as string}
                onClick={() => setSelectedOption(item.name)}
                className={`w-full rounded-md h-[45px] px-3 flex justify-start items-center gap-2 ${
                  selectedOption === item.name
                    ? 'bg-red-1 hover:bg-red-1 text-white-1'
                    : 'bg-transparent hover:bg-red-1/5 text-[#525866]'
                }`}
              >
                {item.icon}
                <Typography.mText styles=' font-medium'>
                  {item.name}
                </Typography.mText>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const leftNavigationLink = [
  {
    name: 'Dashboard',
    icon: <BsGrid className='text-[20px]' />,
    link: '/dashboard',
  },
  // {
  //   name: 'Calendar',
  //   icon: <BsCalendar4 className='text-[20px]' />,
  // },
  // {
  //   name: 'Workout routine',
  //   icon: <FaPersonFalling className='text-[20px]' />,
  // },
  // {
  //   name: 'Meal Plan',
  //   icon: <GiMeal className='text-[20px]' />,
  // },
  // {
  //   name: 'Attendance',
  //   icon: <BsPersonCheck className='text-[20px]' />,
  // },
  {
    name: 'Billings',
    icon: <MdOutlinePriceChange className='text-[20px]' />,
  },
  // {
  //   name: 'Documents',
  //   icon: <IoDocumentTextOutline className='text-[20px]' />,
  // },
  // {
  //   name: 'Guest passes',
  //   icon: <BsPersonVcard className='text-[20px]' />,
  // },
  // {
  //   name: 'Shop',
  //   icon: <GrWorkshop className='text-[20px] text-[#868C98]' />,
  // },
];

export default LeftNavigation;
