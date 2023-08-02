import React from 'react'

const HomePageButtons = ({ title, icon }) => {
  return (
    <button className="homePageButtons">
      {title}
      {console.log(icon)}
      {icon ? <img style ={{width: '5%', heigh: 'auto'}}src={icon} alt={title} />: ''}
      </button>
  )
}

export default HomePageButtons