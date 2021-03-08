import { useEffect, useState } from 'react';
import '../App.css';
import Gifs from './Gifs';
import Loading from './Loading';
import API from '../services/getGifs';
import { Link } from 'react-router-dom';

const ListOfGifs = ({match}) => {

	console.info(match.params.keyword)

  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState(match.params.keyword)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API({keyword}).then(gif => {
      setGifs(gif)
      setLoading(false)
    })
  }, [keyword])

	console.info(keyword)

	return (
		<div className="App">
		{loading 
			? <Loading/>
			: <section className="App-content">
					{/* <button onClick={() => setKeyword('mapache')}>Cambiar Keyword</button>                */}
					<Link to='/' style={{marginBottom: '1rem'}}>
						<button>Volver a Inicio</button>
					</Link>              
					{
						gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)
					}
				</section>
		}
		</div>
	)
}

export default ListOfGifs
