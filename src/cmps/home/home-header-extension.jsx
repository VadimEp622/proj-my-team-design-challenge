import bgPatternHome1 from "../../assets/images/bg-pattern-home-1.svg"
import bgPatternHome2 from "../../assets/images/bg-pattern-home-2.svg"

export function HomeHeaderExtension() {

    return (
        <section className="header-extension-container full main-layout">
            <img className="bg-img bgPatternHome1 full" src={bgPatternHome1} alt="bgPatternHome1" />
            <section className="header-extension">
                <article className="left">
                    <h1 className="large">Find the best <span>talent</span></h1>
                </article>
                <article className="right">
                    <p className="large">Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
                </article>
            </section>
            <img className="bg-img bgPatternHome2" src={bgPatternHome2} alt="bgPatternHome2" />
        </section>
    )
}