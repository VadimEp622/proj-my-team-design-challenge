import { Link } from "react-router-dom"

import facebookIcon from "../assets/images/icon-facebook.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import logo from "../assets/images/logo.svg"


export function AppFooter() {

    return (
        <footer className="main-layout">
            <section className="app-footer-container">
                <section className="nav-container">
                    <section className="logo">
                        {/* <h1>myteam</h1> */}
                        <img src={logo} alt="logo" />
                    </section>
                    <nav>
                        <Link to={`/`}><p className="large">home</p></Link>
                        <Link to={`/about`}><p className="large">about</p></Link>
                    </nav>
                </section>
                <section className="contact-container">
                    <pre className="small">987  Hillcrest Lane</pre>
                    <pre className="small">Irvine,CA</pre>
                    <pre className="small">California 92714</pre>
                    <pre className="small">Call Us : 949-833-7432</pre>
                </section>
                <section className="share-copyright-container">
                    <nav>
                        <a href="/#"><img src={facebookIcon} alt="facebookIcon" /></a>
                        <a href="/#"><img src={pinterestIcon} alt="pinterestIcon" /></a>
                        <a href="/#"><img src={twitterIcon} alt="twitterIcon" /></a>
                    </nav>
                    <section className="copyright">
                        <p className="small">Copyright 2023. All Rights Reserved</p>
                    </section>
                </section>
            </section>
        </footer>
    )
}