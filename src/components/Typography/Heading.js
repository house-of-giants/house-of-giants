import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { shadowU, slideL } from '../../utils/animationDefs'
import { container, colors, sp } from '../../styles/base/variables'

const StyledHeading = styled.div`
  border-bottom: 1px solid ${colors.alto};

  & .wrap {
    margin: 0 auto;
    max-width: ${container};
  }

  & h2 {
    display: inline-block;
    line-height: 0.81;
    margin: 0;
    padding: 0 ${sp.base};
  }
`

const Heading = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: [0.0, 1.0]
  })

  return (
    <StyledHeading>
      <motion.div
        ref={ref}
        variants={slideL}
        animate={inView ? "shown" : "hidden"}
        className="wrap"
      >
        <motion.h2
          key="heading"
          variants={shadowU}
          animate={inView ? "shown" : "hidden"}
          className="h1"
        >
          {children}
        </motion.h2>
      </motion.div>
    </StyledHeading>
  )
}

export default Heading