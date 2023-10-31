import { ClientPreview } from "./client-preview"

export function ClientList({ clients }) {

    return (
        <section className="client-list">
            {clients.map((client, index) => <ClientPreview key={index} client={client} />)}
        </section>
    )
}