import React from 'react'
import Hero from './Hero/Hero'
import CTA from '../../components/CTA/CTA'
import Intro from './Intro/Intro'
import Technologies from "./Technologies/Technologies";


const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Technologies />
      <CTA />
    </div>
  );
};

export default Home;
