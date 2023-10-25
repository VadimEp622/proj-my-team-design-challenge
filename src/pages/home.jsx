import { HomeHeaderExtension } from "../cmps/home/home-header-extension"
import { HomeInfo } from "../cmps/home/home-info"
import { HomeExample } from "../cmps/home/home-example"
import { GetStarted } from "../cmps/_reusable/app-get-started"

export function Home() {

    return (
        <section className="home-page full main-layout">
            <HomeHeaderExtension />
            <HomeInfo />
            <HomeExample />
            <GetStarted />
        </section>
    )
}