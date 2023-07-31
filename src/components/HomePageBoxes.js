import React from 'react'
import HomePageButtons from './HomePageButtons';

const HomePageBoxes = ({ title, description, pos, isBlack, style }) => {
  const determinePos =(pos) => {
    if (pos==="right")
      return "right";
    else if (pos==="left")
      return "left";
    else
      return "middle";
  }
  return (
    <div className={`homepagesections ${determinePos(pos)} ${isBlack ? 'blackHomePageBox' : ''}`} style={style}> 
        <h1>{title}</h1>
        <p>{description}</p>
        {title !== "Kelvin Fang" && <HomePageButtons title={title}/>}
    </div>  
  )
}

HomePageBoxes.defaultProps = {
  isBlack: false,
}

export default HomePageBoxes