import React from 'react'
import '../App.css';


const Gifs = ({gif}) => {
  const {id, title, url} = gif
  return (
    <div className="gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <div>
        <img src={url} alt={title} />
      </div>
    </div>
  )
}

export default Gifs
