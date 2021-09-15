import React from 'react'

import { Container } from "react-bootstrap";

import PointDownIMG from "../../images/point-down.png";
import { ReactComponent as HeroShapesSVG } from "../../images/hero-shapes.svg";

import "./index.scss";

function Hero() {
    return (
        <Container fluid className="hero px-3 px-sm-0">
            <Container className="hero-content">
                <div className="content">
                    <h1>Beautifully Created Web Experiences</h1>
                    <div className="meet">
                        <img src={PointDownIMG} alt="A hand pointing down" />
                        <p>Meet Ali Rıza Şahin</p>
                    </div>

                    {/* add scrolling icon svg */}
                </div>
                
                <HeroShapesSVG />
            </Container>
        </Container>
    )
}

export default Hero
