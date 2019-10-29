import React from "react"
import styled from 'styled-components'
import { colors } from '../styles/base/variables'
import Layout from "../theme/Layout";

const Test = styled.h1`
  background-color: ${colors.charlestonGreen};
  color: ${colors.paradisePink};
`;

export default () => (
  <Layout>
    <Test>Hello world!</Test>
  </Layout>
)
