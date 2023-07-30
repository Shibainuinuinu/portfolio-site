import logo from './logo.svg';
import Header from './components/Header';
import HomePageBoxes from './components/HomePageBoxes';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='main'>
          <HomePageBoxes title="Projects" description="These are my projects" pos='left'/>
          <HomePageBoxes title="Projects" description="These are my projects" pos='right'/>
          <HomePageBoxes title="Projects" description="These are my projects" pos='left'/>
        </div>
    </div>
  );
}

export default App;
