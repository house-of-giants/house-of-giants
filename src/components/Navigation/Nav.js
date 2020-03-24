import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import Activator from './Activator'
import NavItem from './NavItem'

import { StyledNav } from './StyledNav'

const Nav = ( { navItems } ) => {
  const [isOpen, setOpen] = useState(false)

  return(
    <StyledNav>
      <Activator onClick={() => setOpen( !isOpen )} isOpen={isOpen} />
      <AnimatePresence>
        { isOpen &&
          <motion.ul initial={{ width: '0vw' }} animate={{ width: '80vw' }} exit={{ width: '0vw' }} transition={{ ease: "easeInOut", stiffness: 100 }} className="site-nav">
            {navItems.map( navItem => <NavItem key={navItem.name} navItem={navItem} /> )}
          </motion.ul>
        }
      </AnimatePresence>
    </StyledNav>
  )
}

export default props => (
  <StaticQuery
    query={query}
    render={ data => <Nav navItems={data.site.siteMetadata.nav} {...props} /> }
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
