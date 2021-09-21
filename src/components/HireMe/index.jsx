import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import { Formik } from "formik";

import "./index.scss";

function HireMe() {
    return (
        <section className="hire-me-section container-fluid px-0">
            <Container className="hire-me-content-container px-0">
                <Row className="hire-me-content-row">
                    <Col>
                        
                    </Col>
                    <Col>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                message: ""
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.firstName) {
                                  errors.firstName = 'Required';
                                }
                                if (!values.lastName) {
                                    errors.lastName = 'Required';
                                  }
                                if (!values.email) {
                                  errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                  errors.email = 'Invalid email address';
                                }
                                if (!values.message) {
                                    errors.message = 'Required';
                                } else if (values.message.length > 8000) {
                                    errors.message = 'Cannot put more that 8000 characters';
                                }
                                return errors;
                            }}
                        >
                            
                        </Formik>     
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HireMe;
