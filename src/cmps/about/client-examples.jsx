import { clients } from "../../services/data.service"
import { ClientList } from "../_reusable/_lists/client-list"
import bgPatternAbout4 from "../../assets/images/bg-pattern-about-4.svg"

export function ClientExamples() {

    return (
        <section className="client-examples-container main-layout full pos-rel overflow-hidden bg-clr-teal-2">
            <section className="full bg-pattern bgPatternAbout4 pos-abs">
                <img src={bgPatternAbout4} alt="bgPatternAbout4" />
            </section>
            <section className="client-examples">
                <section className="title text-align-center"><h1>Some of our clients</h1></section>
                <ClientList clients={clients} />
            </section>
        </section>
    )
}