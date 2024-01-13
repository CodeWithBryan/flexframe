'use client';

import React, { useState } from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import SuccessStoryCard from './Cards/SuccessStoryCard';
import Slider from 'react-slick';
import * as Icons from '../../svg/Icons';

const SuccessStories: React.FC = () => {
  const [navigateSlideItem, setNavigateSlideItem] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={() => {
          onClick();
          setNavigateSlideItem(false);
        }}
        className={`w-[44px] h-[44px] hover:bg-red-1 bg-transparent active:bg-red-1 border-[1px] border-red-1 rounded-full flex justify-center items-center z-30 absolute bottom-8 right-[72px] cursor-pointer glow`}
      >
        <Icons.backIcon
          stroke='#ffffff'
          className=' w-[24px] h-[20px] rotate-0'
        />
      </button>
    );
  }

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className={`w-[44px] h-[44px] border-[1px] hover:bg-red-1 bg-transparent active:bg-red-1  border-red-1  rounded-full flex justify-center items-center absolute bottom-8 right-4   cursor-pointer glow`}
      >
        <Icons.backIcon
          stroke='#ffffff'
          className='rotate-180 w-[24px] h-[20px]'
        />
      </div>
    );
  }

  return (
    <ComponentWrapper>
      <div className='w-full flex flex-col justify-center gap-3 items-center py-12'>
        <Typography.h2 styles='text-white-1 font-bold'>
          Success stories
        </Typography.h2>
        <Typography.text styles='text-white-1/80 font-normal max-w-[800px] text-center'>
          We've empowered thousands of rebels, just like you, to unleash their
          superpowers and achieve lasting, transformative changes."
        </Typography.text>
        <div className='w-full relative mt-10'>
          <Slider {...settings}>
            {[0, 1, 2, 3].map((item: any, index: number) => {
              return <SuccessStoryCard key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default SuccessStories;
