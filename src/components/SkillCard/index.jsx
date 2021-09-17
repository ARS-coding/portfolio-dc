import React from 'react'

import { Col, Card } from "react-bootstrap";

import "./index.scss";

function SkillCard({ Image, title, text }) {
    return (
        <Col xs={12} sm={12} md={6} lg={3} className="skill-card-column">
            <Card className="d-flex flex-column justify-content-center mx-2 mb-3">
                {<Image />}
                <div className="pt-2 px-3">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </div>
            </Card>
        </Col>
    )
}

export default SkillCard
