import { GetStarted } from "../cmps/app-get-started"
import { HomeExample } from "../cmps/home/home-example"
import { HomeHeaderExtension } from "../cmps/home/home-header-extension"
import { HomeInfo } from "../cmps/home/home-info"

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