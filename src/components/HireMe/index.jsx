import React, { useState } from 'react'

import { Container, Row, Col, Alert } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import { ReactComponent as TwitterSVG } from "../../images/twitter.svg";
import { ReactComponent as Envelope } from "../../images/envelope.svg";

import { send } from "emailjs-com";

import "./index.scss";

function HireMe() {

    const [isEmailSentAlertOpen, setIsEmailSentAlertOpen] = useState(true);

    const initialFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    };

    return (
        <section className="hire-me-section container-fluid px-3 px-sm-0">
            <Container className="hire-me-content-container px-0">
                <h1>Contact Me</h1>
                
                <Row className="hire-me-content-row">
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="d-flex flex-lg-column justify-content-between align-items-center order-last order-lg-first">
                            <a href="https://github.com/ARS-coding" target="_blank" rel="noreferrer">
                                <GitHubSVG />
                            </a>
                            <a href="https://www.linkedin.com/in/ars-coding/" target="_blank" rel="noreferrer">
                                <LinkedInSVG />
                            </a>
                            <a href="https://twitter.com/ARS_coding" target="_blank" rel="noreferrer">
                                <TwitterSVG />
                            </a>
                            <a href="mailto:arsahin.dev@gmail.com" target="_blank" rel="noreferrer">
                                <Envelope />
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className="order-first order-lg-last">
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
                            onSubmit={(values, { resetForm }) => {
                                resetForm(initialFormValues);
                                
                                const templateParams = {
                                    from_full_name: `${values.firstName} ${values.lastName}`,
                                    from_email: values.email,
                                    subject: values.subject,
                                    message: values.message
                                };
                                send("service_ssh5sd8", "template_r3votmc", templateParams);
                            }}
                        >
                            {({values}) => {
                                return (
                                    <Form>
                                        <div className="first-last-name d-flex flex-column flex-sm-row">
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
                        {(isEmailSentAlertOpen && window.innerWidth < 992) && (
                            <Alert 
                                variant="success"
                                onClick={() => setIsEmailSentAlertOpen(false)} 
                                dismissible 
                            >Your email has been successfully sent!</Alert>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HireMe;
