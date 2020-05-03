import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({ title, titleTemplate }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultTitleTemplate
        }
      }
      }) => {
        const meta = {
          title: title || defaultTitle,
          titleTemplate: titleTemplate || defaultTitleTemplate,
        }
        return (
          <Helmet title={meta.title} titleTemplate={meta.titleTemplate}>
            <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Roboto:300,400,900&display=swap" rel="stylesheet"></link>
            <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='spaceship' className='spaceship' viewBox='0 0 48.6 73.6'%3E %3Cstyle%3E circle, path %7B fill: black; %7D @media (prefers-color-scheme: dark) %7B circle, path %7B fill: white; %7D %7D %3C/style%3E %3Ccircle cx='24.4' cy='35.2' r='4.4'%3E%3C/circle%3E%3Cpath d='M24.5 0h-.2C23.3.9 0 22.2 0 70.6v3l2.9-.6c.8-.2 11.1-2.5 21.4-9.7C34.6 70.5 45 72.8 45.7 73l2.9.6v-3C48.7 22.2 25.5.9 24.5 0zm-.1 7c3.8 4.6 10.3 14.1 14.7 28.9-2.7 9.5-8.5 16.4-14.7 21.4-6.2-4.9-12-11.8-14.7-21.4 2-6.7 4.3-12.1 6.5-16.3 3-5.8 6-10 8.2-12.6zM4.9 67.5c.2-8.9 1.2-16.7 2.7-23.5 3.2 6.8 7.8 12.1 12.7 16.2-6.1 3.9-12 6.2-15.4 7.3zm23.6-7.3c4.9-4.1 9.5-9.4 12.7-16.3 1.5 6.9 2.5 14.7 2.7 23.5-3.4-1-9.3-3.2-15.4-7.2z'%3E%3C/path%3E%3Cpath d='M28.5 60.2c-1.3 1.1-2.7 2.2-4.1 3.1 1 .7 2 1.3 3 1.9 0 0 1.7-1.3 3.3-3.7 0 .1-1.5-.8-2.2-1.3zm-8.2 0c1.3 1.1 2.7 2.2 4.1 3.1-1 .7-2 1.3-3 1.9 0 0-1.7-1.3-3.3-3.7 0 .1 1.5-.8 2.2-1.3z'%3E%3C/path%3E%3Ccircle cx='24.4' cy='35.2' r='4.4'%3E%3C/circle%3E%3Cpath d='M24.5 0h-.2C23.3.9 0 22.2 0 70.6v3l2.9-.6c.8-.2 11.1-2.5 21.4-9.7C34.6 70.5 45 72.8 45.7 73l2.9.6v-3C48.7 22.2 25.5.9 24.5 0zm-.1 7c3.8 4.6 10.3 14.1 14.7 28.9-2.7 9.5-8.5 16.4-14.7 21.4-6.2-4.9-12-11.8-14.7-21.4 2-6.7 4.3-12.1 6.5-16.3 3-5.8 6-10 8.2-12.6zM4.9 67.5c.2-8.9 1.2-16.7 2.7-23.5 3.2 6.8 7.8 12.1 12.7 16.2-6.1 3.9-12 6.2-15.4 7.3zm23.6-7.3c4.9-4.1 9.5-9.4 12.7-16.3 1.5 6.9 2.5 14.7 2.7 23.5-3.4-1-9.3-3.2-15.4-7.2z'%3E%3C/path%3E%3Cpath d='M28.5 60.2c-1.3 1.1-2.7 2.2-4.1 3.1 1 .7 2 1.3 3 1.9 0 0 1.7-1.3 3.3-3.7 0 .1-1.5-.8-2.2-1.3zm-8.2 0c1.3 1.1 2.7 2.2 4.1 3.1-1 .7-2 1.3-3 1.9 0 0-1.7-1.3-3.3-3.7 0 .1 1.5-.8 2.2-1.3z'%3E%3C/path%3E%3C/svg%3E" />
          </Helmet>
        )
      }
    }
  />
)

const query = graphql`
query SiteMetaQuery {
  site {
    siteMetadata {
      defaultTitle
      defaultTitleTemplate
    }
  }
}
`

Head.propTypes = {
  title: PropTypes.string,
}

Head.defaultProps = {
  title: null,
}

export default Head