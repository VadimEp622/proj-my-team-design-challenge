import iconPerson from "../assets/images/icon-person.svg"

export function Contact() {

    return (
        <section className="contact-page full main-layout bg-clr-teal-0">
            <section className="contact-container grid">
                <section className="ask-us-list">
                    <h1>Contact</h1>
                    <h2>Ask us about</h2>
                    <section className="ask-us-preview flex align-center">
                        <section className="img-container no-grow-shrink"><img src={iconPerson} alt="iconPerson" /></section>
                        <p>The quality of our talent network</p>
                    </section>
                </section>
                <section className="contact-form">
                    <label className="display-block" htmlFor="name">Name</label>
                    <input className="width-100-percent" type="text" id="name" />
                </section>

            </section>
        </section>
    )
}