import React, { ReactNode } from 'react';
import logo from '../../../assets/logo.png';
import Typography from '../../common/Typography';
import { NavLink } from 'react-router-dom';

interface Props {
  data: {
    name: string;
    icon: ReactNode;
    link: string;
  }[];
}

const LeftNavigation: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className='w-full flex flex-col justify-between h-full p-4 border-r-[1px] border-[#E2E4E9]'>
      <div className='w-full flex flex-col'>
        {/* top section */}
        <div className='flex h-[50px] justify-between items-center w-full'>
          <div className='flex justify-center items-center gap-3'>
            <img src={logo} className='w-[30px] h-[30px] object-fill' alt='' />
            <Typography.mText styles='text-black-1 font-bold'>
              R&P Fitness
            </Typography.mText>
          </div>
          {/* <GoSidebarCollapse className='text-[27px] rotate-180 cursor-pointer text-[#525866]' /> */}
        </div>
        {/* links ----->  */}
        <div className='w-full flex flex-col items-start py-8 gap-2'>
          {data.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  [
                    'w-full rounded-md h-[45px] px-3 flex justify-start items-center gap-2',
                    isActive
                      ? 'bg-red-1 hover:bg-red-1 text-white-1'
                      : 'bg-transparent hover:bg-red-1/5 text-[#525866]',
                  ].join(' ')
                }
                end
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
