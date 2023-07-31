import HomePageBoxes from "./HomePageBoxes"
import ImageCarousel from "./ImageCarousel"

const AboutMe = ({ carousel }) => {
    const aboutMeDescription = `Hi, I'm Kelvin! I’m a native of San Francisco and a current 
    junior attending Lowell High School. Previously, I have been an intern at Mission Bit and Code 
    Tenderloin where I learned the fundamentals of web development and coding. I am actively studying 
    programming; currently learning HTML, CSS, Javascript, and Java. I am an aspiring software engineer, 
    hoping to connect with anyone in the tech field.
    
    I've created interactive and engaging websites utilizing programming tools, problem-solving skills, and 
    communication in teams. Examples of projects I’ve made are a mini search engine website, an informational 
    website about animals, and a Valorant website that won one of the top 10 websites in my internship.`

  return (
    <div className="AboutMe">
        <HomePageBoxes title="Kelvin Fang" pos="left" description={aboutMeDescription} isBlack={true} 
        style= {{
          margin: 0, 
        }} />
        <ImageCarousel images={carousel}/>
    </div>
  )
}

export default AboutMe