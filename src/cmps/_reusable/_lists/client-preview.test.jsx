import { render, screen } from "@testing-library/react"
import { ClientPreview } from "./client-preview"

describe('ClientPreview', () => {
    it('renders correctly', () => {
        render(<ClientPreview client={{ img: '' }} />)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
})