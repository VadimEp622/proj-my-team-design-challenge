import avatarKady from "../../assets/images/avatar-kady.jpg"
import avatarAiysha from "../../assets/images/avatar-aiysha.jpg"
import avatarArthur from "../../assets/images/avatar-arthur.jpg"
import bgPatternHome4 from "../../assets/images/bg-pattern-home-4-about-3.svg"
import bgPatternHome5 from "../../assets/images/bg-pattern-home-5.svg"
import iconQuotes from "../../assets/images/icon-quotes.svg"

export function HomeExample() {

    return (
        <section className="example-container full main-layout">
            <section className="full bg-pattern bgPatternHome4">
                <img src={bgPatternHome4} alt="bgPatternHome4" />
            </section>
            <section className="full bg-pattern bgPatternHome5">
                <img src={bgPatternHome5} alt="bgPatternHome5" />
            </section>
            <section className="example">
                <section className="title">
                    <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                </section>
                <ul className="list">
                    <li className="item">
                        <section className="bg-pattern iconQuotes">
                            <img src={iconQuotes} alt="iconQuotes" />
                        </section>
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h3>Kady Baker</h3>
                        <h4>Product Manager at Bookmark</h4>
                        <section className="avatar-pic"><img src={avatarKady} alt="avatarKady" /></section>
                    </li>
                    <li className="item">
                        <section className="bg-pattern iconQuotes">
                            <img src={iconQuotes} alt="iconQuotes" />
                        </section>
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h3>Aiysha Reese</h3>
                        <h4>Founder of Manage</h4>
                        <section className="avatar-pic"><img src={avatarAiysha} alt="avatarAiysha" /></section>
                    </li>
                    <li className="item">
                        <section className="bg-pattern iconQuotes">
                            <img src={iconQuotes} alt="iconQuotes" />
                        </section>
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <h3>Arthur Clarke</h3>
                        <h4>Co-founder of MyPhysio</h4>
                        <section className="avatar-pic"><img src={avatarArthur} alt="avatarArthur" /></section>
                    </li>
                </ul>
            </section>
        </section>
    )
}