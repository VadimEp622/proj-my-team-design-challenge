import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
    const { pathname, state } = useLocation()

    useEffect(() => {
        if (!state || !state.from) {
            window.scrollTo(0, 0)
        }
    }, [pathname, state])

    return children
}

export default ScrollToTop
