import { GetStarted } from "../cmps/_reusable/app-get-started"
import { AboutIntro } from "../cmps/about/about-intro"
import { MeetDirectors } from "../cmps/about/meet-directors"

export function About() {

    return (
        <section className="about-page full main-layout">
            <AboutIntro />
            <MeetDirectors />
            <GetStarted />
        </section>
    )
}