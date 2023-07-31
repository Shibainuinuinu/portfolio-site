import logo from './logo.svg';
import Header from './components/Header';
import HomePageBoxes from './components/HomePageBoxes';
import AboutMe from './components/AboutMe';
import { useState } from 'react';
import './App.css';


import kelvinpic1 from './images/kelvinpic1.jpg'
import kelvinpic2 from './images/kelvinpic2.jpeg'
import valPic1 from './images/games/valpic1.png'
import valPic2 from './images/games/valpic2.png'
import valPic3 from './images/games/valpic3.png'
import valPic4 from './images/games/valpic4.png'

import ImageCarousel from './components/ImageCarousel';

function App() {
  const [AboutMeCarousel, setAboutMeCarousel] = useState([
    {
      index: 0,
      src: kelvinpic2,
      alt: "kelvinpic2",
      'data-active': true,
    },
    {
      index: 1,
      src: kelvinpic1,
      alt: "kelvinpic1",
      'data-active': false,
    },
  ])

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
  const valDescrip = `
  This is my top 10 winning website from my internship at 
  Code Tenderloin. This project utilizes HTML, CSS, and Javascript, 
  and was the first time I ever made a fully functional website.
  It is based on the official Valorant website.`
  return (
    <div className="App">
        <Header />
        <AboutMe carousel={AboutMeCarousel}/>
        <div className='main'>
          <h1 className="projectHeading">Projects</h1>
          <div className='projects'>
            <div className='val'>
              <HomePageBoxes title="Valorant Website" description={valDescrip} pos='left'/>
              <ImageCarousel images={valorantCarousel} style={{width: '40vw', marginLeft: '1vw'}}/>
            </div>
          </div>
          <HomePageBoxes title="Connect" description="These are my projects" pos='middle' style={{marginBottom: '5vh'}}/>
        </div>
    </div>
  );
}

export default App;
