import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { slideL } from '../../utils/animationDefs'
import { container } from '../../styles/base/variables'

const StyledHeading = styled.div`
  & .wrap {
    margin: 0 auto;
    max-width: ${container};
  }

  & h2 {
    display: inline-block;
    line-height: 0.81;
    margin: 0;
    padding: 0;
  }
`

const Heading = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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
        <h2 className="h1">
          {children}
        </h2>
      </motion.div>
    </StyledHeading>
  )
}

export default Heading