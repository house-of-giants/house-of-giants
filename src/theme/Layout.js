import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Nav from '../components/Navigation/Nav'

import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'

const GlobalStyles = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

const Layout = ( {children} ) => (
  <div className="layout">
    <GlobalStyles />
    <Nav />
    {children}
  </div>
)

export default Layout