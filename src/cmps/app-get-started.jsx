import { Link } from "react-router-dom";

export function GetStarted() {

    return (
        <section className="get-started-container full main-layout">
            <section className="get-started">
                <section className="title"><h2>Ready to get started?</h2></section>
                <section className="contact-btn-container">
                    <Link to={`/contact`}><p>contact us</p></Link>
                </section>
            </section>
        </section>
    )
}