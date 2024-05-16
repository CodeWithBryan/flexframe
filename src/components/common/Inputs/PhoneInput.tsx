import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const MobileNumInput: React.FC = () => {
  const [phone, setPhone] = useState('');

  return (
    <PhoneInput
      defaultCountry='usa'
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
};

export default MobileNumInput;
