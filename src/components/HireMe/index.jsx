import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import { ReactComponent as TwitterSVG } from "../../images/twitter.svg";
import { ReactComponent as Envelope } from "../../images/envelope.svg";

import "./index.scss";

function HireMe() {

    const initialFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    };

    return (
        <section className="hire-me-section container-fluid px-0">
            <Container className="hire-me-content-container px-0">
                <h1>Contact Me</h1>
                
                <Row className="hire-me-content-row">
                    <Col xs={12} sm={12} md={12} lg={6} className="d-flex flex-lg-column justify-content-between align-items-center">
                        <GitHubSVG />
                        <LinkedInSVG />
                        <TwitterSVG />
                        <Envelope />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Formik
                            initialValues={initialFormValues}
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
                                if (!values.subject) {
                                    errors.subject = 'Required';
                                } else if (values.subject.length > 100) {
                                    errors.message = 'Not more than 100 characters';
                                }
                                if (!values.message) {
                                    errors.message = 'Required';
                                } else if (values.message.length > 8000) {
                                    errors.message = 'Not more than 8000 characters';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                resetForm(initialFormValues);
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2));
                                  setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({values}) => {
                                return (
                                    <Form>
                                        <div className="first-last-name d-flex">
                                            <div className="me-2 w-100">
                                                <span>First Name</span>
                                                <Field type="text" name="firstName" value={values.firstName} />
                                                <ErrorMessage component="div" name="firstName" />
                                            </div>
                                            <div className="w-100">
                                                <span>Last Name</span>
                                                <Field type="text" name="lastName" value={values.lastName} />
                                                <ErrorMessage component="div" name="lastName" />
                                            </div>
                                        </div>
                                        <div>
                                            <span>Email</span>
                                            <Field type="email" name="email" value={values.email} />
                                            <ErrorMessage component="div" name="email" />
                                        </div>
                                        <div>
                                            <span>Subject</span>
                                            <Field type="text" name="subject" value={values.subject} />
                                            <ErrorMessage component="div" name="subject" />
                                        </div>
                                        <div>
                                            <span>Message</span>
                                            <Field type="text" name="message" component="textarea" value={values.message} />
                                            <ErrorMessage component="div" name="message" />
                                        </div>
                                        <button type="submit">Send Email</button>
                                    </Form>
                                );
                            }}
                        </Formik>     
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HireMe;
