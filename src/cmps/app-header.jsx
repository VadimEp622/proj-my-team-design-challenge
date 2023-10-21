import { Link } from "react-router-dom/dist"

import { Logo } from "./_reusable/logo"
import iconHamburger from "../assets/images/icon-hamburger.svg"


export function AppHeader() {

    return (
        <header className="main-layout">
            <section className="app-header-container">
                <section className="header-logo-nav">
                    <Logo />
                    <nav>
                        <Link to={`/`}><p className="dropdown-option">home</p></Link>
                        <Link to={`/about`}><p className="dropdown-option">about</p></Link>
                    </nav>
                </section>
                <section className="contact-btn-container">
                    <button><p>contact us</p></button>
                </section>
                <section className="mobile-navbar-btn-container">
                    <button className="btn-mobile-navbar">
                        <img src={iconHamburger} alt="Hamburger Icon" />
                    </button>
                </section>
            </section>
        </header>
    )
}