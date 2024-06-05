import React from 'react';
import { Carousel } from '@mantine/carousel';

interface Props {
  slideSize?: any;
  sliderItems: string[];
  selectedday: string;
  setDay: any;
}

const TabCarousel: React.FC<Props> = ({
  slideSize = { base: '100%', xs: '30%', sm: '20%', lg: '14%' },
  sliderItems,
  selectedday,
  setDay,
}) => {
  return (
    <Carousel
      withIndicators={false}
      height={60}
      slideSize={slideSize}
      slideGap='md'
      loop
      align='center'
      controlsOffset='xs'
      slidesToScroll={1}
    >
      {sliderItems.map((sli, index) => {
        return (
          <Carousel.Slide key={index}>
            <button
              onClick={() => setDay(sli)}
              className={`w-full ${
                selectedday === sli
                  ? 'text-red-1 relative after:absolute after:w-[80%] after:h-[2px] after:bg-red-1 after:left-[11%] after:bottom-0'
                  : 'text-[#525866]'
              } cursor-pointer h-full flex justify-center items-center text-[14px] font-medium`}
            >
              {sli}
            </button>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default TabCarousel;
