import valPic2 from '../images/games/valpic2.png'
import wAndC1 from '../images/wAndC/wAndC1.png'
import googleChatBotPic from '../images/googleChatBot.png'

export const projectObj = {
    val: {
      title: "Valorant Website",
      description: `This is my top 10 winning website from my internship at 
      Code Tenderloin. This project utilizes HTML, CSS, and Javascript, 
      and was the first time I ever made a fully functional website.
      It is based on the official Valorant website.`,
      styles: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${valPic2})`,
        objectFit: 'cover',
        objectPosition: 'center',
      },
    },
    wAndC: {
      title: "Weather And Clothes App",
      description: `This is my top 3 projects from my spring Python class at Mission Bit. It won 
      the category for most technical project. This project uitlizes python and APIs 
      including the OpenWeatherApp API and Yelp Fusion API. It suggests clothes based
      on the the current weather in SF and suggests local businesses to purchase these 
      clothes from.`,
      styles: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${wAndC1})`,
        objectFit: 'cover',
        objectPosition: 'center',     
      }
    },
    gcBot: {
      title: "Google Help Chatbot",
      description: `This is my Google Chatbot project our CSI Google Tech Cohort worked together 
      to create as the culminating project for our internship. We utilized Google's Dialogflow API,
      and various programming laanguages to design the UI and the Google Help site data. This chatbot
      makes navigating and answering users' questions faster on the Google Help page.`,
      styles: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${googleChatBotPic})`,
        objectFit: 'cover',
        objectPosition: 'center',     
      }
    },
}

