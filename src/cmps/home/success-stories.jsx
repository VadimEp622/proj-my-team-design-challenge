import bgPatternHome4 from "../../assets/images/bg-pattern-home-4-about-3.svg"
import bgPatternHome5 from "../../assets/images/bg-pattern-home-5.svg"
import { SuccessStoryList } from "../_reusable/_lists/success-story-list"
import { successStories } from "../../services/data.service"


export function SuccessStories() {

    return (
        <section className="success-stories-container full main-layout">
            <section className="full bg-pattern bgPatternHome4">
                <img src={bgPatternHome4} alt="bgPatternHome4" />
            </section>
            <section className="full bg-pattern bgPatternHome5">
                <img src={bgPatternHome5} alt="bgPatternHome5" />
            </section>
            <section className="success-stories text-align-center">
                <section className="title">
                    <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                </section>
                <SuccessStoryList successStories={successStories} />
            </section>
        </section>
    )
}