import '../App.css';
import Gifs from '../components/Gifs';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import useGifs from '../hooks/useGifs';


const ListOfGifs = ({match}) => {

	const {keyword} = match.params
  const {loading, gifs} = useGifs({keyword})
	console.info(keyword)

	return (
		<div className="App">
		{loading 
			? <Loading/>
			: <section className="content">
					<Link to='/' className="link-home">
						<h4 className="logo">Owl Gifphy</h4>
					</Link> 
					<section className="app-content-container">
						<h5 className="busqueda">{decodeURI(keyword)}</h5>     
						<section className="App-content">
							{gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)}
						</section>
					</section> 										
				</section>
		}
		</div>
	)
}

export default ListOfGifs
