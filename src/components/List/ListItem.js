import React from 'react'

import StyledListItem from './StyledListItem'

const ListItem = ({ name, img, count, services, url }) => (
  <StyledListItem>
    <img src={img} alt="" />
    <a href={url} className="details" target="_blank" rel="noopener noreferrer" >
      <span>{count}</span>
      <h3 className="h1 title">{name}</h3>
      <div className="services">
        <p>&nbsp;{services.map(service => `${service} \\ `)}</p>
        <p aria-hidden="true">&nbsp;{services.map(service => `${service} \\ `)}</p>
      </div>
    </a>
  </StyledListItem>
)

export default ListItem