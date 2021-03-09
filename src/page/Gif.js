import React, { useContext } from 'react'
import Gifs from '../components/Gifs'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import GifsContext from '../context/GifsContext'


const Gif = ({match}) => {

	const {gifs} = useContext(GifsContext)
	const {id} = match.params
	
	const gifFind =  gifs.find(gif => gif.id === id)

	return (
		<div className="home-container">
			<img className="gif-img" src={logo} alt="logo"/>
			<div className="gif-container">
				{<Gifs key={gifFind.id} gif={gifFind} change/>}
			</div>
			<Link to='/' >
				<button>Volver a Inicio</button>
			</Link> 
		</div>
	)
}

export default Gif
