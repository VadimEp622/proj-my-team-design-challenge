import { Link } from "react-router-dom";

import facebookIcon from "../assets/images/icon-facebook.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"


export function AppFooter() {

    return (
        <footer>
            <section className="app-footer-container">
                <section className="nav-container">
                    <article className="logo"><h1>myteam</h1></article>
                    <nav>
                        <Link to={`/`}>home</Link>
                        <Link to={`/about`}>about</Link>
                    </nav>
                </section>
                <section className="contact-container">
                    <pre>987  Hillcrest Lane</pre>
                    <pre>Irvine,CA</pre>
                    <pre>California 92714</pre>
                    <pre>Call Us : 949-833-7432</pre>
                </section>
                <section className="share-copyright-container">
                    <nav>
                        <a href=""><img src={facebookIcon} alt="facebookIcon" /></a>
                        <a href=""><img src={pinterestIcon} alt="pinterestIcon" /></a>
                        <a href=""><img src={twitterIcon} alt="twitterIcon" /></a>
                    </nav>
                    <article className="copyright">
                        <p>Copyright 2023. All Rights Reserved</p>
                    </article>
                </section>
            </section>
        </footer>
    )
}