import React from 'react'

import { Col, Card } from "react-bootstrap";

import "./index.scss";

function SkillCard({ Image, title, text }) {
    return (
        <Col lg={3} className="skill-card-column">
            <Card style={{ width: '18rem' }}>
                {<Image />}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SkillCard
