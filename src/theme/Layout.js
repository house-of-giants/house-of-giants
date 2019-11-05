import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'
import Head from './Head'

const GlobalStyles = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

const Layout = ( {children} ) => (
  <div className="layout">
    <Head />
    <GlobalStyles />
    {children}
  </div>
)

export default Layout