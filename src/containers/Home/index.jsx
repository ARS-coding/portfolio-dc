import React from 'react'

import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedProject from '../../components/FeaturedProject';
import Skills from "../../components/Skills";
import OtherProjects from "../../components/OtherProjects";
import GithubCalendar from "../../components/GithubCalendar";
import AboutMe from "../../components/AboutMe";

function Home() {
    return (
        <Container fluid className="p-0">
            <Navbar />
            <Hero />
            <FeaturedProject />          
            <Skills />
            <OtherProjects />
            <GithubCalendar />
            <AboutMe />
        </Container>
    )
}

export default Home
