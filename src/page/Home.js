import React from 'react'
import '../App.css';
import useGifs from '../hooks/useGifs'
import Loading from '../components/Loading'
import Gifs from '../components/Gifs'
import LazyTranding from '../components/LazyTranding';
import SearchForm from '../components/SearchForm';
// import useSEO from '../hooks/useSEO';
import {Helmet} from 'react-helmet'


const Home = () => {
	
	const {loading, gifs} = useGifs()

	// useSEO({})


	return (
		<>
		{loading 
		?	<Loading/>
		: <>
				<Helmet>
					<title> Owl Gifphy </title>
					<meta name="description" content='Owl Gifphy' />
				</Helmet>
				<div className="home-container">
					<div className="title-logo">
						<div className="logo-container">
							{/* <img src={logo} alt="Logo"/> */}
						</div>
						<h4>Owl Gifphy</h4>
					</div>
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
			</>
		}
		</>
	)
}

export default Home
