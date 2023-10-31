import { HomeFindTalent } from "../cmps/home/home-find-talent"
import { ManageTeams } from "../cmps/home/manage-teams"
import { SuccessStories } from "../cmps/home/success-stories"
import { GetStarted } from "../cmps/_reusable/app-get-started"

export function Home() {

    return (
        <section className="home-page full main-layout">
            <HomeFindTalent />
            <ManageTeams />
            <SuccessStories />
            <GetStarted />
        </section>
    )
}