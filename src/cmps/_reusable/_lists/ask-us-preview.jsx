/**
 * @typedef {Object} AskUsItem
 * @property {string} img - The source of the image.
 * @property {string} imgAlt - The alt text for the image.
 * @property {string} text - The text to display.
 */

/**
 * Component for showing a preview of an AskUs item.
 *
 * @component
 * @param {{askUsItem: AskUsItem}} props - The props for the component.
 */
export function AskUsPreview({ askUsItem }) {

    return (
        <section className="ask-us-preview flex align-center gap-23px">
            <section className="img-container no-grow-shrink"><img src={askUsItem.img} alt={askUsItem.imgAlt} /></section>
            <p className="typography-4">{askUsItem.text}</p>
        </section>
    )
}