import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <img src="images/catlogo.png" class="logo"/>
        </div>
        <div>
            <nav>
                <div class="navLinks">
                    <a href="pages/music.html">About Me</a>
                    <a href="pages/movies.html">Projects</a>
                    <a href="index.html">Connect</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
