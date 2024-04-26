import React, { useEffect } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, Row } from "react-bootstrap";

import ResponsiveIconSVG from "../../images/responsive-icon.svg";
import JSIconSVG from "../../images/JS-icon.svg";
import ReactIcon from "../../images/react-icon.svg";
import ReduxIcon from "../../images/redux-icon.svg";

import SkillCard from "../SkillCard";

import "./index.scss";

function Skills() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth >= 992) {
            gsap.from(".skill-card-column",
                { 
                    duration: 1.5,
                    y: 50,
                    opacity: 0,
                    stagger: .4,
                    scrollTrigger: {
                        trigger: ".skill-card-column",
                        toggleActions: "play none none pause",
                        start: "35% bottom"
                    }
                }
            );
        }
        else {
            function animateSkillCardColumns() {
                const skillCardColumns = document.querySelectorAll(".skill-card-column");
                
                skillCardColumns.forEach((skillCardColumn, index) => {
                    gsap.from(`.skill-card-column-${index}`,
                        { 
                            duration: 2.7,
                            x: (index % 2) === 0 ? -100 : 100,
                            scrollTrigger: {
                                trigger: `.skill-card-column-${index}`,
                                toggleActions: "play none none pause",
                                start: "40% bottom"
                            }
                        }
                    )
                })
            }
            animateSkillCardColumns()
        }
    }, [])

    return (
        <section id="skills" className="skills-section container-fluid px-0">
            <Container className="skills-content-container px-0">
                <Row className="skills-content-row">
                    <SkillCard 
                        Image={ResponsiveIconSVG} 
                        title="Responsiveness" 
                        text="Fluency in creating accessible and responsive websites with the help of most up to date technologies."
                        className="skill-card-column-0"
                    />
                    <SkillCard Image={JSIconSVG} 
                        title="JavaScript"
                        text="A good grip of ES6, using external RESTful APIs, OOP, and JavaScript fundamentals by building projects."
                        className="skill-card-column-1"
                    />
                    <SkillCard 
                        Image={ReactIcon}
                        title="React"
                        text="Hands-on practiced knowledge in separation of concerns, component oriented thinking, hooks and JSX."
                        className="skill-card-column-2"
                    />
                    <SkillCard 
                        Image={ReduxIcon}
                        title="Redux"
                        text="Confident in managing and enhancing the data flow of an app by creating meaningful data structures."
                        className="skill-card-column-3"
                    />
                </Row>
            </Container>
        </section>
    )
}

export default Skills
