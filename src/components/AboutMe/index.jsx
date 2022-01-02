import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, Row, Col } from "react-bootstrap";

import MyPicture from "../../images/my-picture.jpg";

import "./index.scss";

function AboutMe() {
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
            <p className="content-paragraph">
              Hello there! I'm Ali Rıza Şahin.
              <br />A 19 year old{" "}
              <em>Front End React &amp; Redux Web Developer</em> that tries to
              make the web better and more accessible place with the help of
              most recent technologies.
              <br />
              <br />I graduated from High School in June 2020 and coundn't get
              into the university that I wanted. I had the idea of preparing for
              it again but then I stumbled upon an ad of Re:Coded. I can
              honestly say that, one ad literally changed my life. I applied for
              the Front End Web Development bootcamp of Re:Coded and got
              selected although the <strong>7% selection rate</strong> and
              stopped preparing for the university. I completed this 5 months of
              bootcamp with <strong>43 classes</strong>,{" "}
              <strong>237 assignments</strong> that I have submitted and{" "}
              <strong>1100 contributions</strong> that I have done on{" "}
              <a
                href="https://github.com/ARS-coding"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
              <br />
              <br />I can't get enough of seeing the results of my code on the
              browser and it's literally the <em>best feeling</em> in the world!
              <br />
              I'm just really <em>happy and grateful</em> that I found the thing
              that I would look forward to do after I wake up <em>everyday</em>.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
