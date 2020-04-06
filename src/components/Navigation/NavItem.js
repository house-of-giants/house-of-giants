import React from 'react'
import { motion } from 'framer-motion'

const NavItem = ( { navItem, variants, setOpen, isOpen } ) => {
  const { name, slug } = navItem

  return (
    <motion.li variants={variants}>
      <a href={`#${slug}`} onClick={() => setOpen( !isOpen )}>
        {name}
      </a>
    </motion.li>
  )
}

export default NavItem