import { Link } from "react-router-dom"

import facebookIcon from "../assets/images/icon-facebook.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import { Logo } from "./_reusable/logo"
import { MainNav } from "./_reusable/main-nav"


export function AppFooter() {

    return (
        <footer className="main-layout bg-clr-teal-1 clr-white">
            <section className="app-footer-container flex">

                <section className="nav-and-contact flex space-between">
                    <section className="nav-container flex column align-center">
                        <Logo />
                        <MainNav />
                    </section>
                    <section className="contact-container typography-5 flex column">
                        <pre>987  Hillcrest Lane</pre>
                        <pre>Irvine,CA</pre>
                        <pre>California 92714</pre>
                        <pre>Call Us : 949-833-7432</pre>
                    </section>
                </section>

                <section className="share-copyright-container full flex">
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