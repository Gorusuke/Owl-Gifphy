import '../App.css';
import Gifs from '../components/Gifs';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import useGifs from '../hooks/useGifs';
import logo from '../logo.png'


const ListOfGifs = ({match}) => {

	const {keyword} = match.params
  const {loading, gifs} = useGifs({keyword})

	return (
		<div className="App">
		{loading 
			? <Loading/>
			: <section className="content">
					<Link to='/' >
						<img className="gif-img" src={logo} alt="logo"/>
					</Link>              
					<section className="App-content">
						{gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)}
					</section>					
				</section>
		}
		</div>
	)
}

export default ListOfGifs
