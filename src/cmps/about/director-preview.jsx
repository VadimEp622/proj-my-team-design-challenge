import avatarNikita from "../../assets/images/avatar-nikita.jpg"
import iconCross from "../../assets/images/icon-cross.svg"


export function DirectorPreview({ director }) {

    return (
        <section className="director-preview">
            <section className="avatar"><img src={director.img} alt="avatarNikita" /></section>
            <h2 className="name">{director.name}</h2>
            <p className="position">{director.position}</p>
            <section className="icon-cross-container">
                <section className="icon-cross">
                    <img src={iconCross} alt="iconCross" />
                </section>
            </section>
        </section>
    )
}