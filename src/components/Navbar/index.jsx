import React, { useEffect } from 'react'

import { gsap } from "gsap";

import { Container, Navbar } from "react-bootstrap";

import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import { ReactComponent as TwitterSVG } from "../../images/twitter.svg";
import { ReactComponent as FullName16 } from "../../images/full-name-16.svg";
import { ReactComponent as FullName20 } from "../../images/full-name-20.svg";

import "./index.scss";

function NavBar() {

  useEffect(() => {
    gsap.from(".name", { duration: 2, opacity: 0 })
    gsap.from(".navlink", { duration: .7, opacity: 0, y: -20, stagger: .2, ease: "power1", delay: 1 })
    gsap.from(".nav-social-icon", { duration: .7, opacity: 0, y: 20, stagger: .2, ease: "power1", delay: 2.5 })
  }, []);

    return (
      <Navbar expand="xs" className="px-3 px-sm-0">
        <Container className="px-2 px-sm-0">
          <Container className="d-flex px-0">
            <a href="#home">
              {window.innerWidth > 993 ? <FullName20 className="name" /> : <FullName16 className="name" />}
            </a>
            
            <div className="ms-auto me-0 me-sm-3">
              <nav>
                <a href="#work" className="navlink">Work</a>
                <a href="#skills" className="navlink mx-2 mx-sm-3">Skills</a>
                <a href="#contact-me" className="navlink">Contact Me</a>
              </nav>
            </div>
          </Container>

          <div className="social-header d-lg-flex justify-content-lg-center d-none d-sm-none d-md-none d-lg-block w-33 d-flex justify-content-center align-items-center">
            <a href="https://github.com/ARS-coding" target="_blank" rel="noreferrer" className="nav-social-icon"><GitHubSVG /></a>
            <a href="https://www.linkedin.com/in/ars-coding/" target="_blank" rel="noreferrer" className="nav-social-icon mx-lg-5"><LinkedInSVG /></a>
            <a href="https://twitter.com/ARS_coding" target="_blank" rel="noreferrer" className="nav-social-icon"><TwitterSVG /></a>
          </div>
        </Container>
      </Navbar>
    )
}

export default NavBar
