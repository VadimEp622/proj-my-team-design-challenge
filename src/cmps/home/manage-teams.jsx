import imgPerson from "../../assets/images/icon-person.svg"
import imgCog from "../../assets/images/icon-cog.svg"
import imgChart from "../../assets/images/icon-chart.svg"
import bgPatternHome3 from "../../assets/images/bg-pattern-home-3.svg"

export function ManageTeams() {

    return (
        <section className="manage-teams-container full main-layout">
            <section className="bg-pattern bg-pattern-home-3">
                <img src={bgPatternHome3} alt="bgPatternHome3" />
            </section>
            <section className="manage-teams">
                <section className="title">
                    <h2>Build & manage distributed teams like no one else.</h2>
                </section>
                <ul className="list">
                    <li className="item">
                        <section className="img-container">
                            <img src={imgPerson} alt="imgPerson"></img>
                        </section>
                        <section className="content-container">
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </section>
                    </li>
                    <li className="item">
                        <section className="img-container">
                            <img src={imgCog} alt="imgCog"></img>
                        </section>
                        <section className="content-container">
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </section>
                    </li>
                    <li className="item">
                        <section className="img-container">
                            <img src={imgChart} alt="imgChart"></img>
                        </section>
                        <section className="content-container">
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </section>
                    </li>
                </ul>
            </section>
        </section>
    )
}