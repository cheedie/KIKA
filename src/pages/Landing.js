import React from 'react';
import  Navbar  from '../components/landing-page/Navbar';
import  Hero  from '../components/landing-page/LandingHero';
import Footer from '../components/landing-page/Footer';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Landing;