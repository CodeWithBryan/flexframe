import React from 'react';
import SocialBanner from '../components/shared/SocialBanner/SocialBanner';
import Hero from '../components/LandingPage/Hero';
import AboutUs from '../components/LandingPage/AboutUs';

const LandingPage: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#121111]'>
      <SocialBanner />
      <Hero />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
