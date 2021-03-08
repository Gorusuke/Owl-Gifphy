import React, { useState } from 'react'
import '../App.css';
import {Link, useHistory} from 'react-router-dom'

const POPULAR_GIFS = ['colombia', 'anime', 'panda', 'brawl stars']

const Home = () => {

	const [keyword, setKeyword] = useState('')
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`./search/${keyword}`)
	}

	const handleChange = (e) => {
		setKeyword(e.target.value)
	}


	return (
		<div className="content">
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} placeholder="Search a gif here..!" type='text'/>
			</form>
			<h2>Los gifs mas populares</h2>
			<ul>
				{POPULAR_GIFS.map(popular => 
					<li key={popular}>
						<Link className="link" to={`/search/${popular}`}>Gifs de {popular}</Link>                
					</li>
				)}
			</ul>
		</div>
	)
}

export default Home
