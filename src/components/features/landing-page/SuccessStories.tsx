import React from 'react';
import ComponentWrapper from '../../common/ComponentWrapper';
import Typography from '../../common/Typography';
import SuccessStoryCard from './Cards/SuccessStoryCard';
import Slider from 'react-slick';
import * as Icons from '../../common/Icons';

const SuccessStories: React.FC = () => {
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
  };

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`w-[44px] h-[44px] hover:bg-red-1 bg-transparent active:bg-red-1 border-[1px] border-red-1 rounded-full flex justify-center items-center z-30 absolute -bottom-14 sm:bottom-1 cmd:bottom-4 left-4 sm:right-[72px] sm:left-auto cursor-pointer glow`}
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
        onClick={onClick}
        className={`w-[44px] h-[44px] border-[1px] hover:bg-red-1 bg-transparent active:bg-red-1 border-red-1 rounded-full flex justify-center items-center absolute -bottom-14 sm:bottom-1 cmd:bottom-4 left-[72px] sm:right-4 sm:left-auto cursor-pointer glow`}
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
      <div className='w-full flex flex-col justify-center gap-3 items-center py-10'>
        <Typography.h2 styles='text-white-1 font-bold w-full text-left md:text-center'>
          Success Stories
        </Typography.h2>
        <Typography.text styles='text-white-1/80 font-normal max-w-[800px] text-left md:text-center'>
          We've empowered hundreds of rebels, just like you, to unleash their
          superpowers and achieve lasting, transformative changes.
        </Typography.text>
        <div className='w-full relative mt-10 sm:pb-0 pb-8'>
          <Slider {...settings}>
            {[...Array(4)].map((_, index: number) => {
              return <SuccessStoryCard key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default SuccessStories;
