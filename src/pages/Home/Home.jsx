import React from "react";
import Hero from "./Hero/Hero";
import CTA from "../../components/CTA/CTA";
import Intro from "./Intro/Intro";
import Technologies from "./Technologies/Technologies";
import ContactsForm from "../Contacts/ContactsForm/ContactsForm";
import Projects from "./Projects/Projects";
import Carousel3D from "./Carousel3D/Carousel3D";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      {/* <Carousel3D /> */}
      <Projects />
      <Technologies />
      <ContactsForm />
      <CTA />
    </div>
  );
};

export default Home;
