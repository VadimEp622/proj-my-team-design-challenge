import { Link } from "react-router-dom/dist"

export function AppHeader() {

    return (
        <header>
            <section className="app-header-container">
                <section className="header-logo-container">
                    <section className="logo">
                        <h1>myteam</h1>
                    </section>
                    <nav>
                        <Link to={`/`}><span className="dropdown-option">home</span></Link>
                        <Link to={`/about`}><span className="dropdown-option">about</span></Link>
                    </nav>
                </section>
                <section className="contact-btn-container">
                    <button><span>contact us</span></button>
                </section>
            </section>
        </header>
    )
}