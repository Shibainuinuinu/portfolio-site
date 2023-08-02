import React from 'react';
import HomePageButtons from './HomePageButtons';

const HomePageBoxes = ({ title, description, pos, isBlack, style, buttonDetails, canGrow}) => {
  const determinePos = (pos) => {
    if (pos === "right")
      return "right";
    else if (pos === "left")
      return "left";
    else
      return "middle";
  }

  return (
    <div className={`homepagesections ${determinePos(pos)} ${isBlack ? 'blackHomePageBox' : ''} ${canGrow ? 'growing-box' : ''}`} style={style}> 
      <h1>{title}</h1>
      <p>{description}</p>
      {buttonDetails !== undefined ? buttonDetails.map((button) => (
        <HomePageButtons key={button.name} title={button.name} icon={button.icon} />
      )) : ''}
      {title !== "Kelvin Fang" && title!== "Connect" && <HomePageButtons title={title}/>}
    </div>  
  );
}

HomePageBoxes.defaultProps = {
  isBlack: false,
}

export default HomePageBoxes;
