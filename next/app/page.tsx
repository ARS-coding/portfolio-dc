"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TeamProject } from "./components/TeamProject";
import { Skills } from "./components/Skills";
import { OtherProjects } from "./components/OtherProjects";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      {/* <TeamProject />
      <Skills />
      <OtherProjects />
      <AboutMe />
      <ContactMe /> */}
    </main>
  );
}
