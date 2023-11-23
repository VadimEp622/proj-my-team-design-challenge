import logo from "../../assets/images/logo.svg"

export function Logo() {
    return (
        <section className="logo" data-testid="logo">
            <img src={logo} alt="logo" />
        </section>
    )
}