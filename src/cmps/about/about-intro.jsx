import bgPatternAbout1 from "../../assets/images/bg-pattern-about-1-mobile-nav-1.svg"

export function AboutIntro() {

    return (
        <section className="about-intro-container full main-layout pos-rel overflow-hidden bg-clr-teal-0">
            <section className="about-intro">
                <h1>About</h1>
                <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </section>
            <section className="bg-pattern bgPatternAbout1 full pos-abs right-neg-100px">
                <img src={bgPatternAbout1} alt="bgPatternAbout1" />
            </section>
        </section>
    )
}