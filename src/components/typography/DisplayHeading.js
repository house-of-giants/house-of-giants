import React from 'react'
import styled from 'styled-components'
import { fs, colors, sp } from '../../styles/base/variables'

const StyledHeading = styled.h1`
  color: ${colors.richBlack};
  font-size: ${fs.fluid};
  line-height: .4;
  margin: 0 0 ${sp.lg};
  padding: 0 0 ${sp.xl};
  text-shadow: -0.6rem 0 ${colors.tulip}, 0.6rem 0 ${colors.blueGreen};
  top: 0;
  word-spacing: 100vw;
`

const DisplayHeading = ({ children }) => (
  <StyledHeading>
    {children}
  </StyledHeading>
)

export default DisplayHeading