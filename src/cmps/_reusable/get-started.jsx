import { Link } from "react-router-dom"
import bgPatternHome6 from "../../assets/images/bg-pattern-home-6-about-5.svg"

export function GetStarted() {

    return (
        <section className="get-started-container full main-layout">
            <section className="full bg-pattern bg-pattern-home-6">
                <img src={bgPatternHome6} alt="bgPatternHome6" />
            </section>
            <section className="get-started">
                <section className="title"><h2>Ready to get started?</h2></section>
                <section className="contact-btn-container">
                    <Link to={`/contact`}><p>contact us</p></Link>
                </section>
            </section>
        </section>
    )
}