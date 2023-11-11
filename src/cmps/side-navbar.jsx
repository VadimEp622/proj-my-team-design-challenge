import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import iconClose from "../assets/images/icon-close.svg"
import bgPatternMobileNav1 from "../assets/images/bg-pattern-about-1-mobile-nav-1.svg"
import { Context } from "../context"
import { MainNav } from "./_reusable/main-nav"


export function SideNavbar({ isSideNavbar }) {
    const { setIsSideNavbar } = useContext(Context)

    useEffect(() => {
        return () => {
            setIsSideNavbar(false)
        }
    }, [setIsSideNavbar])


    function onCloseSideNavbar(ev) {
        ev.stopPropagation()
        setIsSideNavbar(false)
    }

    return (
        <section className={`side-navbar-wrapper${isSideNavbar ? ' active' : ''}`}>
            <div className="black-transparent-bg-wrapper" onClick={(ev) => onCloseSideNavbar(ev)}></div>
            <aside className="side-navbar-container pd-bl-56px pd-in-24px">
                <section className="bg-pattern bgPatternMobileNav1">
                    <img src={bgPatternMobileNav1} alt="bgPatternMobileNav1" />
                </section>
                <section className="side-navbar">
                    <section className="main-nav-and-contact pd-bl-56px pd-in-24px typography-4">
                        <MainNav onLinkClick={(ev) => onCloseSideNavbar(ev)} />
                        <section className="contact-btn-container">
                            <Link to={`/contact`} className="contact-btn" onClick={(ev) => onCloseSideNavbar(ev)}><p>contact us</p></Link>
                        </section>
                    </section>
                    <button className="btn-close" onClick={(ev) => onCloseSideNavbar(ev)}>
                        <img src={iconClose} alt="icon close" />
                    </button>
                </section>
            </aside>
        </section >
    )
}
