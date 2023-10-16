import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './assets/styles/main.scss'

import { RootCmp } from './root-cmp'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <RootCmp />
  </HashRouter>
)

