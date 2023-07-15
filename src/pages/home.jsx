// import avatarKady from "../assets/images/avatar-kady.jpg"
// import avatarAiysha from "../assets/images/avatar-aiysha.jpg"
// import avatarArthur from "../assets/images/avatar-arthur.jpg"

import { GetStarted } from "../cmps/app-get-started"
import { HomeExample } from "../cmps/home/home-example"
import { HomeHeaderExtension } from "../cmps/home/home-header-extension"
import { HomeInfo } from "../cmps/home/home-info"

export function Home() {

    return (
        <section className="home-page-container">
            <section className="home-page">
                <HomeHeaderExtension />
                <HomeInfo />
                <HomeExample />
                <GetStarted />
            </section>
        </section>
    )
}