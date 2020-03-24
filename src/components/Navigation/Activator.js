import React from 'react'

const Activator = ( { onClick, isOpen } ) => (
  <button onClick={onClick} className={`activator${isOpen ? ' -active' : ''}`}>
    <span className="screen-reader-text">Toggle Navigation</span>
  </button>
)

export default Activator