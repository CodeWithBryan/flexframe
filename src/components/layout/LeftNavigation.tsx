import React from 'react';
import logo from '../../assets/logo.png';
import Typography from '../common/Typography';
import { BillingNavigation } from '../../data/billing';
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
        </div>
        {/* links ----->  */}
        <div className='w-full flex flex-col items-start py-8 gap-2'>
          {BillingNavigation.map((item, index) => {
            return (
              <NavLink
                key={index}
                to='#'
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

export default LeftNavigation;
