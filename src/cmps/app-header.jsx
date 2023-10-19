import { Link } from "react-router-dom/dist"

import { Logo } from "./_reusable/logo"


export function AppHeader() {

    return (
        <header className="main-layout">
            <section className="app-header-container">
                <section className="header-logo-container">
                    <Logo />
                    <nav>
                        <Link to={`/`}><p className="dropdown-option">home</p></Link>
                        <Link to={`/about`}><p className="dropdown-option">about</p></Link>
                    </nav>
                </section>
                <section className="contact-btn-container">
                    <button><p>contact us</p></button>
                </section>
            </section>
        </header>
    )
}