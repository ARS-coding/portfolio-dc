import React, { useEffect } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, Row, Col } from "react-bootstrap";

import LTNMockupImage from "../../images/LTN-mockup-image.jpg"

import "./index.scss";

function FeaturedProject() {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".column-left",
            {  
                x: -100,
                duration: 2.7,
                scrollTrigger: {
                    trigger: ".featured-project-content-row", toggleActions: "play none none pause", start: "29% bottom" 
                } 
            }
        );
        gsap.from(".column-right",
            { 
                scrollTrigger: { 
                    trigger: ".featured-project-content-row", toggleActions: "play none none pause", start: "29% bottom" 
                }, 
                x: 100,
                duration: 2.7, 
            }
        );
    }, []);

    return (
        <section className="featured-project-section container-fluid my-4 my-sm-4 my-md-4 my-lg-0">
            <Container className="featured-project-content-container">
                <Row className="featured-project-content-row d-flex justify-content-center align-items-center">
                    <Col className="column-left" xs={12} sm={12} md={12} lg={6}>
                        <span>Featured Project</span>
                        <br/>
                        <a href="https://lovethyneighbor.netlify.app/" target="_blank" rel="noreferrer">Love Thy Neighbor</a>
                        <p className="text-center text-sm-center text-md-center text-lg-start"><span>Love Thy Neighbor</span> helps people to find neighbors nearby and invite them to an event so they could build a dynamic community that uplifts each other.</p>
                    </Col>
                    <Col className="column-right" xs={12} sm={12} md={12} lg={6}>
                        <a href="https://lovethyneighbor.netlify.app/" target="_blank" rel="noreferrer">
                            <img src={LTNMockupImage} className="img-fluid" alt="Love Thy Neighbor mockup" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FeaturedProject
