import { useEffect, useState } from 'react';
import {API} from '../services/getGifs';

const INITIAL_PAGE = 0

const useGifs = ({keyword} = {keyword: null}) => {

	const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  
  const keywordToUSe = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)
		// recuperamos la keyword de localStorage
    API({keyword : keywordToUSe})
      .then(gif => {
        setGifs(gif)
        setLoading(false)
        // Guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUSe])

  useEffect(() => {
    if(page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    API({keyword: keywordToUSe, page})
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })


  }, [page, keywordToUSe])

	return {loading, gifs, loadingNextPage, setPage}
}

export default useGifs
