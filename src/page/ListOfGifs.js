import '../App.css';
import Gifs from '../components/Gifs';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import useGifs from '../hooks/useGifs';
// import useSEO from '../hooks/useSEO';
import {Helmet} from 'react-helmet'


const ListOfGifs = ({match}) => {

	const {keyword} = match.params
  const {loading, gifs, setPage} = useGifs({keyword})

	// useSEO({title: keyword, description: `Detail of ${keyword}`})

	const handleNextPage = () => {
		setPage(prevPage => prevPage + 1)
	}

	return (
		<div className="App">
		{loading 
			? <Loading/>
			: <>
					<Helmet>
						<title> {keyword} || Owl Gifphy </title>
						<meta name="description" content={`Detail of ${keyword}`} />
					</Helmet>
					<section className="content">
						<Link to='/' className="link-home">
							<div className="title-logo">
								<div className="logo-container">
									{/* <img src={logo} alt="Logo"/> */}
								</div>
								<h4>Owl Gifphy</h4>
							</div>
						</Link> 
						<section className="app-content-container">
							<h5 className="busqueda">{decodeURI(keyword)}</h5>     
							<section className="App-content">
								{gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)}
							</section>
						</section> 										
						<button onClick={handleNextPage} className="button">Cargar mas Gifs</button>
					</section>
				</>
		}
		</div>
	)
}

export default ListOfGifs
