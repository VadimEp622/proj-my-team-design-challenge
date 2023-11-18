import { DirectorList } from "../_reusable/_lists/director-list"
import { directors } from "../../services/data.service"
import bgPatternAbout2 from "../../assets/images/bg-pattern-about-2-contact-1.svg"

export function MeetDirectors() {

    return (
        <section className="meet-directors-container main-layout full text-align-center pos-rel overflow-hidden bg-clr-teal-3">
            <section className="full bg-pattern bgPatternAbout2 pos-abs left-neg-100px">
                <img src={bgPatternAbout2} alt="bgPatternAbout2" />
            </section>
            <section className="meet-directors">
                <section className="title"><h1>Meet the directors</h1></section>
                <DirectorList directors={directors} />
            </section>
        </section>
    )
}