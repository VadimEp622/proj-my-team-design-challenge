import { useState } from "react"

import iconCross from "../../../assets/images/icon-cross.svg"
import twitterIcon from "../../../assets/images/icon-twitter.svg"
import linkedInIcon from "../../../assets/images/icon-linkedin.svg"
import { shareService } from "../../../services/share.service"


export function DirectorPreview({ director }) {
    const [activePreview, setActivePreview] = useState(false)

    function onClickPreview(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        setActivePreview(prev => !prev)
    }

    return (
        <section className={`director-preview-container${activePreview ? ' active' : ''} pd-in-24px pos-rel bg-clr-teal-2`}>
            <section className="director-preview pos-rel">
                <section className="avatar"><img src={director.img} alt="avatarNikita" /></section>
                <h2 className="name typography-4 clr-teal-4">{director.name}</h2>
                <section className="quote-share-container">
                    <p className="quote typography-5">{director.quote}</p>
                    <nav className="share justify-center">
                        <a href={shareService.getTwitterUrl()} target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitterIcon" /></a>
                        <a href={shareService.getLinkedinUrl()} target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="linkedInIcon" /></a>
                    </nav>
                </section>
                <p className="position typography-5 italic">{director.position}</p>
            </section>
            <section className="icon-cross-btn-container flex justify-center width-100-percent pos-abs left-0 bottom-neg-28px">
                <button className="icon-cross-btn" onClick={(ev) => onClickPreview(ev)}>
                    <img src={iconCross} alt="iconCross" />
                </button>
            </section>
        </section>
    )
}