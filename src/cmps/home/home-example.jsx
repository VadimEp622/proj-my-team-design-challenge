import avatarKady from "../../assets/images/avatar-kady.jpg"
import avatarAiysha from "../../assets/images/avatar-aiysha.jpg"
import avatarArthur from "../../assets/images/avatar-arthur.jpg"

export function HomeExample() {

    return (
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
    )
}