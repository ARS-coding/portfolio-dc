import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, Row, Col } from "react-bootstrap";

import MyPicture from "../../images/my-picture-1.jpg";

import "./index.scss";

export function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 992) {
      gsap.from(".my-picture", {
        duration: 1.8,
        opacity: 0,
        x: -110,
        scrollTrigger: {
          trigger: ".about-me-content-row",
          toggleActions: "play none none pause",
          start: "35% bottom",
        },
      });
    }
    gsap.fromTo(
      ".me-in-a-nutshell, .content-paragraph",
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1.8,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".about-me-content-row",
          toggleActions: "play none none none",
          start: "35% bottom",
        },
      }
    );
    gsap.from(".who-am-i", {
      delay: 1.5,
      duration: 3,
      opacity: 0,
      x: 110,
      scrollTrigger: {
        trigger: ".about-me-content-row",
        toggleActions: "play none none pause",
        start: "35% bottom",
      },
    });
  }, []);

  return (
    <section className="about-me-section container-fluid px-3 px-sm-0 mt-5">
      <Container className="about-me-content-container px-0">
        <Row className="about-me-content-row">
          <Col xs={12} sm={12} md={12} lg={6}>
            <img src={MyPicture} className="img-fluid my-picture" alt="me" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <span className="who-am-i">Who Am I ?!</span>
            <h1 className="me-in-a-nutshell">Me In a Nutshell...</h1>

            <div className="content-paragraph">
              <p>
                A 22 year old product-oriented Software Engineer with a solid understanding of web programming
                fundamentals and software development methodologies such as agile and scrum.
              </p>
              <br />
              <p>
                I graduated from high school in June 2020 and coundn't get into the university that I wanted. I decided
                not to prepare for the exam again when I stumbled upon{" "}
                <a href="https://www.re-coded.com/" target="_blank" rel="noreferrer">
                  Re:Coded
                </a>
                . I applied for their Front End Web Development bootcamp and got selected although the{" "}
                <strong>7% selection rate</strong>. I completed this 5 months of bootcamp with{" "}
                <strong>43 classes</strong>, <strong>237 assignments</strong> that I have submitted and{" "}
                <strong>1100 contributions</strong> that I have done on{" "}
                <a href="https://github.com/arsahindev" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
