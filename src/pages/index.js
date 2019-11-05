import React from "react"
import styled from 'styled-components'
import { richBlack } from '../styles/base/variables'
import Layout from "../theme/Layout"

const StyledHeading = styled.h1`
  color: ${richBlack};
  font-size: 10rem;
`

export default () => (
  <Layout>
    <StyledHeading>
      House of Giants
    </StyledHeading>
  </Layout>
)
