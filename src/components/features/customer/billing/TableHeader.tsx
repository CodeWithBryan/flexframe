import React from 'react';
import Typography from '../../../common/Typography';
import { Checkbox } from '@mantine/core';
import * as Icons from '../../../common/Icons';

interface Props {
  headers: { name: string; isFilterIcon: boolean }[];
  cols?: string;
  height?: string;
  width?: string;
}

const TableHeader: React.FC<Props> = ({
  headers,
  cols = 'grid-cols-[30px,1fr,1fr,1fr,1fr,1fr,1fr,20px]',
  height = 'min-h-[45px]',
  width = 'min-w-[820px]',
}: Props) => {
  return (
    <div
      className={`w-full ${width} grid bg-[#F9F9F9] px-3 ${cols} ${height} justify-center items-center`}
    >
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
