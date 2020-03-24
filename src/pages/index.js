import React from "react"

import Head from "../theme/Head"
import Layout from "../theme/Layout"
import DisplayHeading from "../components/typography/DisplayHeading"
import styled from "styled-components"
import { sp, fs, colors, bp } from "../styles/base/variables"

const StyledHero = styled.div`
  align-items: star;
  border-bottom: 2px dotted ${colors.richBlack};
  display: grid;
  padding: ${sp.base} ${sp.lg};

  @media(${bp.xl}) {
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

  & h2 {
    display: inline;
    line-height: 1;
    padding: 0;
  }

  & p {
    &:first-of-type {
      padding-top: ${sp.base};
    }
  }
`

export default () => (
  <Layout>
    <Head title="House of Giants" titleTemplate="%s" />
    <StyledHero>
      <DisplayHeading>House of Giants</DisplayHeading>
      <div className="blurb">
        <h2>Hello Fellow Human.</h2>
        <p>Welcome to House of Giants, a Web Development shop based out of Denver, CO. Our expertise lies in easily maintainable, extensible, and scalable code that meets any business need.</p>
        <p>Our paramount priority is providing well built, innovative, effective and kick-ass Web and Graphic work. We believe in community, communication and a constant way of thinking in which we are always pushing ourselves, and you, to do the best work we possibly can.</p>
        <p>Gone are the days of redundant layouts just for the sake of fashion, inaccessible websites, or the small mindedness of the Web 2.0 revolution. We are here to do cool shit, think big, and become GIANTS.</p>
      </div>
    </StyledHero>
  </Layout>
)
