import { HomeFindTalent } from "../cmps/home/home-find-talent"
import { HomeInfo } from "../cmps/home/home-info"
import { SuccessStories } from "../cmps/home/success-stories"
import { GetStarted } from "../cmps/_reusable/app-get-started"

export function Home() {

    return (
        <section className="home-page full main-layout">
            <HomeFindTalent />
            <HomeInfo />
            <SuccessStories />
            <GetStarted />
        </section>
    )
}