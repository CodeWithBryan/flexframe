import React from 'react';
import Navibar from '../shared/Navibar/Navibar';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Typography from '../shared/Typography/Typography';
import * as Icons from '../../svg/Icons';
import FillButton from '../shared/Buttons/FillButton';

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh-50px)] bg-right bg-cover bg-no-repeat bg-[url('/assets/heroBg.png')]">
      <Navibar />
    </div>
  );
};

const atributes = [
  {
    icon: <Icons.time />,
    text: '24/7 access',
  },
  {
    icon: <Icons.strength />,
    text: 'Cardio & strength equipment',
  },
  {
    icon: <Icons.group />,
    text: 'Group fitness classes',
  },
  {
    icon: <Icons.power />,
    text: '1:1 fitness assessment',
  },
];

export default Hero;
