import React, { useEffect, useState } from 'react'
import Gifs from '../components/Gifs'
import Loading from '../components/Loading'
import {gifsById} from '../services/getGifs';
import { Link } from 'react-router-dom';
import logo from '../Logo.png'



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
						<Link to='/' className="link-home">
						<div className="title-logo">
							<div className="logo-container">
								<img src={logo} alt="Logo"/>
							</div>
							<h4>Owl Gifphy</h4>
						</div>
					</Link> 
						<div className="gif-container">
							{<Gifs key={byId.id} gif={byId} change/>}
						</div>
					</div>
			}
		</>
	)
}

export default Gif
