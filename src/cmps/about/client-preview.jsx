export function ClientPreview({ client }) {

    return (
        <section className="client-preview">
            <img src={client.img} alt="client" />
        </section>
    )
}