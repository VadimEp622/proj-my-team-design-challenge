import { GetStarted } from "../cmps/_reusable/get-started"
import { AboutIntro } from "../cmps/about/about-intro"
import { ClientExamples } from "../cmps/about/client-examples"
import { MeetDirectors } from "../cmps/about/meet-directors"

export function About() {

    return (
        <section className="about-page full main-layout">
            <AboutIntro />
            <MeetDirectors />
            <ClientExamples />
            <GetStarted />
        </section>
    )
}