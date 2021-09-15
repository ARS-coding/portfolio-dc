import React from 'react'

import { Container } from "react-bootstrap";

import PointDownIMG from "../../images/point-down.png";
import { ReactComponent as HeroShapesSVG } from "../../images/hero-shapes.svg";
import { ReactComponent as ScrollIconSVG } from "../../images/scroll-icon.svg";

import "./index.scss";

function Hero() {
    return (
        <Container fluid className="hero-container px-3 px-sm-0 d-flex">
            <Container className="hero-content-container ms-lg-0 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="mx-auto"><span>Beautifully</span> Crafted<br/>Web Experiences</h1>
                    <div className="meet mx-auto">
                        <img src={PointDownIMG} alt="A hand pointing down" />
                        <p><span>Meet</span> Ali Rıza Şahin</p>
                    </div>
                    <ScrollIconSVG className="mx-auto" />
                </div>
                
                <HeroShapesSVG className="d-none d-sm-none d-md-none d-lg-inline" />
            </Container>
        </Container>
    )
}

export default Hero
