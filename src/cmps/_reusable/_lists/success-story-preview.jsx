import iconQuotes from "../../../assets/images/icon-quotes.svg"

export function SuccessStoryPreview({ successStory }) {

    return (
        <section className="success-story-preview pos-rel">
            <section className="bg-pattern iconQuotes pos-abs"><img src={iconQuotes} alt="iconQuotes" /></section>
            <p className="typography-5 mg-bl-st-36px">{successStory.quote}</p>
            <h3 className="typography-4 clr-teal-4 mg-bl-ed-2px">{successStory.fullName}</h3>
            <h4 className="typography-6 italic font-weight-500">{successStory.position}</h4>
            <section className="avatar-pic"><img src={successStory.img} alt={successStory.imgName} /></section>
        </section>
    )
}