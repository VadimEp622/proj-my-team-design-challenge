import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { Context } from './context'

import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
import { About } from './pages/about'
import { AppFooter } from './cmps/app-footer'
import { SideNavbar } from './cmps/side-navbar'



export function RootCmp() {
    // TODO: Responsiveness (mobile/tablet/desktop) 
    // TODO: use rem()/em() function in scss for sizes
    // TODO: use variables for: size values & colors
    // TODO: consider using helpers.scss!!!

    const [isSideNavbar, setIsSideNavbar] = useState(false)

    return (
        < >
            <Context.Provider value={{ isSideNavbar, setIsSideNavbar }}>
                <section className="app app-layout">
                    <AppHeader />
                    <main className="app-main main-layout">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <AppFooter />
                    {isSideNavbar && <SideNavbar />}
                </section>
            </Context.Provider>
        </>
    )
}