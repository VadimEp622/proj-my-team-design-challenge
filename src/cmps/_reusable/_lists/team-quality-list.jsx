import { TeamQualityPreview } from "./team-quality-preview"

export function TeamQualityList({ teamQualities }) {

    return (
        <section className="team-quality-list flex column">
            {
                teamQualities.map((teamQuality, index) => <TeamQualityPreview key={index} teamQuality={teamQuality} />)
            }
        </section>
    )
}