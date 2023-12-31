/**
 * @typedef {object} TeamQuality
 * @property {string} title - A team quality's title
 * @property {string} content - A team quality's content
 * @property {string} img - A team quality's picture
 * @property {string} imgName - A team quality's picture name
 */

/**
 * Component for previewing a director
 * 
 * @component
 * @param {{teamQuality:TeamQuality }} props - The props for the component.
 */

export function TeamQualityPreview({ teamQuality }) {

    return (
        <section className="team-quality-preview flex">
            <section className="img-container no-grow-shrink height-fit-content">
                <img src={teamQuality.img} alt={teamQuality.imgName}></img>
            </section>
            <section className="content-container flex column">
                <h3 className="typography-4 clr-orange-0">{teamQuality.title}</h3>
                <p className="typography-5">{teamQuality.content}</p>
            </section>
        </section>
    )
}