import React from 'react';

interface Props {
  bgImage: string;
  title: string;
}

const TrainingProgramCard: React.FC<Props> = ({ bgImage, title }: Props) => {
  return (
    <div
      className={`w-full h-full min-h-[240px] sm:min-h-[500px] flex rounded-md justify-start sm:justify-center items-end ${bgImage} grayscale bg-cover bg-no-repeat bg-center`}
    >
      <h4 className='text-[22px] sm:text-[30px] lg:text-[36px] mb-4 md:mb-8 uppercase ml-4 sm:ml-0 text-white-1 tracking-wider verticelAlign rotate-0 sm:rotate-180 whitespace-nowrap font-bold '>
        {title}
      </h4>
    </div>
  );
};

export default TrainingProgramCard;
