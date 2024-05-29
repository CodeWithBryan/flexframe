import React from 'react';
import ComponentWrapper from '../../common/ComponentWrapper';

const GymTourVideo: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div id="video" className='w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[680px]'>
        <img
          src='/assets/Video.png'
          alt=''
          className='w-full h-full object-cover rounded-md cursor-pointer'
        />
      </div>
    </ComponentWrapper>
  );
};

export default GymTourVideo;
