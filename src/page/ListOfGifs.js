import { useEffect, useRef, useCallback } from 'react';
import '../App.css';
import Gifs from '../components/Gifs';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import useGifs from '../hooks/useGifs';
import useNearScreen from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';


const ListOfGifs = ({match}) => {

	const {keyword} = match.params
  const {loading, gifs, setPage} = useGifs({keyword})
	const externalRef = useRef()
	const {show} = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false
	})

	const debounceHandleNextPage = useCallback(debounce(
		() => setPage(prevPage => prevPage + 1), 500
	),[])

	useEffect(() => {
		if(show) debounceHandleNextPage()
	}, [debounceHandleNextPage, show])

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
							{gifs.map(gif => <Gifs key={gif.url} gif={gif}/>)}
						</section>
					</section> 
					<div id="visor" ref={externalRef}></div>			
					{/* <button onClick={handleNextPage} className="button">Cargar mas Gifs</button> */}
				</section>
		}
		</div>
	)
}

export default ListOfGifs
