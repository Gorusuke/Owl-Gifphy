import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


const Gifs = ({gif, change}) => {
  const {id, title, url} = gif

  return (
    <div className="gif">
      {change 
        ? <div className="gif-img-container">
            <h2 className="gif-title">{title}</h2>
            <small className="small">{title}</small>
            <img src={url} alt={title} />
          </div>
        : <div className="img-container">
            <small className="small">{title}</small>
            <Link to={`/gif/${id}`}>
              <img src={url} alt={title} />
            </Link>
          </div>
        }
    </div>
  )
}

export default React.memo(Gifs)
