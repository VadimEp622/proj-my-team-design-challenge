import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { Context } from "../context"

import iconClose from "../assets/images/icon-close.svg"


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
            <aside className="side-navbar-container">
                <section className="side-navbar">
                    <nav>
                        <ul className="nav-list">
                            <li><Link to={`/`} onClick={(ev) => onCloseSideNavbar(ev)}><p>home</p></Link></li>
                            <li><Link to={`/about`} onClick={(ev) => onCloseSideNavbar(ev)}><p>about</p></Link></li>
                        </ul>
                        <section className="contact">
                            <Link to={`/contact`} onClick={(ev) => onCloseSideNavbar(ev)}><p>contact us</p></Link>
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
