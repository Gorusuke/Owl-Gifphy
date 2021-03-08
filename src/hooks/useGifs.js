import { useEffect, useState } from 'react';
import API from '../services/getGifs';

const useGifs = ({keyword}) => {

	const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API({keyword}).then(gif => {
      setGifs(gif)
      setLoading(false)
    })
  }, [keyword])

	return {loading, gifs}
}

export default useGifs
