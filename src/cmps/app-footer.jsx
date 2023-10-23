import { Link } from "react-router-dom"

import facebookIcon from "../assets/images/icon-facebook.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import { Logo } from "./_reusable/logo"


export function AppFooter() {

    return (
        <footer className="main-layout">
            <section className="app-footer-container">

                <section className="nav-and-contact">
                    <section className="nav-container">
                        <Logo />
                        <nav>
                            <Link to={`/`}><p>home</p></Link>
                            <Link to={`/about`}><p>about</p></Link>
                        </nav>
                    </section>
                    <section className="contact-container">
                        <pre>987  Hillcrest Lane</pre>
                        <pre>Irvine,CA</pre>
                        <pre>California 92714</pre>
                        <pre>Call Us : 949-833-7432</pre>
                    </section>
                </section>

                <section className="share-copyright-container">
                    <nav>
                        <a href="/#"><img src={facebookIcon} alt="facebookIcon" /></a>
                        <a href="/#"><img src={pinterestIcon} alt="pinterestIcon" /></a>
                        <a href="/#"><img src={twitterIcon} alt="twitterIcon" /></a>
                    </nav>
                    <section className="copyright">
                        <p>Copyright 2023. All Rights Reserved</p>
                    </section>
                </section>

            </section>
        </footer>
    )
}