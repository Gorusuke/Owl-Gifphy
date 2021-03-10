import React, { useEffect, useState } from 'react'
import '../App.css';
import {Link, useHistory} from 'react-router-dom'
import useGifs from '../hooks/useGifs'
import Loading from '../components/Loading'
import Gifs from '../components/Gifs'
import logo from '../logo.png'
import { gifTrending } from '../services/getGifs';


const Home = () => {

	const [keyword, setKeyword] = useState('')
	const [trending, setTrending] = useState([])
	const history = useHistory();

	const {loading, gifs} = useGifs()

	useEffect(() => {
		gifTrending().then(result => setTrending(result))
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		if(keyword.length === 0) return null
		history.push(`./search/${keyword}`)
	}

	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

	return (
		<>
		{loading 
		?	<Loading/>
		: <div className="home-container">
				<img className="home-img" src={logo} alt="logo"/>
				<form onSubmit={handleSubmit}>
					<button>Buscar</button>
					<input onChange={handleChange} placeholder="Search a gif here..!" type='text'/>
				</form>				
				<h4 className="home-title">Ultima Búsqueda</h4>
				<section className="gifs-content">
					<section className="home-content">
						{gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)}					
					</section>
					<section className="aside">
						<h2>Tendencias.!</h2>
						<ul>
							{trending.map(trend => 
								<li key={trend}>
									<Link className="link" to={`/search/${trend}`}>{trend}</Link>                
								</li>
							)}
						</ul>
					</section>
				</section>
				
			</div>
		}
		</>
	)
}

export default Home
