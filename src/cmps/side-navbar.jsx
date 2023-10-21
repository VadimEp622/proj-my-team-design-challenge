import { useContext } from "react"
import { Context } from "../context"


export function SideNavbar() {
    const { setIsSideNavbar } = useContext(Context)

    function onCloseSideNavbar(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        setIsSideNavbar(false)
    }

    return (
        <section className="side-navbar-container">
            <div className="black-transparent-bg-wrapper" onClick={(ev) => onCloseSideNavbar(ev)}></div>
            <aside className="side-navbar">
                <h1>Hello from SideNavbar</h1>
            </aside>
        </section>
    )
}
