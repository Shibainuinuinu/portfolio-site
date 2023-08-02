import React from 'react'
import { useState } from 'react'

import ImageCarousel from './ImageCarousel';
import HomePageBoxes from './HomePageBoxes'

import valPic1 from '../images/games/valpic1.png'
import valPic2 from '../images/games/valpic2.png'
import valPic3 from '../images/games/valpic3.png'
import valPic4 from '../images/games/valpic4.png'
import wAndC1 from '../images/wAndC/wAndC1.png'
import wAndC2 from '../images/wAndC/wAndC2.png'

const Projects = () => {
    const [valorantCarousel, setValorantCarousel] = useState([
        {
          index: 0,
          src: valPic1,
          alt: "valPic1",
          'data-active': true,
        },
        {
          index: 1,
          src: valPic2,
          alt: "valPic2",
          'data-active': false,
        },
        {
          index: 2,
          src: valPic3,
          alt: "valPic3",
          'data-active': false,
        },
        {
          index: 3,
          src: valPic4,
          alt: "valPic4",
          'data-active': false,
        },
      ])
      const [wAndCCarousel, setwAndCCarousel] = useState([
        {
            index: 0,
            src: wAndC1,
            alt: "wAndC1",
            'data-active': true,
          },    
          {
            index: 1,
            src: wAndC2,
            alt: "wAndC2",
            'data-active': false,
          },    
      ])

      const valDescrip = `
      This is my top 10 winning website from my internship at 
      Code Tenderloin. This project utilizes HTML, CSS, and Javascript, 
      and was the first time I ever made a fully functional website.
      It is based on the official Valorant website.`
      const wAndC = `
      This is my top 3 projects from my spring Python class at Mission Bit. It won 
      the category for most technical project. This project uitlizes python and APIs 
      including the OpenWeatherApp API and Yelp Fusion API. It suggests clothes based
      on the the current weather in SF and suggests local businesses to purchase these 
      clothes from.`
      const  valStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${valPic2})`,
        objectFit: 'cover',
        objectPosition: 'center',
      }
      const wAndCStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${wAndC1})`,
        objectFit: 'cover',
        objectPosition: 'center',     
      }
  return (
    <>
        <h1 className="projectHeading">Projects</h1>
        <div className='projects'>
            <div className='singleproject'>
                <HomePageBoxes title="Valorant Website" description={valDescrip} pos='middle' canGrow={true} style={valStyles}/>
            </div>
            <div className='singleproject'>
                <HomePageBoxes title="Weather And Clothes App" description={wAndC} pos='middle' canGrow={true} style={wAndCStyles}/>
            </div>
        </div>
    </>
  )
}

export default Projects