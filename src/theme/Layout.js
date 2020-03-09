import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Navigation from '../components/Navigation'

import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'

const GlobalStyles = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

const Layout = ( {children} ) => (
  <div className="layout">
    <GlobalStyles />
    <Navigation />
    {children}
  </div>
)

export default Layout