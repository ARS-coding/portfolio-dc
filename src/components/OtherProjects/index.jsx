import React from 'react'

import { Container } from "react-bootstrap";

import OtherProject from "../OtherProject";

import "./index.scss";

function OtherProjects() {
    return (
        <section className="other-projects-section container-fluid px-0">
            <Container className="other-projects-content-container px-0">
                <OtherProject />
            </Container>
        </section>
    )
}

export default OtherProjects
