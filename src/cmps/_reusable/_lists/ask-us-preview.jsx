export function AskUsPreview({ askUsItem }) {

    return (
        <section className="ask-us-preview flex align-center gap-23px">
            <section className="img-container no-grow-shrink"><img src={askUsItem.img} alt={askUsItem.imgAlt} /></section>
            <p className="typography-4">{askUsItem.text}</p>
        </section>
    )
}