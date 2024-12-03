import React from "react";

import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import TeamProject from "../../components/TeamProject";
import Skills from "../../components/Skills";
import OtherProjects from "../../components/OtherProjects";
import AboutMe from "../../components/AboutMe";
import ContactMe from "../../components/ContactMe";

function Home() {
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Hero />
      <TeamProject />
      <Skills />
      <OtherProjects />
      <AboutMe />
      <ContactMe />
    </Container>
  );
}

export default Home;
