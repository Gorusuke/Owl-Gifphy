import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { gifTrending } from '../services/getGifs';
import Loading from './Loading';

const TrendingSeaches = () => {

  const [trending, setTrending] = useState([])
  const [spinner, setSpinner] = useState(false)

	useEffect(() => {
    setSpinner(true)
		gifTrending().then(result => {
      setTrending(result)
      setSpinner(false)
    })
	}, [])

  return (
    <>
      {spinner 
        ? <Loading />
        : <>
            <h2>Tendencias.!</h2>
            <ul>
              {trending.map((trend, i) => 
                <li key={i}>
                  <Link className="link" to={`/search/${trend}`}>{trend}</Link>                
                </li>
              )}
            </ul>
          </>
      }
    </>
  )
}

export default TrendingSeaches
