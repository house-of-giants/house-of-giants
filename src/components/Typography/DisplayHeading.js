import React from 'react'
import styled from 'styled-components'
import { fs, colors, sp } from '../../styles/base/variables'
import { AnimatePresence, motion } from 'framer-motion'

const StyledHeading = styled(motion.h1)`
  color: ${colors.mintCream};
  font-size: ${fs.fluid};
  line-height: 0.8;
  margin: 0 auto;
  max-width: 75%;
  padding: 0 ${sp.lg};
  top: 0;
  `

const DisplayHeading = ({ children }) => (
  <AnimatePresence exitBeforeEnter>
    <StyledHeading initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ duration: 1.0, ease: "easeInOut" }}>
      {children}
    </StyledHeading>
  </AnimatePresence>
)

export default DisplayHeading