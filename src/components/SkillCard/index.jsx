import React from 'react'

import { Col, Card } from "react-bootstrap";

import "./index.scss";

function SkillCard({ Image, title, text }) {
    return (
        <Col xs={12} sm={12} md={6} lg={3} className="skill-card-column">
            <Card>
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
