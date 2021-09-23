import React, { useEffect } from 'react'

import GitHubCalendar from "github-calendar";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "react-bootstrap";

import "./index.scss";

function GithubCalendar() {

    useEffect(() => {
        GitHubCalendar(".github-calendar-container", "ARS-coding", { responsive: true });

        setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.from(".graph-before-activity-overview",
                {
                    duration: 1.5,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: ".graph-before-activity-overview",
                        toggleActions: "play none none pause",
                        start: "30% bottom"
                    }
                }
            )
            gsap.from(".contrib-column",
            {
                delay: .6,
                duration: 1,
                stagger: .2,
                opacity: 0,
                y: 60,
                scrollTrigger: {
                    trigger: ".contrib-column",
                    toggleActions: "restart none none pause",
                    start: "30% bottom"
                }
            }
        )
        }, 300)
    }, []);


    return (
        <section className="github-calendar-section container-fluid px-0 overflow-hidden mt-4">
            <Container className="github-calendar-container px-0">
            </Container>
        </section>
    )
}

export default GithubCalendar
