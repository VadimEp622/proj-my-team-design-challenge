export function ClientPreview({ client }) {

    return (
        <section className="client-preview">
            <img className="object-fit-contain" src={client.img} alt="client" />
        </section>
    )
}