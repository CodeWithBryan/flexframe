import React, { useEffect, useState } from 'react';
import ComponentWrapper from '../../common/ComponentWrapper';
import Typography from '../../common/Typography';
import MemberShipCard from './Cards/MemberShipCard';
import { getProducts } from '../../../api/products';

const MemberShipPlane: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProducts(true)
      .then((products) => setProducts(products));
  }, []);

  return (
    <ComponentWrapper style='py-10'>
      <div className='flex flex-col w-full justify-center items-center gap-4' id="membership">
        <Typography.h2 styles='w-full font-bold text-white-1 text-left md:text-center'>
          Our Membership Plans
        </Typography.h2>
        <Typography.text styles='font-normal text-white-1/80 max-w-[850px] w-full text-left md:text-center'>
          If you're ready to embark on a transformative journey, the next step
          is simple.
        </Typography.text>
        <div className='w-full flex justify-center items-center mt-4 sm:mt-8'>
          {/* card ===>  */}
          {products?.map((product: any, index: number) => (
              <div className='flex justify-center items-center w-full'>
                <MemberShipCard
                  key={index}
                  product={product}
                />
              </div>
          ))}
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
];

export default MemberShipPlane;
