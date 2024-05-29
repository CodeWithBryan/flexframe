import React from 'react';
import Hero from '../components/features/landing-page/Hero';
import AboutUs from '../components/features/landing-page/AboutUs';
import FeatureBanner from '../components/features/landing-page/FeatureBanner';
import PowerOfRip from '../components/features/landing-page/PowerOfRip';
import ManBehindPr from '../components/features/landing-page/ManBehindPr';
import SuccessStories from '../components/features/landing-page/SuccessStories';
import TrainingProgram from '../components/features/landing-page/TrainingProgram';
import GymTourVideo from '../components/features/landing-page/GymTourVideo';
import MemberShipPlane from '../components/features/landing-page/MemberShipPlane';
import OurSocialCircle from '../components/features/landing-page/OurSocialCircle';
import OurExpertTrainer from '../components/features/landing-page/OurExpertTrainer';
// import OurArticles from '../components/features/landing-page/OurArticles';
import CallToActionBanner from '../components/features/landing-page/CallToActionBanner';
import Footer from '../components/layout/LandingPage/Footer';
import SocialBanner from '../components/layout/LandingPage/SocialBanner';

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
      {/* <OurArticles /> */}
      <CallToActionBanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
