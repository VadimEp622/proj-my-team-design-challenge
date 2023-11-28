export function AskUsPreview({ askUsItem }) {

    return (
        <section className="ask-us-preview flex align-center">
            <section className="img-container no-grow-shrink"><img src={askUsItem.img} alt={askUsItem.imgAlt} /></section>
            <p>{askUsItem.text}</p>
        </section>
    )
}