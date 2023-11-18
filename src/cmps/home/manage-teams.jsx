import bgPatternHome3 from "../../assets/images/bg-pattern-home-3.svg"
import { TeamQualityList } from "../_reusable/_lists/team-quality-list"
import { teamQualities } from "../../services/data.service"

export function ManageTeams() {

    return (
        <section className="manage-teams-container full main-layout pos-rel overflow-hidden bg-clr-teal-2">
            <section className="bg-pattern bg-pattern-home-3 pos-abs right-neg-100px">
                <img src={bgPatternHome3} alt="bgPatternHome3" />
            </section>
            <section className="manage-teams">
                <section className="title">
                    <h2>Build & manage distributed teams like no one else.</h2>
                </section>
                <TeamQualityList teamQualities={teamQualities} />
            </section>
        </section>
    )
}