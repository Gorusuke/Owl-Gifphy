import React from 'react'
import '../App.css';
import useGifs from '../hooks/useGifs'
import Loading from '../components/Loading'
import Gifs from '../components/Gifs'
import LazyTranding from '../components/LazyTranding';
import SearchForm from '../components/SearchForm';


const Home = () => {
	
	const {loading, gifs} = useGifs()

	return (
		<>
		{loading 
		?	<Loading/>
		: <div className="home-container">
				<h4 className="logo">Owl Gifphy</h4>
				<SearchForm />	
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
