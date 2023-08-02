import React from 'react'

import HomePageBoxes from './HomePageBoxes'
import { projectObj } from './projectObj'

const Projects = () => {
  return (
    <>
        <h1 className="projectHeading">Projects</h1>
        <div className='projects'>
          {Object.keys(projectObj).map((project) => {
            return (
              <HomePageBoxes
                title={projectObj[project].title}
                description={projectObj[project].description}
                pos="middle"
                canGrow={true}
                style={projectObj[project].styles}
              />
            )
          })}
        </div>
    </>
  )
}

export default Projects