export function TeamQualityPreview({ teamQuality }) {

    return (
        <section className="team-quality-preview">
            <section className="img-container">
                <img src={teamQuality.img} alt={teamQuality.imgName}></img>
            </section>
            <section className="content-container">
                <h3>{teamQuality.title}</h3>
                <p>{teamQuality.content}</p>
            </section>
        </section>
    )
}