import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';

interface Props {
  styles?: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<Props> = ({
  styles = 'w-full',
  value,
  onChange,
  name,
}: Props) => {
  const [type, setType] = useState('password');

  return (
    <div className='w-full h-[45px] relative'>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`text-[14px] ${styles} select-none focus:outline-none px-2 h-full border-[1px] border-white-3 rounded-[10px] placeholder:text-[#868C98] text-black-1 font-normal`}
      />
      {type === 'text' ? (
        <FaEyeSlash
          onClick={() => setType('password')}
          className='text-[18px] cursor-pointer text-[#868C98] absolute right-4 top-[30%]'
        />
      ) : (
        <IoEye
          onClick={() => setType('text')}
          className='text-[18px] cursor-pointer text-[#868C98] absolute right-4 top-[30%]'
        />
      )}
    </div>
  );
};

export default PasswordField;
