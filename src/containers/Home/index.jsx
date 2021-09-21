import React from 'react'

import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import TeamProject from '../../components/TeamProject';
import Skills from "../../components/Skills";
import OtherProjects from "../../components/OtherProjects";
import GithubCalendar from "../../components/GithubCalendar";
import AboutMe from "../../components/AboutMe";
import HireMe from "../../components/HireMe";

function Home() {
    return (
        <Container fluid className="p-0">
            <Navbar />
            <Hero />
            <TeamProject />          
            <Skills />
            <OtherProjects />
            <GithubCalendar />
            <AboutMe />
            <HireMe />
        </Container>
    )
}

export default Home
