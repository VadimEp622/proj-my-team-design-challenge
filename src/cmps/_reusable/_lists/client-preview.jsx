/**
 * @typedef {object} Client
 * @property {string} img - The source of the image.
 */

/**
 * Component for showing a preview of an Client item.
 * 
 * @component
 * @param {{client:Client}} props - The props for the component. 
 */
export function ClientPreview({ client }) {

    return (
        <section className="client-preview" data-testid="client-preview">
            <img className="object-fit-contain" src={client.img} alt="client" />
        </section>
    )
}