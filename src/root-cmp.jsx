import React from 'react'
import { Routes, Route } from 'react-router'


import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
import { About } from './pages/about'
import { AppFooter } from './cmps/app-footer'



export function RootCmp() {
    // TODO: Responsiveness (mobile/tablet/desktop) 
    return (
        < >
            <section className={`app app-layout`}>
                <AppHeader />
                <main className="app-main main-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </>
    )

}