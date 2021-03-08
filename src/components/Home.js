import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="App-content">
            <h2>App</h2>
            <Link to='/gif/colombia'>Gifs de Colombia</Link>
            <Link to='/gif/anime'>Gifs de Anime</Link>
            <Link to='/gif/pandas'>Gifs de Pandas</Link>
            <Link to='/gif/brawl stars'>Gifs de Brawl Stars</Link>
        </div>
    )
}

export default Home
