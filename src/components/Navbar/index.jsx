import React from 'react'

import { Container, Navbar, Nav } from "react-bootstrap";

import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import { ReactComponent as TwitterSVG } from "../../images/twitter.svg";

import "./index.scss";

function NavBar() {
    return (
      <div className="nav-container">
        <header>
          <a href="#">Ali Rıza Şahin</a>

          <nav>
            <ul>
              <li>
                <a href="#my-work">My Work</a>
              </li>
              <li>
                <a href="#my-skills">My Skills</a>
              </li>
              <li>
                <a href="#hire-me">Hire Me</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="social-header d-flex justify-content-center">
          <a href="https://github.com/ARS-coding"><GitHubSVG /></a>
          <a href="https://www.linkedin.com/in/ars-coding/"><LinkedInSVG /></a>
          <a href="https://twitter.com/ARS_coding"><TwitterSVG /></a>
        </div>
      </div>
    )
}

export default NavBar
