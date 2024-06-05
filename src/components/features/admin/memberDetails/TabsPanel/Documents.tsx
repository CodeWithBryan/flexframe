import React from 'react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Group } from '@mantine/core';
import { IoCloudUploadOutline } from 'react-icons/io5';
import OutlineButton from '../../../../common/Buttons/OutlineButton';
import * as Icons from '../../../../common/Icons';
import { PiDotsThreeBold } from 'react-icons/pi';

const Documents: React.FC = () => {
  return (
    <div className='w-full p-4 bg-[#F9F9F9] flex flex-col'>
      {/* UPLAOD FILE AREA --------> */}
      <div className='w-full cursor-pointer bg-white-1 rounded-[10px] min-h-[220px] flex justify-center items-center border-[1px] border-dashed border-[#CDD0D5]'>
        <Dropzone
          onDrop={(files) => console.log('accepted files', files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          // {...props}
        >
          <Group justify='center' gap='xl' style={{ pointerEvents: 'none' }}>
            <div className='w-full flex flex-col justify-center items-center'>
              <IoCloudUploadOutline className='text-[24px] mb-3 text-[#525866]' />
              <p className='text-[#0A0D14] text-[14px] font-medium'>
                Choose a file or drag & drop it here.
              </p>
              <p className='text-[12px] font-normal text-[#868C98]'>
                JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
              </p>

              <OutlineButton styles='rouned-[60px] px-6 cursor-pointer text-[14px] font-medium text-[#525866] mt-4 border-[1px] border-[#E2E4E9]'>
                Browse File
              </OutlineButton>
            </div>
          </Group>
        </Dropzone>
      </div>
      {/* FILES -------> */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-4 md:gap-5'>
        {[0, 1, 2].map((item, index) => {
          return (
            <div
              key={index}
              className='w-full p-3 flex bg-white-1 border-[1px] rounded-[16px] border-[#EAEBF0] flex-col justify-center items-center'
            >
              <div className='w-full flex justify-end'>
                <PiDotsThreeBold className='text-[20px] cursor-pointer mb-5 text-[#525866]' />
              </div>
              <Icons.pdf className='w-[56px] h-[64px]' />
              <p className='text-[#121111] mt-8 text-[16px] font-medium'>
                File.name.pdf
              </p>
              <p className='text-[#949494] text-[14px] font-normal'>2.3 MB</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Documents;
