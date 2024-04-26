import React, { useEffect } from 'react'

import { Container } from "react-bootstrap";

import { gsap } from "gsap";

import HeroShapesSVG from "../../images/hero-shapes.svg";
import ScrollIconSVG from "../../images/scroll-icon.svg";

import "./index.scss";

function Hero() {
    
    useEffect(() => {
        if(window.innerWidth >= 992) {
            gsap.from(".hero-content-container", { duration: 1, opacity: .3, y: -20 })
            
            const timeline = gsap.timeline();
            timeline
            .from(".square-animation-scale", { duration: 1.5, y: -30, x: -30, scale: 0, ease: "expo", delay: 1 })
            .from(".square-animation-up", { duration: 1.2, y: 50, opacity: 0, stagger: .1 });
            
            gsap.fromTo(".meet-text, .hand, .scroll-svg",
                { duration: 1.5, y: -20, delay: 2.5 },
                { duration: 1.2, opacity: 1, y: 0, delay: 2.5 }
            );
        } 
        else {
            gsap.from(".hero-content-container", { duration: 1, opacity: .3, y: -20 })

            gsap.fromTo(".meet-text, .hand, .scroll-svg",
                { duration: 1.5, y: -20, delay: 1 },
                { duration: 1.2, opacity: 1, y: 0, delay: 1 }
            );
        }
    }, []);

    return (
        <section className="hero-section container-fluid px-3 px-sm-0 d-flex">
            <Container className="hero-content-container ms-lg-0 px-0 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="mx-auto"><span className="beautifully">Beautifully</span> Crafted<br/>Web Experiences</h1>
                    <div className="meet mx-auto">
                        <img src="/point-down.png" className="hand" alt="A hand pointing down" />
                        <p className="meet-text"><span>Meet</span> Ali Rıza Şahin</p>
                    </div>
                    <ScrollIconSVG className="scroll-svg mx-auto" />
                </div>
                
                <HeroShapesSVG className="d-none d-sm-none d-md-none d-lg-inline" />
            </Container>
        </section>
    )
}

export default Hero
