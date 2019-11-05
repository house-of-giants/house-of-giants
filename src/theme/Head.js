import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({ data }) => (
  <Helmet>
    {/* @TODO :: Figure out how to output current page title in <title> */}
    <title>{data.site.siteMetadata.title} | </title>
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto&display=swap" rel="stylesheet"></link>
  </Helmet>
)

export default props => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => <Head data={data} {...props} /> }
  />
)

Head.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
