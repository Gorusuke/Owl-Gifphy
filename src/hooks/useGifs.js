import { useEffect, useState } from 'react';
import {API} from '../services/getGifs';

const useGifs = ({keyword} = {keyword: null}) => {

	const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)

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
  }, [keyword])

	return {loading, gifs}
}

export default useGifs
