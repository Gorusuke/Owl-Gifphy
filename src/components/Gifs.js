import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


const Gifs = ({gif, change}) => {
  const {id, title, url} = gif

  return (
    <div className="gif">
      <div className="img-container">
        <small className="small">{title}</small>
        {change 
          ? <div className="gif-img-container">
              <img src={url} alt={title} />
            </div>
          : <Link to={`/gif/${id}`}>
              <img src={url} alt={title} />
            </Link>
        }
      </div>
    </div>
  )
}

export default React.memo(Gifs)
