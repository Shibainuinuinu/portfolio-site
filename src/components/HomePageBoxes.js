import React from 'react'

const HomePageBoxes = ({ title, description, pos, isBlack }) => {
  return (
    <div class={`homepagesections ${pos==='right' ? 'right' : 'left'} ${isBlack ? 'blackHomePageBox' : ''}`}> 
        <h1>{title}</h1>
        <p>{description}</p>
        {title !== "Kelvin Fang" && <button class="homePageButtons">{title.toLowerCase()}</button>}
    </div>  
  )
}

HomePageBoxes.defaultProps = {
  isBlack: false,
}

export default HomePageBoxes