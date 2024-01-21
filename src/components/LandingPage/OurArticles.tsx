import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import * as Icons from '../../svg/Icons';
import FillButton from '../shared/Buttons/FillButton';
import BlogCard from './Cards/blogCard';

const OurArticles: React.FC = () => {
  return (
    <ComponentWrapper style='py-10'>
      {/* title button --------> */}
      <div className='w-full flex justify-between items-start'>
        <div className='flex flex-col gap-3 justify-center items-start'>
          <div className='flex gap-2 justify-center items-center'>
            <Icons.curve />
            <Typography.mText styles='font-medium text-red-1'>
              ARTICLES & NEWS
            </Typography.mText>
            <Icons.curve />
          </div>
          <Typography.h2 styles='font-bold text-white-1 max-w-[700px] w-full'>
            Our articles on health and personal wellness
          </Typography.h2>
        </div>
        <FillButton styles='sm:flex hidden justify-center items-center min-w-[150px] md:min-w-[160px] py-[12px] md:py-[16px] bg-red-1 rounded-[60px]'>
          <Typography.mText styles='font-semibold font-inter text-white-1'>
            Read all Blogs
          </Typography.mText>
        </FillButton>
      </div>
      {/* Article Cards ---------------> */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] mt-[2rem] sm:mt-[3rem]'>
        {/* blog card ---->  */}
        {blogsData.map((item, index) => {
          return (
            <BlogCard
              key={index}
              img={item.img}
              date={item.date}
              content={item.des}
              title={item.title}
            />
          );
        })}
      </div>
      {/* read all blog button for small screen ----->  */}
      <div className='w-full flex justify-center items-center mt-8'>
        <FillButton styles='flex justify-center items-center w-full max-w-[300px] md:min-w-[160px] py-[14px] sm:py-[12px] md:py-[16px] bg-red-1 rounded-[60px]'>
          <Typography.mText styles='font-semibold font-inter text-white-1'>
            Read all Blogs
          </Typography.mText>
        </FillButton>
      </div>
    </ComponentWrapper>
  );
};

const blogsData = [
  {
    img: '/assets/blog1.png',
    title: 'Morning Boost: Energize Your Day with an AM Workout',
    date: 'Sep 19, 2023',
    des: 'Unlock the secrets of a morning fitness routine to kickstart your day with energy. Learn effective exercises and time-saving tips for a powerful start.',
  },
  {
    img: '/assets/blog2.png',
    title: 'Morning Boost: Energize Your Day with an AM Workout',
    date: 'Sep 19, 2023',
    des: 'Unlock the secrets of a morning fitness routine to kickstart your day with energy. Learn effective exercises and time-saving tips for a powerful start.',
  },
  {
    img: '/assets/blog3.png',
    title: 'Morning Boost: Energize Your Day with an AM Workout',
    date: 'Sep 19, 2023',
    des: 'Unlock the secrets of a morning fitness routine to kickstart your day with energy. Learn effective exercises and time-saving tips for a powerful start.',
  },
];

export default OurArticles;
