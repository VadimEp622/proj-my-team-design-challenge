import { Link } from "react-router-dom/dist"

import logo from "../assets/images/logo.svg"


export function AppHeader() {

    return (
        <header className="main-layout">
            <section className="app-header-container">
                <section className="header-logo-container">
                    <section className="logo">
                        <img src={logo} alt="logo" />
                    </section>
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