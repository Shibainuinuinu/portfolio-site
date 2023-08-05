import React from 'react'

const Header = () => {
    const scroll = (target) => {
        const section = document.querySelector(target);
        section.scrollIntoView({behavior: 'smooth'});
    } 
  return (
    <header>
        <div>
            <img src="images/catlogo.png" className="logo"/>
        </div>
        <div>
            <nav>
                <div className="navLinks">
                    <a onClick={() => scroll(".AboutMe")}>About Me</a>
                    <a onClick={() => scroll(".main")}>Projects</a>
                    <a onClick={() => scroll(".AboutMe")}>Connect</a>

                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
