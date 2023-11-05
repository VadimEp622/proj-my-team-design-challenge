import { Link } from "react-router-dom"

import facebookIcon from "../assets/images/icon-facebook.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import { Logo } from "./_reusable/logo"
import { MainNav } from "./_reusable/main-nav"


export function AppFooter() {

    return (
        <footer className="main-layout">
            <section className="app-footer-container">

                <section className="nav-and-contact">
                    <section className="nav-container">
                        <Logo />
                        <MainNav />
                    </section>
                    <section className="contact-container typography-5">
                        <pre>987  Hillcrest Lane</pre>
                        <pre>Irvine,CA</pre>
                        <pre>California 92714</pre>
                        <pre>Call Us : 949-833-7432</pre>
                    </section>
                </section>

                <section className="share-copyright-container">
                    <nav>
                        <Link to={`/share`}><img src={facebookIcon} alt="facebookIcon" /></Link>
                        <Link to={`/share`}><img src={pinterestIcon} alt="pinterestIcon" /></Link>
                        <Link to={`/share`}><img src={twitterIcon} alt="twitterIcon" /></Link>
                    </nav>
                    <section className="copyright typography-5">
                        <p>Copyright 2023. All Rights Reserved</p>
                    </section>
                </section>

            </section>
        </footer>
    )
}