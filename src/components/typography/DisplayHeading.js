import React from 'react'
import styled from 'styled-components'
import { richBlack } from '../../styles/base/variables'

const StyledHeading = styled.h1`
  color: ${richBlack};
  font-size: 10rem;
`

const DisplayHeading = ({ children }) => (
  <StyledHeading>
    {children}
  </StyledHeading>
)

export default DisplayHeading