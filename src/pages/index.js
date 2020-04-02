import React from 'react'

import Head from '../theme/Head'
import Layout from '../theme/Layout'
import DisplayHeading from '../components/Typography/DisplayHeading'
import StyledHero from '../components/Hero/StyledHero'
import styled from 'styled-components'
import { colors, sp } from '../styles/base/variables'

const StyledBox = styled.section`
  align-items: center;
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
  display: flex;
  flex-direction: column;
  position: relative;
`

const StyledWorkCTA = styled.div`
  padding: ${sp.xxl};
  width: 100%;

  &:last-child {
    padding-top: 0;
  }

  &:hover {
    & > img {
      opacity: 0.6;
    }
  }

  & img {
    filter: grayscale(1) contrast(1.5);
    height: 100%;
    left: 0;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition opacity 300ms ease;
    width: 100%;
  }

  & .work-title {
    line-height: 0.8;
    position: relative;
    text-align: center;
    word-spacing: 100vw;
    z-index: 1;
  }
`

export default () => (
  <Layout>
    <Head title="House of Giants" titleTemplate="%s" />
    <StyledHero>
      <DisplayHeading>House of Giants</DisplayHeading>
      <div className="blurb">
        <p>Dreaming of <span>innovation</span>, experimenting with <span>dedication</span>, creating web applications with <span>purpose</span>. Living in the pursuit of <span>prosperity</span>, our greatest accomplishments are ahead of us.</p>
      </div>
    </StyledHero>
    <StyledBox bg={colors.richBlack} color={colors.mintCream}>
        <StyledWorkCTA>
          <img src="https://compassionate-lamarr-33dd20.netlify.com/sheryl-stretch.jpg" />
          <h3 className="h1 work-title">Sheryl Glubok</h3>
        </StyledWorkCTA>
        <StyledWorkCTA>
          <img src="https://images.unsplash.com/photo-1548103898-96322e3154b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
          <h3 className="h1 work-title">The Spoon</h3>
        </StyledWorkCTA>
    </StyledBox>
  </Layout>
)
