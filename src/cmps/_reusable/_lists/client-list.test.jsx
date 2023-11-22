import { render, screen } from '@testing-library/react'
import { ClientList } from './client-list'

describe('ClientList', () => {
    it('empty list correctly renders nothing', () => {
        render(<ClientList clients={[]} />)
        expect(screen.queryByTestId("client-preview")).not.toBeInTheDocument()
    })

    it('renders list correctly', () => {
        render(<ClientList clients={[{ img: '' }]} />)
        expect(screen.getByTestId("client-preview")).toBeInTheDocument()
    })

    it('renders multiple items in list correctly', () => {
        const clients = [{ img: '' }, { img: '' }, { img: '' }]
        render(<ClientList clients={clients} />)
        expect(screen.getAllByTestId("client-preview")).toHaveLength(clients.length)
    })
})