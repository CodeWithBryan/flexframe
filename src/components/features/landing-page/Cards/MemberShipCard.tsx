import React from 'react';
import Typography from '../../../common/Typography';
import FillButton from '../../../common/Buttons/FillButton';
import * as Icons from '../../../common/Icons';
import { Link } from 'react-router-dom';

interface Props {
  product: {
    name: string;
    price: number;
    description: string;
  };
}

const MemberShipCard: React.FC<Props> = ({
  product,
}: Props) => {
  if (!product) return null;

  const { name, price, description} = product;

  return (
    <div className='w-full max-w-[380px] lg:max-w-[440px] h-full flex flex-col justify-between p-[20px] xl:p-[32px] border-[1px] memshipCardBgColor border-white-1/10 rounded-md'>
      <div className='flex flex-col'>
        <Typography.lgText styles='text-white-1 font-bold'>
          {name}
        </Typography.lgText>
        
        <div className='flex justify-start items-end gap-3 py-4 sm:py-6 xl:py-8'>
          <h2 className='text-[50px] xl:text-[60px] font-bold text-white-1 leading-[50px]'>
            ${price / 100}
          </h2>
          <Typography.text styles='text-white-2 font-normal'>
            {' '}
            / Month
          </Typography.text>
        </div>
        {/* list --->  */}
        <div className='w-full flex flex-col items-start gap-2 capitalize'>
          {description.split('\n').map((ls, index) => {
            return (
              <div
                key={index}
                className='flex justify-center items-center gap-3'
              >
                <Icons.check />
                <Typography.text styles='text-white-1/80 font-normal'>
                  {ls.toLocaleLowerCase()}
                </Typography.text>
              </div>
            );
          })}
        </div>
      </div>
      {/* button ----->  */}
      <Link to='/signup'>
        <FillButton styles='bg-red-1 w-full h-[50px] sm:h-[56px] rounded-[60px] mt-8'>
          <Typography.text styles='text-white-1 font-semibold'>
            Signup
          </Typography.text>
        </FillButton>
      </Link>
    </div>
  );
};

export default MemberShipCard;
