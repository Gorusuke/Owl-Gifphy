import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import useNearScreen from '../hooks/useNearScreen';
import { gifTrending } from '../services/getGifs';


const TrendingSearch = () => {

  const [trending, setTrending] = useState([])

	useEffect(() => {
		gifTrending().then(result => setTrending(result))
	}, [])

  return (
   <ul>
      {trending.map(trend => 
        <li key={trend}>
          <Link className="link" to={`/search/${trend}`}>{trend}</Link>                
        </li>
      )}
    </ul>
  )
}

const LazyTranding = () => {

  const {show, elementRef} = useNearScreen({distance: '500px'})

  return <div ref={elementRef}>
    {show ? <TrendingSearch/> : null}
  </div>

}

export default LazyTranding;
