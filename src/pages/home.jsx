import imgPerson from "../assets/images/icon-person.svg"
import imgCog from "../assets/images/icon-cog.svg"
import imgChart from "../assets/images/icon-chart.svg"

import avatarKady from "../assets/images/avatar-kady.jpg"
import avatarAiysha from "../assets/images/avatar-aiysha.jpg"
import avatarArthur from "../assets/images/avatar-arthur.jpg"

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

                <section className="example-container">
                    <section className="example">
                        <section className="title">
                            <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                        </section>
                        <section className="list">
                            <ul>
                                <li>
                                    <article className="item">
                                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                                        <h3>Kady Baker</h3>
                                        <h4>Product Manager at Bookmark</h4>
                                        <img src={avatarKady} alt="avatarKady" />
                                    </article>
                                    <article className="item">
                                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                                        <h3>Aiysha Reese</h3>
                                        <h4>Founder of Manage</h4>
                                        <img src={avatarAiysha} alt="avatarAiysha" />
                                    </article>
                                    <article className="item">
                                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                                        <h3>Arthur Clarke</h3>
                                        <h4>Co-founder of MyPhysio</h4>
                                        <img src={avatarArthur} alt="avatarArthur" />
                                    </article>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}