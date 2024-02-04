import React from 'react';

interface Props {
  type: string;
  placeholder: string;
  styles?: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type = 'text',
  placeholder,
  styles = 'w-full',
  value,
  name,
  onChange,
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`text-[14px] ${styles} select-none focus:outline-none px-2 h-[45px] border-[1px] border-white-3 rounded-[10px] placeholder:text-[#868C98] text-black-1 font-normal`}
    ></input>
  );
};

export default Input;
