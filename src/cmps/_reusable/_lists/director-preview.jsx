import { useState } from "react"
import { Link } from "react-router-dom"

import iconCross from "../../../assets/images/icon-cross.svg"
import twitterIcon from "../../../assets/images/icon-twitter.svg"
import linkedInIcon from "../../../assets/images/icon-linkedin.svg"


export function DirectorPreview({ director }) {
    const [activePreview, setActivePreview] = useState(false)

    function onClickPreview(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        setActivePreview(prev => !prev)
    }

    return (
        <section className={`director-preview-container${activePreview ? ' active' : ''}`}>
            <section className="director-preview">
                <section className="avatar"><img src={director.img} alt="avatarNikita" /></section>
                <h2 className="name typography-4">{director.name}</h2>
                <section className="quote-share-container">
                    <p className="quote typography-5">{director.quote}</p>
                    <nav className="share">
                        <Link to={`/share`}><img src={twitterIcon} alt="twitterIcon" /></Link>
                        <Link to={`/share`}><img src={linkedInIcon} alt="linkedInIcon" /></Link>
                    </nav>
                </section>
                <p className="position typography-5 italic">{director.position}</p>
            </section>
            <section className="icon-cross-btn-container">
                <button className="icon-cross-btn" onClick={(ev) => onClickPreview(ev)}>
                    <img src={iconCross} alt="iconCross" />
                </button>
            </section>
        </section>
    )
}