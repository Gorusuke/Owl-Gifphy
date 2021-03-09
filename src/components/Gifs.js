import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


const Gifs = ({gif, change}) => {
  const {id, title, url} = gif

  return (
    <div className="gif">
      {/* <h4>{title}</h4> */}
      <div className="img-container">
        <small className="small">{id}</small>
        {change 
          ? <img src={url} alt={title} />
          : <Link to={`/gif/${id}`}>
              <img src={url} alt={title} />
            </Link>
        }
      </div>
    </div>
  )
}

export default Gifs
