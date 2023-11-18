import bgPatternHome4 from "../../assets/images/bg-pattern-home-4-about-3.svg"
import bgPatternHome5 from "../../assets/images/bg-pattern-home-5.svg"
import { SuccessStoryList } from "../_reusable/_lists/success-story-list"
import { successStories } from "../../services/data.service"


export function SuccessStories() {

    return (
        <section className="success-stories-container full main-layout pos-rel bg-clr-teal-3">
            <section className="full bg-pattern bgPatternHome4 pos-abs top-0 left-0">
                <img src={bgPatternHome4} alt="bgPatternHome4" />
            </section>
            <section className="full bg-pattern bgPatternHome5 pos-abs right-0 bottom-0">
                <img src={bgPatternHome5} alt="bgPatternHome5" />
            </section>
            <section className="success-stories text-align-center">
                <section className="title">
                    <h2>Delivering real results for top companies. Some of our <span className="clr-teal-4">success stories.</span></h2>
                </section>
                <SuccessStoryList successStories={successStories} />
            </section>
        </section>
    )
}