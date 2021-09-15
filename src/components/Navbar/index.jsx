import React from 'react'

import { Container, Navbar, Nav } from "react-bootstrap";

import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import { ReactComponent as TwitterSVG } from "../../images/twitter.svg";

import "./index.scss";

function NavBar() {
    return (
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand href="#home">Ali Rıza Şahin</Navbar.Brand>
          
          <div className="ms-auto ms-sm-auto ms-md-auto ms-lg-0 me-lg-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
              <Nav>
                <Nav.Link href="#my-work">My Work</Nav.Link>
                <Nav.Link href="#my-skills">My Skills</Nav.Link>
                <Nav.Link href="#hire-me">Hire Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="social-header d-lg-flex justify-content-lg-center d-none d-sm-none d-md-none d-lg-block w-33">
            <a href="https://github.com/ARS-coding"><GitHubSVG /></a>
            <a href="https://www.linkedin.com/in/ars-coding/" className="mx-lg-5"><LinkedInSVG /></a>
            <a href="https://twitter.com/ARS_coding"><TwitterSVG /></a>
          </div>
        </Container>
      </Navbar>



      // <div className="nav-container">
      //   <header>
      //     <a href="#">Ali Rıza Şahin</a>

      //     <nav>
      //       <ul>
      //         <li>
      //           <a href="#my-work">My Work</a>
      //         </li>
      //         <li>
      //           <a href="#my-skills">My Skills</a>
      //         </li>
      //         <li>
      //           <a href="#hire-me">Hire Me</a>
      //         </li>
      //       </ul>
      //     </nav>
      //   </header>
        // <div className="social-header d-flex justify-content-center">
        //   <a href="https://github.com/ARS-coding"><GitHubSVG /></a>
        //   <a href="https://www.linkedin.com/in/ars-coding/"><LinkedInSVG /></a>
        //   <a href="https://twitter.com/ARS_coding"><TwitterSVG /></a>
        // </div>
      // </div>
    )
}

export default NavBar
