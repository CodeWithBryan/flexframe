import React from 'react';

interface Props {
  bgImage: string;
  title: string;
}

const TrainingProgramCard: React.FC<Props> = ({ bgImage, title }: Props) => {
  return (
    <div
      className={`w-full h-full flex rounded-md justify-center items-end ${bgImage} grayscale bg-cover bg-no-repeat bg-center`}
    >
      <h4 className='text-[36px] mb-8 uppercase  bottom-0 text-white-1 tracking-wider verticelAlign rotate-180 whitespace-nowrap font-bold '>
        {title}
      </h4>
    </div>
  );
};

export default TrainingProgramCard;
