import { ContactUsForm } from "../_reusable/_forms/contact-us-form"
import { AskUsList } from "../_reusable/_lists/ask-us-list"
import bgPatternContact1 from "../../assets/images/bg-pattern-about-2-contact-1.svg"
import bgPatternContact2 from "../../assets/images/bg-pattern-contact-2.svg"

export function ContactUs() {

    return (
        <section className="contact-us-container full main-layout pos-rel overflow-hidden">
            <section className="contact-us grid">
                <section className="ask-us-container">
                    <h1>Contact</h1>
                    <h2 className="clr-orange-0 typography-11">Ask us about</h2>
                    <AskUsList />
                </section>
                <ContactUsForm />

                <section className="bg-img bgPatternContact1 full pos-abs">
                    <img src={bgPatternContact1} alt="bgPatternContact1" />
                </section>
            </section>

            <section className="bg-img bgPatternContact2 full pos-abs right-neg-100px">
                <img src={bgPatternContact2} alt="bgPatternContact2" />
            </section>
        </section>
    )
}