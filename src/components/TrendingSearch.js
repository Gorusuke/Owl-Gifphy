import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
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

  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {

    const onChange = (entries) => {
      const element = entries[0]
      console.info(element.isIntersecting)
      if(element.isIntersecting){
        setShow(true)
        observer.disconnect()
      } 

    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '200px'
    })
    
    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])


  return <div ref={elementRef}>
    {show ? <TrendingSearch/> : null}
  </div>

}

export default LazyTranding;
