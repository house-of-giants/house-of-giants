import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Navigation = ({navItems}) => (
  <nav>
    <ul>
      {navItems.map( navItem => (
        <li key={navItem.name}>
          <Link to={navItem.slug}>
            {navItem.name}
          </Link>
        </li>
      ) )}
    </ul>
  </nav>
)

export default props => (
  <StaticQuery
    query={query}
    render={ data => <Navigation navItems={data.site.siteMetadata.nav} {...props} /> }
  />
)

const query = graphql`
query NavItemsQuery {
  site {
    siteMetadata {
      nav {
        name
        slug
      }
    }
  }
}
`
