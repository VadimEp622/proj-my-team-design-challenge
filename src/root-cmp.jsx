import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { Context } from './context'
import useIsMobile from './hooks/useIsMobile'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { SideNavbar } from './cmps/side-navbar'


export function RootCmp() {
    // TODO: make reusable cmp for background-pattern
    // TODO: make variables for left: -100px, etc.. spacings, and width/height sizes

    const [isSideNavbar, setIsSideNavbar] = useState(false)
    const isMobile = useIsMobile()

    return (
        <Context.Provider value={{ isSideNavbar, setIsSideNavbar }}>
            <section className="app app-layout">
                <AppHeader />
                <main className="app-main main-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <AppFooter />
                {isMobile && <SideNavbar isSideNavbar={isSideNavbar} />}
            </section>
        </Context.Provider>
    )
}