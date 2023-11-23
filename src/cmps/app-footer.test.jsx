import { render, screen } from '@testing-library/react'
import { AppFooter } from './app-footer'
import { shareService } from '../services/share.service'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../services/share.service')

describe('AppFooter', () => {
    beforeEach(() => {
        shareService.getFacebookUrl.mockReturnValue('http://facebook.com')
        shareService.getPinterestUrl.mockReturnValue('http://pinterest.com')
        shareService.getTwitterUrl.mockReturnValue('http://twitter.com')
    })

    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <AppFooter />
            </MemoryRouter>
        )
    })

    it('renders correct address and phone number', () => {
        render(
            <MemoryRouter>
                <AppFooter />
            </MemoryRouter>
        )
        expect(screen.getByText(/Hillcrest Lane/)).toBeInTheDocument()
        expect(screen.getByText(/Irvine/)).toBeInTheDocument()
        expect(screen.getByText(/California/)).toBeInTheDocument()
        expect(screen.getByText(/Call Us/)).toBeInTheDocument()
    })

    it('renders social media links correctly', () => {
        render(
            <MemoryRouter>
                <AppFooter />
            </MemoryRouter>
        )
        expect(screen.getByTestId('link-facebook')).toHaveAttribute('href', 'http://facebook.com')
        expect(screen.getByTestId('link-pinterest')).toHaveAttribute('href', 'http://pinterest.com')
        expect(screen.getByTestId('link-twitter')).toHaveAttribute('href', 'http://twitter.com')
    })

    it('renders Logo and MainNav components', () => {
        render(
            <MemoryRouter>
                <AppFooter />
            </MemoryRouter>
        )
        expect(screen.getByTestId('logo')).toBeInTheDocument()
        expect(screen.getByTestId('main-nav')).toBeInTheDocument()
    })
})
