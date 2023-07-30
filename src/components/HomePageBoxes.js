import React from 'react'

const HomePageBoxes = ({ title, description, pos }) => {
  return (
    <div class={`homepagesections ${pos==='right' ? 'right' : 'left'}`}> 
        <h1>{title}</h1>
        <p>{description}</p>
        <button class="homePageButtons">{title.toLowerCase()}</button>
    </div>  
  )
}

export default HomePageBoxes