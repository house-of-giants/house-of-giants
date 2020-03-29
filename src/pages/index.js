import React from "react"

import Head from "../theme/Head"
import Layout from "../theme/Layout"
import DisplayHeading from "../components/typography/DisplayHeading"
import styled from "styled-components"
import { sp, fs, colors, bp } from "../styles/base/variables"

const StyledHero = styled.div`
  align-items: center;
  display: grid;
  padding: ${sp.base} ${sp.lg};

  @media(${bp.xxl}) {
    grid-template-columns:1fr 3fr;
    grid-gap: ${sp.xxxl};
    padding: ${sp.base} ${sp.xxl} ${sp.xxl};
  }

  & .blurb {
    font-size: ${fs.base};

    @media(${bp.xxl}) {
      max-width: 80%;
    }
  }

  & p {
    box-shadow: none;
    font-weight: 300;
    font-size: calc(${fs.xs} + 2.8vw);
    margin-top: 0;

    & span {
      font-weight: 900;
    }
  }
`

export default () => (
  <Layout>
    <Head title="House of Giants" titleTemplate="%s" />
    <StyledHero>
      <DisplayHeading>House of Giants</DisplayHeading>
      <div className="blurb">
        <p className="h2">Dreaming of <span>innovation</span>, experimenting with <span>dedication</span>, creating web applications with <span>purpose</span>. Living in the pursuit of <span>prosperity</span>, our greatest accomplishments are ahead of us.</p>
      </div>
    </StyledHero>
  </Layout>
)


