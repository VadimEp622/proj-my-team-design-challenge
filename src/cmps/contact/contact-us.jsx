import { AskUsList } from "../_reusable/_lists/ask-us-list"

export function ContactUs() {

    return (
        <section className="contact-us-container">
            <section className="contact-us grid">
                <section className="ask-us-container">
                    <h1>Contact</h1>
                    <h2 className="clr-orange-0 typography-11">Ask us about</h2>
                    <AskUsList />
                </section>

                <section className="contact-form">
                    <label className="display-block" htmlFor="name">Name</label>
                    <input className="width-100-percent" type="text" id="name" />
                </section>
            </section>
        </section>
    )
}