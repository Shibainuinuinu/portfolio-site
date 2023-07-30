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
                    <a href="index.html">Home</a>
                    <a href="pages/music.html">Music</a>
                    <a href="pages/movies.html">Movies</a>
                    <a href="pages/games.html">Games</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
