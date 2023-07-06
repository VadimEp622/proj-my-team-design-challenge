import imgPerson from "../assets/images/icon-person.svg"
import imgCog from "../assets/images/icon-cog.svg"
import imgChart from "../assets/images/icon-chart.svg"

export function Home() {

    return (
        <section className="home-page-container">
            <section className="home-page">
                <section className="header-extension-container">
                    <section className="header-extension">
                        <article className="left">
                            <h1>Find the best <span>talent</span></h1>
                        </article>
                        <article className="right">
                            <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
                        </article>
                    </section>
                </section>
                <section className="info-container">
                    <section className="info">
                        <article className="left">
                            <h2>Build & manage distributed teams like no one else.</h2>
                        </article>
                        <article className="right">
                            <ul>
                                <li>
                                    <section className="item">
                                        <article className="img-container">
                                            <img src={imgPerson} alt="imgPerson"></img>
                                        </article>
                                        <article className="content-container">
                                            <h3>Experienced Individuals</h3>
                                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                                        </article>
                                    </section>
                                    <section className="item">
                                        <article className="img-container">
                                            <img src={imgCog} alt="imgCog"></img>
                                        </article>
                                        <article className="content-container">
                                            <h3>Easy to Implement</h3>
                                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                                        </article>
                                    </section>
                                    <section className="item">
                                        <article className="img-container">
                                            <img src={imgChart} alt="imgChart"></img>
                                        </article>
                                        <article className="content-container">
                                            <h3>Enhanced Productivity</h3>
                                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                                        </article>
                                    </section>
                                </li>
                            </ul>
                        </article>
                    </section>
                </section>
            </section>
        </section>
    )
}