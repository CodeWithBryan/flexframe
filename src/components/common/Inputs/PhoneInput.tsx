import React from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface Props {
  phone: string;
  setPhone: any;
}

const MobileNumInput: React.FC<Props> = ({ phone, setPhone }: Props) => {
  return <PhoneInput defaultCountry='usa' value={phone} onChange={setPhone} />;
};

export default MobileNumInput;
