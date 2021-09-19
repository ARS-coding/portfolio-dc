import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import MyPicture from "../../images/my-picture.jpg";

import "./index.scss";

function HireMe() {
    return (
        <section className="hire-me-section container-fluid px-0 mt-5">
            <Container className="hire-me-content-container px-0">
                <Row className="hire-me-content-row">
                    <Col>
                        <img src={MyPicture} className="img-fluid" alt="me" />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HireMe