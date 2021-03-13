import React, { Suspense, useState } from 'react'
import '../App.css';
import {useHistory} from 'react-router-dom'
import useGifs from '../hooks/useGifs'
import Loading from '../components/Loading'
import Gifs from '../components/Gifs'
import LazyTranding from '../components/LazyTranding';


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
				<h4 className="logo">Owl Gifphy</h4>
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
						<LazyTranding/>
					</section>
				</section>				
			</div>
		}
		</>
	)
}

export default Home
