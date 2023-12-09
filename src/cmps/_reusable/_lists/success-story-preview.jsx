import iconQuotes from "../../../assets/images/icon-quotes.svg"

/**
 * @typedef {object} SuccessStory
 * @property {string} quote - A success story person's quote
 * @property {string} fullName - A success story person's full name
 * @property {string} position - A success story person's position
 * @property {string} img - A success story person's picture
 * @property {string} imgName - A success story person's picture's name
 */

/**
 * Component for previewing a director
 * 
 * @component
 * @param {{successStory:SuccessStory }} props - The props for the component.
 */

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