import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
    createMemoryRouter,
    RouterProvider,
} from 'react-router-dom'
import { screen } from '@testing-library/react'
import { MainNav } from './main-nav'

describe('MainNav', () => {
    const setupMyTest = (initialIndex = 0) => {
        const router = createMemoryRouter(
            [
                {
                    path: '/',
                    element: <MainNav />
                },
                {
                    path: '/about',
                    element: <MainNav />
                },
            ],
            {
                initialEntries: ['/', '/about'],
                initialIndex,
            }
        )

        render(<RouterProvider router={router} />)

        // Objectify the router so we can explicitly pull when calling setupMyTest (Scalability + Readability)
        return { router }
    }

    it('navigates from "/" to "/about" successfully', async () => {
        const { router } = setupMyTest(0)

        expect(router.state.location.pathname).toEqual('/')
        userEvent.click(screen.getByText('about'))

        await waitFor(() => {
            expect(router.state.location.pathname).toEqual('/about')
        })
    })

    it('navigates from "/about" to "/" successfully', async () => {
        const { router } = setupMyTest(1)

        expect(router.state.location.pathname).toEqual('/about')
        userEvent.click(screen.getByText('home'))

        await waitFor(() => {
            expect(router.state.location.pathname).toEqual('/')
        })
    })
})