import { fireEvent, render, screen } from "@testing-library/react"
import { AppHeader } from "./app-header"
import { MemoryRouter } from "react-router"
import { Context } from "../context"

describe('AppHeader', () => {
    const customRender = ({ provideProps }) => {
        return render(
            <MemoryRouter>
                <Context.Provider {...provideProps}>
                    <AppHeader />
                </Context.Provider>
            </MemoryRouter>
        )
    }

    const provideProps = {
        value: {
            isSideNavbar: false,
            setIsSideNavbar: jest.fn()
        }
    }

    it('renders mobile navbar', () => {
        customRender({ provideProps })
        const element = screen.getByAltText('Hamburger Icon')
        expect(element).toBeInTheDocument()
    })

    it('mobile navbar button triggers setIsSideNavbar', () => {
        customRender({ provideProps })
        const element = screen.getByAltText('Hamburger Icon')
        fireEvent.click(element)
        expect(provideProps.value.setIsSideNavbar).toHaveBeenCalled()
    })
})

