import React from 'react'

import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedProject from '../../components/FeaturedProject';

function Home() {
    return (
        <Container fluid>
            <Navbar />
            <Hero />
            <FeaturedProject />          
        </Container>
    )
}

export default Home
