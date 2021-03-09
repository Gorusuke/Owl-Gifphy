import React, { useEffect, useState } from 'react'
import Gifs from '../components/Gifs'
import Loading from '../components/Loading'
import {gifsById} from '../services/getGifs';
import logo from '../logo.png'
import { Link } from 'react-router-dom';


const Gif = ({match}) => {

	const {id} = match.params
	const [byId, setByID] = useState([])
	const [loading, setLoading] = useState(false)
	
	
	useEffect(() => {
		setLoading(true)
		gifsById({id}).then(gifId => {
			const {url, id} = gifId
			setByID({url, id})
			setLoading(false)
		})
		// eslint-disable-next-line
	}, [])


	return (
		<>
			{loading 
				? <Loading/>
				: <div className="home-container">
						<img className="gif-img" src={logo} alt="logo"/>
						<div className="gif-container">
							{<Gifs key={byId.id} gif={byId} change/>}
						</div>
						<Link to='/' >
							<button>Volver a Inicio</button>
						</Link> 
					</div>
			}
		</>
	)
}

export default Gif
