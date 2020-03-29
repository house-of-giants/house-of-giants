import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const NavItem = ( { navItem, variants } ) => {
  const { name, slug } = navItem

  return (
    <motion.li variants={variants}>
      <Link to={slug}>
        {name}
      </Link>
    </motion.li>
  )
}

export default NavItem