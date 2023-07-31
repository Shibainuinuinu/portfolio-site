import logo from './logo.svg';
import Header from './components/Header';
import HomePageBoxes from './components/HomePageBoxes';
import AboutMe from './components/AboutMe';
import { useState } from 'react';
import './App.css';


import kelvinpic1 from './images/kelvinpic1.jpg'
import kelvinpic2 from './images/kelvinpic2.jpeg'

function App() {
  const [AboutMeCarousel, setAboutMeCarousel] = useState([
    {
      index: 0,
      src: kelvinpic1,
      alt: "kelvinpic1",
    },
    {
      index: 1,
      src: kelvinpic2,
      alt: "kelvinpic2",
    },
  ])

  return (
    <div className="App">
        <Header />
        <AboutMe carousel={AboutMeCarousel}/>
        <div className='main'>
          <HomePageBoxes title="Projects" description="These are my projects" pos='left'/>
          <HomePageBoxes title="Projects" description="These are my projects" pos='right'/>
          <HomePageBoxes title="Projects" description="These are my projects" pos='left'/>
        </div>
    </div>
  );
}

export default App;
