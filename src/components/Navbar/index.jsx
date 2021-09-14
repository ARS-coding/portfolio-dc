import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

function Navbar() {
    return (
        <Container fluid className="navbar-container">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>left header</Col>
                <Col xs={12} sm={12} md={6} lg={6}>right header</Col>
            </Row>
        </Container>
    )
}

export default Navbar
