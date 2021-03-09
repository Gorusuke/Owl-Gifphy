import { useEffect, useState, useContext } from 'react';
import {API} from '../services/getGifs';
import GifsContext from '../context/GifsContext'

const useGifs = ({keyword} = {keyword: null}) => {

  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
	// const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true)
		// recuperamos la keyword de localStorage
		const keywordToUSe = keyword || localStorage.getItem('lastKeyword') || 'random'
    API({keyword : keywordToUSe}).then(gif => {
      setGifs(gif)
      setLoading(false)
			// Guardamos la keyword en el localStorage
			localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

	return {loading, gifs}
}

export default useGifs
