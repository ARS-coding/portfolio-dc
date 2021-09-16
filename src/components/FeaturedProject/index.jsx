import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import LTNMockupImage from "../../images/LTN-mockup-image.jpg"

import "./index.scss";

function FeaturedProject() {
    return (
        <Container fluid className="featured-project-section">
            <Container className="featured-project-content-container">
                <Row className="featured-project-content-row d-flex justify-content-center align-items-center">
                    <Col>
                        <span>Featured Project</span>
                        <br/>
                        <a href="https://lovethyneighbor.netlify.app/" target="_blank" rel="noreferrer">Love Thy Neighbor</a>
                        <p><span>Love Thy Neighbor</span> helps people to find neighbors nearby and invite them to an event so they could build a dynamic community that uplifts each other.</p>
                    </Col>
                    <Col>
                        <img src={LTNMockupImage} alt="Love Thy Neighbor mockup" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FeaturedProject
