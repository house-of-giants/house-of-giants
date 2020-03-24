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
          <motion.div initial={{ x: '100%' }} animate={{ x: '0' }} exit={{ x: '100%' }} transition={{ ease: "easeInOut", stiffness: 100 }} className="site-nav">
            <ul>
              {navItems.map( navItem => <NavItem key={navItem.name} navItem={navItem} /> )}
            </ul>
            <div className="who">
              <div className="how">
                <h3>Get in Touch</h3>
                <p>We're always around to chat. Consulting, general questions, work from home tips, we've got it all. Get at us <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;</a></p>
              </div>
              <div className="what">
                <h3>Working with us</h3>
                <p>Gone are the days of redundant layouts just for the sake of fashion, inaccessible websites, or the small mindedness of the Web 2.0 revolution. We are here to do cool shit, think big, and become GIANTS.</p>
              </div>
            </div>
          </motion.div>
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
