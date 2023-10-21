import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { Context } from "../context"

import iconClose from "../assets/images/icon-close.svg"
import useIsMobile from "../hooks/useIsMobile"


export function SideNavbar() {
    const { setIsSideNavbar } = useContext(Context)
    const isMobile = useIsMobile()


    function onCloseSideNavbar(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        setIsSideNavbar(false)
    }

    useEffect(() => {
        if (!isMobile) setIsSideNavbar(false)
    }, [setIsSideNavbar, isMobile])


    return (
        <section className="side-navbar-wrapper">
            <div className="black-transparent-bg-wrapper" onClick={(ev) => onCloseSideNavbar(ev)}></div>
            <aside className="side-navbar-container">
                <section className="side-navbar">
                    <nav>
                        <ul className="nav-list">
                            <li><Link to={`/`}><p>home</p></Link></li>
                            <li><Link to={`/about`}><p>about</p></Link></li>
                        </ul>
                        <section className="contact">
                            <Link to={`/contact`}><p>contact us</p></Link>
                        </section>
                    </nav>
                    <button className="btn-close" onClick={(ev) => onCloseSideNavbar(ev)}>
                        <img src={iconClose} alt="icon close" />
                    </button>
                </section>
            </aside>
        </section >
    )
}
