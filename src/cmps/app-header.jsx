import { useContext } from "react"
import { Link } from "react-router-dom/dist"

import iconHamburger from "../assets/images/icon-hamburger.svg"
import { Context } from "../context"
import { Logo } from "./_reusable/logo"
import { MainNav } from "./_reusable/main-nav"


export function AppHeader() {
    const { setIsSideNavbar } = useContext(Context)

    function onOpenSideNavbar(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        setIsSideNavbar(true)
    }


    return (
        <header className="main-layout">
            <section className="app-header-container flex align-center space-between gap-41">
                <section className="header-logo-nav">
                    <Logo />
                    <MainNav />
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