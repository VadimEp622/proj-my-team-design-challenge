import { DirectorPreview } from "./director-preview"

export function DirectorList({ directors }) {
    return (
        <section className="director-list grid">
            {directors.map((director, index) =>
                <DirectorPreview key={index} director={director} />
            )}
        </section>
    )
}