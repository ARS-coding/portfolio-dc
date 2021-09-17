import React from 'react'

import { Col, Card } from "react-bootstrap";

import "./index.scss";

function SkillCard({ Image, title, text, className }) {
    return (
        <Col xs={12} sm={12} md={6} lg={3} className={`skill-card-column ${className}`}>
            <Card className="d-flex flex-column justify-content-center mx-2 mb-3 mb-sm-3 mb-md-3 mb-lg-0">
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
