import React from 'react'

import { Container, Row } from "react-bootstrap";

import { ReactComponent as ResponsiveIconSVG } from "../../images/responsive-icon.svg";
import { ReactComponent as JSIconSVG } from "../../images/JS-icon.svg";
import { ReactComponent as ReactIcon } from "../../images/react-icon.svg";
import { ReactComponent as ReduxIcon } from "../../images/redux-icon.svg";

import SkillCard from "../SkillCard";

import "./index.scss";

function Skills() {
    return (
        <section className="skills-section container-fluid">
            <Container className="skills-content-container px-0">
                <Row className="skills-content-row">
                    <SkillCard 
                        Image={ResponsiveIconSVG} 
                        title="Responsive Design" 
                        text="Fluency in creating accessible and responsive websites with the help of most up to date technologies."
                    />
                    <SkillCard Image={JSIconSVG} 
                        title="JavaScript"
                        text="A good grip of ES6, using external RESTful APIs, OOP, and JavaScript fundamentals by building projects."
                    />
                    <SkillCard 
                        Image={ReactIcon}
                        title="React"
                        text="Hands-on practiced knowledge in separation of concerns, component oriented thinking, hooks and JSX."
                    />
                    <SkillCard 
                        Image={ReduxIcon}
                        title="Redux"
                        text="Confident in managing and enhancing the data flow of an app by creating meaningful data structures."
                    />
                </Row>
            </Container>
        </section>
    )
}

export default Skills
