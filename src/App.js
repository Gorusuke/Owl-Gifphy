import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [gifs, setGifs] = useState([]);
  const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=UInUb6GD9aeeP3djuksso0XBBVPUxPAs&q=Brawl Stars&limit=20&offset=0&rating=g&lang=en'

  useEffect(() => {
    const API = () => {
      fetch(apiUrl)
        .then(result => result.json())
        .then(response => {
          const {data} = response;
          const gifs = data.map(image => image.images.downsized_medium.url)
          setGifs(gifs)
        })
    }
    API();
  }, [])

  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => <img src={gif} alt="Gifs" />)
        }              
      </section>
    </div>
  );
}

export default App;
