import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import MemberShipCard from './Cards/MemberShipCard';

const MemberShipPlane: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='flex flex-col w-full justify-center items-center gap-4' id="membership">
        <Typography.h2 styles='w-full font-bold text-white-1 text-left md:text-center'>
          Our memberships plans
        </Typography.h2>
        <Typography.text styles='font-normal text-white-1/80 max-w-[850px] w-full text-left md:text-center'>
          If you're ready to embark on a transformative journey, the next step
          is simple. Select the ideal plan to kickstart your membership.
        </Typography.text>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 sm:mt-8'>
          {/* card ===>  */}
          {memberShipCardData.map((item, index) => {
            return (
              <div className='flex justify-center items-center w-full'>
                <MemberShipCard
                  key={index}
                  packageType={item.packageType}
                  list={item.list}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </ComponentWrapper>
  );
};

const memberShipCardData = [
  {
    packageType: 'Standard',
    price: '$35',
    list: [
      '24/7 access',
      'No contract - full enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      'Group fitness classes',
    ],
  },
  {
    packageType: 'Elite',
    price: '$45',
    list: [
      '24/7 access',
      'No contract - 50% off',
      'Enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      '10% off on all supplements',
      'Group fitness classes',
    ],
  },
  {
    packageType: 'Elite +',
    price: '$55',
    list: [
      '24/7 access',
      'No contract - 50% off',
      'Enrollment fee',
      'Cardio & strength equipment',
      '1:1 fitness assessment',
      'Discounted guest pass',
      '15% off on all supplements',
      'Group fitness classes',
    ],
  },
];

export default MemberShipPlane;
