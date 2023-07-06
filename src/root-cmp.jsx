import React from 'react'
import { Routes, Route } from 'react-router'


import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
import { About } from './pages/about'



export function RootCmp() {
    return (
        <>
            <section className={`app`}>
                <AppHeader />
                <main className="app-main">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Routes>
                </main>
            </section>
        </>
    )

}