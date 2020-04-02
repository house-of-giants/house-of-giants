import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Nav from '../components/Navigation/Nav'

import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'
import { AnimatePresence, motion } from 'framer-motion'

const GlobalStyles = createGlobalStyle`
  ${PrefersReducedMotion}
  ${SiteResets}
  ${Typography}
`

const Layout = ( {children} ) => (
  <div className="layout">
    <GlobalStyles />
    <Nav />
    <AnimatePresence exitBeforeEnter>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ ease: "easeInOut", delay: 0.3 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
)

export default Layout