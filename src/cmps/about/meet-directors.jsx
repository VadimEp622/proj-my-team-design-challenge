import { DirectorList } from "./director-list"
import { directors } from "../../services/director.service"

export function MeetDirectors() {

    return (
        <section className="meet-directors-container main-layout full">
            <section className="meet-directors">
                <section className="title"><h1>Meet the directors</h1></section>
                <DirectorList directors={directors} />
            </section>
        </section>
    )
}