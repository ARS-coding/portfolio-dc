import React from 'react'

import { Container } from "react-bootstrap";

import OtherProject from "../OtherProject";

import MovieWebsiteIMG from "../../images/movie-app.jpg";
import MMSWebsiteIMG from "../../images/mms-app.jpg";

import "./index.scss";

function OtherProjects() {
    return (
        <section className="other-projects-section container-fluid px-0 mt-5 mt-sm-5 mt-md-5 mt-lg-0">
            <Container className="other-projects-content-container px-0">
                <OtherProject 
                    title="OOP TMDB Website"
                    descriptionParagraph={
                        <p className="mb-4 mb-sm-4 mb-md-4 mb-lg-0">
                            With the help of the TMDB API,&nbsp;<a href="https://www.linkedin.com/in/ufuk-deniz-demirbilek-226636135/" target="_blank" rel="noreferrer">Ufuk Deniz Demirbilek</a> and me created this website with OOP principles. Website presents detailed data about large amount of movies in a user friendly manner.
                        </p>
                    }
                    image={MovieWebsiteIMG}
                    layout="normal"
                    index="0"
                    link="https://oop-tmdb-movie-website.web.app/"
                />
                <OtherProject 
                    title="MMS Website"
                    descriptionParagraph={
                        <p className="mb-4 mb-sm-4 mb-md-4 mb-lg-0">
                            Using different JS libraries,&nbsp;<a href="https://www.linkedin.com/in/mohammad-al-alaya/" target="_blank" rel="noreferrer">Mohammad Al-Alaya</a> and me created Meal Management System to organise daily given tasks to employees of a branch. Try our drag-and-drop menu to assign tasks!
                        </p>
                    }
                    image={MMSWebsiteIMG}
                    layout="reversed"
                    index="1"
                    link="https://mms-project-2a291.web.app/"
                />
            </Container>
        </section>
    )
}

export default OtherProjects
