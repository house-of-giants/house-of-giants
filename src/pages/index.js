import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Head from '../theme/Head'
import Layout from '../theme/Layout'
import DisplayHeading from '../components/Typography/DisplayHeading'
import StyledHero from '../components/Hero/StyledHero'
import ListItem from '../components/List/ListItem'

import { colors } from '../styles/base/variables'

const StyledBox = styled.section`
  align-items: center;
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
  display: flex;
  flex-direction: column;
  position: relative;
`

const WorkQuery = graphql`
  query WorkItemsQuery {
    site {
      siteMetadata {
        work {
          name
          img
          services
        }
      }
    }
  }
`

const Home = ({ work }) => (
  <Layout>
    <Head title="House of Giants" titleTemplate="%s" />
    <StyledHero>
      <DisplayHeading>House of Giants</DisplayHeading>
      <div className="blurb">
        <p>Dreaming of <span>innovation</span>, experimenting with <span>dedication</span>, creating web applications with <span>purpose</span>. Living in the pursuit of <span>prosperity</span>, our greatest accomplishments are ahead of us.</p>
      </div>
    </StyledHero>
    <StyledBox bg={colors.richBlack} color={colors.mintCream}>
        {work.map( (workItem, i) => <ListItem key={workItem.name} name={workItem.name} img={workItem.img} count={`${i + 1 <= 9 ? '0' : ''}${i + 1}.`} services={workItem.services} /> )}
    </StyledBox>
  </Layout>
)

export default () => (
  <StaticQuery
    query={WorkQuery}
    render={data => <Home work={data.site.siteMetadata.work} />}
  />
)
