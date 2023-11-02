import { useContext } from "react"
import { Link } from "react-router-dom/dist"

import { Context } from "../context"

import iconHamburger from "../assets/images/icon-hamburger.svg"
import { Logo } from "./_reusable/logo"


export function AppHeader() {
    const { setIsSideNavbar } = useContext(Context)

    function onOpenSideNavbar(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        setIsSideNavbar(true)
    }


    return (
        <header className="main-layout">
            <section className="app-header-container">
                <section className="header-logo-nav">
                    <Logo />
                    <nav>
                        <Link to={`/`}><p>home</p></Link>
                        <Link to={`/about`}><p>about</p></Link>
                    </nav>
                </section>
                <section className="contact-btn-container">
                    <Link to={`/contact`} className="contact-btn"><p>contact us</p></Link>
                </section>
                <section className="mobile-navbar-btn-container">
                    <button className="btn-mobile-navbar" onClick={(ev) => onOpenSideNavbar(ev)}>
                        <img src={iconHamburger} alt="Hamburger Icon" />
                    </button>
                </section>
            </section>
        </header>
    )
}