import { render, screen } from '@testing-library/react'
import { FindTalent } from './find-talent'


describe('FindTalent', () => {
    it('renders correctly', () => {
        render(<FindTalent />)
        expect(screen.getByText(/find the best/i)).toBeInTheDocument()
    })
})