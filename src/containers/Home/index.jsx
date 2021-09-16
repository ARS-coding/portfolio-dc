import React from 'react'

import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedProject from '../../components/FeaturedProject';
import Skills from "../../components/Skills";

function Home() {
    return (
        <Container fluid>
            <Navbar />
            <Hero />
            <FeaturedProject />          
            <Skills />
        </Container>
    )
}

export default Home
