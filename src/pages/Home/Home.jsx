import React from 'react'
import Hero from './Hero/Hero'
import CTA from '../../components/CTA/CTA'
import Intro from './Intro/Intro'
import Technologies from "./Technologies/Technologies";
import ContactsForm from '../Contacts/ContactsForm/ContactsForm';


const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Technologies />
      <ContactsForm/>
      <CTA />
    </div>
  );
};

export default Home;
