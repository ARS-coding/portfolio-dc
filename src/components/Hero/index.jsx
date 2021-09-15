import React from 'react'

import PointDownIMG from "../../images/point-down.png";
import { ReactComponent as HeroShapesSVG } from "../../images/hero-shapes.svg";

import "./index.scss";

function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <h1>Beautifully Created Web Experiences</h1>
                <div className="meet">
                    <img src={PointDownIMG} alt="A hand pointing down" />
                    <p>Meet Ali Rıza Şahin</p>
                </div>

                {/* add scrolling icon svg */}
            </div>
            
            <HeroShapesSVG />
        </div>
    )
}

export default Hero
