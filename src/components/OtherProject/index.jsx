import React, { useEffect } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";

function OtherProject({ title, descriptionParagraph, image, layout, index, link }) {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(`.first-column-${index}`,
            { 
                x: -100,
                opacity: 0,
            },
            {
                duration: 2.5,
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: `.first-column-${index}`,
                    toggleActions: "play none none pause",
                    start: "50% bottom"
                }
            }
        );
        gsap.fromTo(`.last-column-${index}`,
        { 
            x: 100,
            opacity: 0,
        },
        {
            duration: 2.5,
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: `.first-column-${index}`,
                toggleActions: "play none none pause",
                start: "50% bottom"
            }
        }
    );
    }, [index]);

    return (
        <section className="other-project-section container-fluid px-0 mb-5">
            <Container className="other-project-content-container px-0">
                <Row className="other-project-content-row d-flex align-items-center">
                    <Col xs={12} sm={12} md={12} lg={6} className={`${layout === "normal" ? `first-column-${index} order-lg-first pe-0 pe-sm-0 pe-md-0 pe-lg-5` : `last-column-${index} order-lg-last ps-0 ps-sm-0 ps-md-0 ps-lg-5`}`}>
                        <span>Web App</span>
                        <br />
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                        {descriptionParagraph}
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className={`column ${layout === "normal" ? `last-column-${index} order-lg-last` : `first-column-${index} order-lg-first`}`}>
                        <a href={link} target="_blank" rel="noreferrer">
                            <img src={image} className="img-fluid w-100 h-100" alt="movie website" /> 
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OtherProject
