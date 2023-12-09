import { render } from "@testing-library/react"
import { AppHeader } from "./app-header"
import { MemoryRouter } from "react-router"
import { Context } from "../context"

describe('AppHeader', () => {
    it('renders', () => {

        const setIsSideNavbar = jest.fn()

        render(
            <MemoryRouter>
                <Context.Provider value={{ setIsSideNavbar }}>
                    <AppHeader />
                </Context.Provider>
            </MemoryRouter>
        )

    })
})

