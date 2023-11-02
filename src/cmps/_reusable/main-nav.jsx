import { Link } from "react-router-dom"

export function MainNav({ onLinkClick = () => { } }) {

    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li><Link to={`/`} onClick={(ev) => onLinkClick(ev)}><p>home</p></Link></li>
                <li><Link to={`/about`} onClick={(ev) => onLinkClick(ev)}><p>about</p></Link></li>
            </ul>
        </nav>
    )
}