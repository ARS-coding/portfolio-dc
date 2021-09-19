import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import MovieWebsiteIMG from "../../images/movie-app.jpg";

import "./index.scss";

function OtherProject() {
    return (
        <section className="other-project-section container-fluid px-0">
            <Container className="other-project-content-container px-0">
                <Row className="other-project-content-row d-flex align-items-center">
                    <Col>
                        <span>Web App</span>
                        <br />
                        <a href="https://oop-tmdb-movie-website.web.app/" target="_blank" rel="noreferrer">OOP TMDB Website</a>
                        <p>With the help of the TMDB API, <a href="https://www.linkedin.com/in/ufuk-deniz-demirbilek-226636135/" target="_blank" rel="noreferrer">Ufuk Deniz Demirbilek</a> and me created this website with OOP principles. Website presents detailed data about large amount of movies in a user friendly manner and enables users to learn more about the spesific movie.</p>
                    </Col>
                    <Col>
                        <a href="https://oop-tmdb-movie-website.web.app/" target="_blank" rel="noreferrer">
                            <img src={MovieWebsiteIMG} className="img-fluid w-100 h-100" alt="movie website" /> 
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OtherProject
