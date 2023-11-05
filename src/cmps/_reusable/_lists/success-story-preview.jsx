import iconQuotes from "../../../assets/images/icon-quotes.svg"

export function SuccessStoryPreview({ successStory }) {

    return (
        <section className="success-story-preview">
            <section className="bg-pattern iconQuotes"><img src={iconQuotes} alt="iconQuotes" /></section>
            <p className="typography-5">{successStory.quote}</p>
            <h3 className="typography-4">{successStory.fullName}</h3>
            <h4 className="typography-6 italic font-weight-500">{successStory.position}</h4>
            <section className="avatar-pic"><img src={successStory.img} alt={successStory.imgName} /></section>
        </section>
    )
}