import React from 'react'

import StyledListItem from './StyledListItem'

const romanize = count => {
  const num = parseInt(count) + 1
  if (isNaN(num))
      return NaN;
  var digits = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

const ListItem = ({ name, img, count, services, url }) => (
  <StyledListItem>
    <img src={img} alt="" />
    <a href={url} className="details" target="_blank" rel="noopener noreferrer" >
      <h5 className="figure">Fig <small>{romanize(count)} .</small></h5>
      <h3 className="h1 title">{name}</h3>
      <div className="services">
        <p>&nbsp;{services.map(service => `${service} \\ `)}</p>
        <p aria-hidden="true">&nbsp;{services.map(service => `${service} \\ `)}</p>
      </div>
    </a>
  </StyledListItem>
)

export default ListItem