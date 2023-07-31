import React from 'react'

const HomePageBoxes = ({ title, description, pos, isBlack }) => {
  const determinePos =(pos) => {
    if (pos==="right")
      return "right";
    else if (pos==="left")
      return "left";
    else
      return "middle";
  }
  return (
    <div className={`homepagesections ${determinePos(pos)} ${isBlack ? 'blackHomePageBox' : ''}`}> 
        <h1>{title}</h1>
        <p>{description}</p>
        {title !== "Kelvin Fang" && <button className="homePageButtons">{title.toLowerCase()}</button>}
    </div>  
  )
}

HomePageBoxes.defaultProps = {
  isBlack: false,
}

export default HomePageBoxes