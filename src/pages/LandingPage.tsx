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
import MemberShipPlane from '../components/LandingPage/MemberShipPlane';
import OurSocialCircle from '../components/LandingPage/OurSocialCircle';
import OurExpertTrainer from '../components/LandingPage/OurExpertTrainer';
import OurArticles from '../components/LandingPage/OurArticles';
import CallToActionBanner from '../components/LandingPage/CallToActionBanner';
import Footer from '../components/shared/Footer/Footer';

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
      <MemberShipPlane />
      <OurSocialCircle />
      <OurExpertTrainer />
      <OurArticles />
      <CallToActionBanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
