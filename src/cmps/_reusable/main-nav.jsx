import { Link } from "react-router-dom"

export function MainNav({ onLinkClick = () => { } }) {

    return (
        <nav className="main-nav" data-testid="main-nav">
            <ul className="nav-list flex">
                <li><Link to={`/`} onClick={(ev) => onLinkClick(ev)}><p>home</p></Link></li>
                <li><Link to={`/about`} onClick={(ev) => onLinkClick(ev)}><p>about</p></Link></li>
            </ul>
        </nav>
    )
}