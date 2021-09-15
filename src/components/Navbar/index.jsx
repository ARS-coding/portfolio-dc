import React from 'react'

import { Container, Navbar } from "react-bootstrap";

import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import { ReactComponent as TwitterSVG } from "../../images/twitter.svg";

import "./index.scss";

function NavBar() {
    return (
      <Navbar expand="xs" className="px-3 px-sm-0">
        <Container>
          <Container className="d-flex">
            <a href="#home">Ali Rıza Şahin</a>
            
            <div className="ms-auto me-0 me-sm-3">
              <nav>
                <a href="#my-work">My Work</a>
                <a href="#my-skills" className="mx-2 mx-sm-3">My Skills</a>
                <a href="#hire-me">Hire Me</a>
              </nav>
            </div>
          </Container>

          <div className="social-header d-lg-flex justify-content-lg-center d-none d-sm-none d-md-none d-lg-block w-33 d-flex justify-content-center align-items-center">
            <a href="https://github.com/ARS-coding"><GitHubSVG /></a>
            <a href="https://www.linkedin.com/in/ars-coding/" className="mx-lg-5"><LinkedInSVG /></a>
            <a href="https://twitter.com/ARS_coding"><TwitterSVG /></a>
          </div>
        </Container>
      </Navbar>
    )
}

export default NavBar
