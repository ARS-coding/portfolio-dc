import React from 'react'

import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

function Home() {
    return (
        <Container fluid>
            <Navbar />
            <Hero />            
        </Container>
    )
}

export default Home
