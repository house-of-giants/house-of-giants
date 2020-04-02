import React from 'react'

import StyledListItem from './StyledListItem'

const ListItem = ({ name, img, count, services }) => (
  <StyledListItem>
    <img src={img} alt="" />
    <div className="details">
      <span>{count}</span>
      <h3 className="h1 title">{name}</h3>
      <div className="services">
        <p>&nbsp;{services.map(service => `${service} \\ `)}</p>
        <p aria-hidden="true">&nbsp;{services.map(service => `${service} \\ `)}</p>
      </div>
    </div>
  </StyledListItem>
)

export default ListItem