import bgPatternHome1 from "../../assets/images/bg-pattern-home-1.svg"
import bgPatternHome2 from "../../assets/images/bg-pattern-home-2.svg"

export function FindTalent() {

    return (
        <section className="find-talent-container full main-layout pos-rel overflow-hidden bg-clr-teal-0">
            <section className="full main-layout">
                <section className="bg-img bgPatternHome1 full pos-abs">
                    <img src={bgPatternHome1} alt="bgPatternHome1" />
                </section>
                <section className="find-talent pos-rel">
                    <article className="title">
                        <h1>Find the best <span className="clr-orange-0">talent</span></h1>
                    </article>
                    <article className="content">
                        <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
                    </article>
                </section>
                <section className="bg-img bgPatternHome2 pos-abs bottom-0">
                    <img src={bgPatternHome2} alt="bgPatternHome2" />
                </section>
            </section>
        </section>
    )
}