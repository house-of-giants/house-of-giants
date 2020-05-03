import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Head from '../theme/Head'
import Layout from '../theme/Layout'
import StyledBox from '../components/Content/StyledBox'
import ListItem from '../components/List/ListItem'

import { colors } from '../styles/base/variables'

const WorkQuery = graphql`
  query {
    site {
      siteMetadata {
        work {
          name
          img
          url
          services
        }
      }
    }
  }
`

const Work = ({ work }) => (
  <Layout>
    <Head title="Work" />
    <StyledBox bg={colors.richBlack} color={colors.mintCream} fullH>
        {work.map( (workItem, i) => <ListItem key={workItem.name} name={workItem.name} img={workItem.img} url={workItem.url} count={`${i + 1 <= 9 ? '0' : ''}${i + 1}`} services={workItem.services} /> )}
    </StyledBox>
  </Layout>
)


export default () => (
  <StaticQuery
    query={WorkQuery}
    render={data => <Work work={data.site.siteMetadata.work} />}
  />
)
