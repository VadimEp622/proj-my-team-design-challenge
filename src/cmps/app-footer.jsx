import facebookIcon from "../assets/images/icon-facebook.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import { Logo } from "./_reusable/logo"
import { MainNav } from "./_reusable/main-nav"
import { shareService } from "../services/share.service"


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
                        <a href={shareService.getFacebookUrl()} data-testid="link-facebook" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="facebookIcon" /></a>
                        <a href={shareService.getPinterestUrl()} data-testid="link-pinterest" target="_blank" rel="noopener noreferrer"><img src={pinterestIcon} alt="pinterestIcon" /></a>
                        <a href={shareService.getTwitterUrl()} data-testid="link-twitter" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitterIcon" /></a>
                    </nav>
                    <section className="copyright typography-5">
                        <p>Copyright 2023. All Rights Reserved</p>
                    </section>
                </section>

            </section>
        </footer>
    )
}