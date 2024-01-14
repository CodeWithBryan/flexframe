import React from 'react';
import SocialBanner from '../components/shared/SocialBanner/SocialBanner';
import Hero from '../components/LandingPage/Hero';
import AboutUs from '../components/LandingPage/AboutUs';
import FeatureBanner from '../components/LandingPage/FeatureBanner';
import PowerOfRip from '../components/LandingPage/PowerOfRip';
import ManBehindPr from '../components/LandingPage/ManBehindPr';
import SuccessStories from '../components/LandingPage/SuccessStories';
import TrainingProgram from '../components/LandingPage/TrainingProgram';
import GymTourVideo from '../components/LandingPage/GymTourVideo';

const LandingPage: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#121111]'>
      <SocialBanner />
      <Hero />
      <AboutUs />
      <FeatureBanner />
      <TrainingProgram />
      <PowerOfRip />
      <ManBehindPr />
      <SuccessStories />
      <GymTourVideo />
    </div>
  );
};

export default LandingPage;
