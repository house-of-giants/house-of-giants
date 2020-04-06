import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import Activator from './Activator'
import NavItem from './NavItem'

import { StyledNav } from './StyledNav'
import Spaceship from '../SVG/Spaceship'
import { StyledNavHead } from './StyledNavHead'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    x: 50
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: { stiffness: 0, velocity: 100 }
    }
  }
}

const Nav = ( { navItems } ) => {
  const [isOpen, setOpen] = useState(false)

  return(
    <>
      <StyledNavHead>
        <Link className="logo" to="/">
          <Spaceship />
        </Link>
        <Activator onClick={() => setOpen( !isOpen )} isOpen={isOpen} />
      </StyledNavHead>
      <StyledNav>
        <AnimatePresence>
          { isOpen &&
            <motion.div variants={container} initial="hidden" animate="show" exit={{ opacity: 0 }} className="site-nav">
              <ul>
                {navItems.map( navItem => <NavItem variants={item} key={navItem.name} navItem={navItem} isOpen={isOpen} setOpen={setOpen} /> )}
              </ul>
              <div className="who">
                <div className="how">
                  <h3 id="contact">Get in Touch</h3>
                  <p>We're always around to chat. Consulting, general questions, work from home tips, we've got it all. Get at us <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;</a></p>
                </div>
                <div className="what">
                  <h3>Working with us</h3>
                  <p>Dreaming of innovation, experimenting with passion, creating with purpose. Living in the pursuit of prosperity, our greatest accomplishments are ahead of us. We strive to push open the doors to the House of Giants.</p>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </StyledNav>
    </>
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
