import React from 'react'
import styled from 'styled-components'
import { fs, colors, sp } from '../../styles/base/variables'

const StyledHeading = styled.h1`
  color: ${colors.mintCream};
  font-size: ${fs.fluid};
  line-height: 0.8;
  margin: 0;
  padding: 0;
  text-align: center;
  top: 0;
`

const DisplayHeading = ({ children }) => (
  <StyledHeading>
    {children}
  </StyledHeading>
)

export default DisplayHeading