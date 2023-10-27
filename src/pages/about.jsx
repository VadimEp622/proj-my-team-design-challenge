import { GetStarted } from "../cmps/_reusable/app-get-started"
import { AboutIntro } from "../cmps/about/about-intro"

export function About() {

    return (
        <section className="about-page full main-layout">
            <AboutIntro />
            <GetStarted />
        </section>
    )
}