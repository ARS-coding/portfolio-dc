import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";

function OtherProject({ title, descriptionParagraph, image, layout }) {
    return (
        <section className="other-project-section container-fluid px-0 mb-5">
            <Container className="other-project-content-container px-0">
                <Row className="other-project-content-row d-flex align-items-center">
                    <Col xs={12} sm={12} md={12} lg={6} className="order">
                        <span>Web App</span>
                        <br />
                        <a href="https://oop-tmdb-movie-website.web.app/" target="_blank" rel="noreferrer">{title}</a>
                        {descriptionParagraph}
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <a href="https://oop-tmdb-movie-website.web.app/" target="_blank" rel="noreferrer">
                            <img src={image} className="img-fluid w-100 h-100" alt="movie website" /> 
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OtherProject
