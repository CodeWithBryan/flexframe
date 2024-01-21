import React from 'react';
import Typography from '../../shared/Typography/Typography';

interface Props {
  img: string;
  date: string;
  title: string;
  content: string;
}

const BlogCard: React.FC<Props> = ({ img, date, title, content }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[390px] flex flex-col gap-3'>
        {/* blog image --->  */}
        <div className='w-full relative'>
          <img
            src={img}
            alt=''
            className='w-full h-[250px] sm:h-[330px] object-fill'
          />
        </div>
        {/* blog details ----->  */}
        <div className='w-full flex flex-col gap-2'>
          {/* date --->  */}
          <Typography.smallText styles='text-white-1/80 font-normal font-inter'>
            {date}
          </Typography.smallText>
          <Typography.lgText styles='font-bold text-white-1 font-inter'>
            {title}
          </Typography.lgText>
          <Typography.smallText styles='text-white-1/80 font-normal font-inter'>
            {content}
          </Typography.smallText>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
