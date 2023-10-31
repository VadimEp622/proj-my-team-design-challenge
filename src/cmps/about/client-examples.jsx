import { clients } from "../../services/client.service"
import { ClientList } from "./client-list"
import bgPatternAbout4 from "../../assets/images/bg-pattern-about-4.svg"

export function ClientExamples() {

    return (
        <section className="client-examples-container main-layout full">
            <section className="full bg-pattern bgPatternAbout4">
                <img src={bgPatternAbout4} alt="bgPatternAbout4" />
            </section>
            <section className="client-examples">
                <section className="title"><h1>Some of our clients</h1></section>
                <ClientList clients={clients} />
            </section>
        </section>
    )
}