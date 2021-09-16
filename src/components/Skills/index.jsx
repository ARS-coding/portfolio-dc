import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

function Skills() {
    return (
        <section className="skills-section container fluid">
            <Container className="skills-content-container">
                <Row className="skills-content-row">
                    <Col>
                        <p>card one</p>
                    </Col>
                    <Col>
                        <p>card two</p>
                    </Col>
                    <Col>
                        <p>card three</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills
