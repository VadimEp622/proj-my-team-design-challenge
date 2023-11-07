export function TeamQualityPreview({ teamQuality }) {

    return (
        <section className="team-quality-preview flex">
            <section className="img-container no-grow-shrink">
                <img src={teamQuality.img} alt={teamQuality.imgName}></img>
            </section>
            <section className="content-container flex column">
                <h3 className="typography-4">{teamQuality.title}</h3>
                <p className="typography-5">{teamQuality.content}</p>
            </section>
        </section>
    )
}