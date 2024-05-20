import React from 'react';
import Typography from '../../common/Typography';
import { Checkbox } from '@mantine/core';
import * as Icons from '../../common/Icons';

interface Props {
  headers: { name: string; isFilterIcon: boolean }[];
}

const TableHeader: React.FC<Props> = ({ headers }: Props) => {
  return (
    <div className='w-full min-w-[820px] grid bg-[#F9F9F9] px-3 grid-cols-[30px,1fr,1fr,1fr,1fr,1fr,1fr,20px] min-h-[45px] justify-center items-center'>
      {/* check box  */}
      <div className='w-full flex justify-start items-center'>
        <Checkbox size='xs' color='#B61F24' />
      </div>
      {headers.map((hea, index) => {
        return (
          <div
            key={index}
            className='flex justify-start w-full items-center gap-2'
          >
            <Typography.smallText styles='text-[#525866] font-normal'>
              {hea?.name}
            </Typography.smallText>
            {hea?.isFilterIcon && (
              <button>
                <Icons.filterArrows className='w-[20px] h-[20px]' />
              </button>
            )}
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default TableHeader;
