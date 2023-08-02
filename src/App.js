import Header from './components/Header';
import HomePageBoxes from './components/HomePageBoxes';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { useState } from 'react';
import './App.css';


import kelvinpic1 from './images/kelvinpic1.jpg'
import kelvinpic2 from './images/kelvinpic2.jpeg'


import githubicon from './images/githubicon.png'


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
  const contentButtons = [
    {
      index: 0,
      name: 'Github',
      icon: githubicon,
    }
  ]
  return (
    <div className="App">
        <Header />
        <AboutMe carousel={AboutMeCarousel}/>
        <div className='main'>
          <Projects/>
          <HomePageBoxes title="Connect" description="These are my projects" pos='middle' style={{marginBottom: '5vh'}}  buttonDetails={contentButtons}/>
        </div>
    </div>
  );
}

export default App;
