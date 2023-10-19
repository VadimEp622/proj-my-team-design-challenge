import bgPatternHome1 from "../../assets/images/bg-pattern-home-1.svg"
import bgPatternHome2 from "../../assets/images/bg-pattern-home-2.svg"

export function HomeHeaderExtension() {

    return (
        <section className="header-extension-container full main-layout">
            <section className="full main-layout">
                <section className="bg-img bgPatternHome1 full">
                    <img src={bgPatternHome1} alt="bgPatternHome1" />
                </section>
                <section className="header-extension">
                    <article className="title">
                        <h1>Find the best <span>talent</span></h1>
                    </article>
                    <article className="content">
                        <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
                    </article>
                </section>
                <section className="bg-img bgPatternHome2">
                    <img src={bgPatternHome2} alt="bgPatternHome2" />
                </section>
            </section>
        </section>
    )
}