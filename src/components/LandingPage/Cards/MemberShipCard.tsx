import React from 'react';
import Typography from '../../shared/Typography/Typography';
import * as Icons from '../../../svg/Icons';
import FillButton from '../../shared/Buttons/FillButton';

interface Props {
  packageType: string;
  price: string;
  list: string[];
}

const MemberShipCard: React.FC<Props> = ({
  packageType,
  price,
  list,
}: Props) => {
  return (
    <div className='w-full max-w-[380px] lg:max-w-[440px] h-full flex flex-col justify-between p-[20px] xl:p-[32px] border-[1px] memshipCardBgColor border-white-1/10 rounded-md'>
      <div className='flex flex-col'>
        <Typography.lgText styles='text-white-1 font-bold'>
          {packageType}
        </Typography.lgText>
        {/* price ---> */}
        <div className='flex justify-start items-end gap-3 py-4 sm:py-6 xl:py-8'>
          <h2 className='text-[50px] xl:text-[60px] font-bold text-white-1 leading-[50px]'>
            {price}
          </h2>
          <Typography.text styles='text-white-2 font-normal'>
            {' '}
            / Month
          </Typography.text>
        </div>
        {/* list --->  */}
        <div className='w-full flex flex-col items-start gap-3 sm:gap-3 xl:gap-4'>
          {list.map((ls, index) => {
            return (
              <div
                key={index}
                className='flex justify-center items-center gap-3'
              >
                <Icons.check />
                <Typography.text styles='text-white-1/80 font-normal'>
                  {ls}
                </Typography.text>
              </div>
            );
          })}
        </div>
      </div>
      {/* button ----->  */}
      <FillButton styles='bg-red-1 w-full h-[50px] sm:h-[56px] rounded-[60px] mt-8'>
        <Typography.text styles='text-white-1 font-semibold'>
          Get Membership
        </Typography.text>
      </FillButton>
    </div>
  );
};

export default MemberShipCard;
