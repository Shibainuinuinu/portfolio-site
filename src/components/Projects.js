import React from 'react'

import HomePageBoxes from './HomePageBoxes'
import valPic2 from '../images/games/valpic2.png'
import wAndC1 from '../images/wAndC/wAndC1.png'
import googleChatBotPic from '../images/googleChatBot.png'

const Projects = () => {

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
      const gcbot = `This is my Google Chatbot project our CSI Google Tech Cohort worked together 
      to create as the culminating project for our internship. We utilized Google's Dialogflow API,
      and various programming laanguages to design the UI and the Google Help site data. This chatbot
      makes navigating and answering users' questions faster on the Google Help page.`
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
      const gcbotStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${googleChatBotPic})`,
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
            <div className='singleproject'>
                <HomePageBoxes title="Google Help Chatbot" description={gcbot} pos='middle' canGrow={true} style={gcbotStyles}/>
            </div>
        </div>
    </>
  )
}

export default Projects