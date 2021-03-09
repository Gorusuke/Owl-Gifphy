import React, { useState } from 'react'
import '../App.css';
import {Link, useHistory} from 'react-router-dom'
import useGifs from '../hooks/useGifs'
import Loading from '../components/Loading'
import Gifs from '../components/Gifs'
import logo from '../logo.png'

const POPULAR_GIFS = ['colombia', 'anime', 'panda', 'brawl stars']

const Home = () => {

	const [keyword, setKeyword] = useState('')
	const history = useHistory();

	const {loading, gifs} = useGifs()

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
					<input onChange={handleChange} placeholder="Search a gif here..!" type='text'/>
				</form>				
				<h4 className="home-title">Ultima Búsqueda</h4>
				<section className="App-content">
					{gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)}
				</section>
				<h2>Los gifs mas populares..!!!</h2>
				<ul>
					{POPULAR_GIFS.map(popular => 
						<li key={popular}>
							<Link className="link" to={`/search/${popular}`}>Gifs de {popular}</Link>                
						</li>
					)}
				</ul>
			</div>
		}
		</>
	)
}

export default Home
