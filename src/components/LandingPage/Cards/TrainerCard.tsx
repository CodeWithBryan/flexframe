import React from 'react';
import Typography from '../../shared/Typography/Typography';
import * as Icons from '../../../svg/Icons';
import { Link } from 'react-router-dom';

interface Props {
  img: string;
  name: string;
  speciality: string;
  index: number;
}

const TrainerCard: React.FC<Props> = ({
  img,
  name,
  speciality,
  index,
}: Props) => {
  return (
    <div
      className={`w-full flex ${
        index === 0
          ? 'justify-center md:justify-end '
          : 'justify-center md:justify-start'
      } items-center`}
    >
      <div className='bg-[#242424] max-w-[378px] w-full rounded-xl'>
        <div className='relative'>
          <div className=' absolute w-[40px] min-h-[160px] top-0 right-6 bg-red-1 flex flex-col justify-center items-center gap-[18px] rounded-b-3xl'>
            {socialIcons.map((item, index) => {
              return (
                <Link className='hover:opacity-80' to={item.path} key={index}>
                  {item.icon}
                </Link>
              );
            })}
          </div>
          <img
            src={img}
            className='w-[378px]  h-[230px] sm:h-[360px] md:h-[440px] object-fill rounded-t-xl'
          />
        </div>
        <div className='p-[14px] sm:p-[1.5rem] flex flex-col gap-1 border-b-[1px] border-l-[1px] border-r-[1px] rounded-b-xl border-white-1/10'>
          <Typography.h3 styles='font-bold text-white-1'>{name}</Typography.h3>
          <Typography.text styles='font-normal text-white-2'>
            {speciality}
          </Typography.text>
        </div>
      </div>
    </div>
  );
};

const socialIcons = [
  {
    path: '#',
    icon: <Icons.twiiter />,
  },
  {
    path: '#',
    icon: <Icons.youtube2 />,
  },
  {
    path: '#',
    icon: <Icons.instagram2 />,
  },
  {
    path: '#',
    icon: <Icons.faceBook2 />,
  },
];

export default TrainerCard;
