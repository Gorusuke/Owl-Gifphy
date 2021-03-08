import { useEffect, useState } from 'react';
import './App.css';
import Gifs from './components/Gifs';
import Loading from './components/Loading';
import API from './services/getGifs';

function App() {

  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState('anime')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API({keyword}).then(gif => {
      setGifs(gif)
      setLoading(false)
    })
  }, [keyword])

  
  return (
    <div className="App">
      {loading 
        ? <Loading/>
        : <section className="App-content">
            <button onClick={() => setKeyword('mapache')}>Cambiar Keyword</button>               
            {
              gifs.map(gif => <Gifs key={gif.id} gif={gif}/>)
            }
          </section>
      }
    </div>
  );
}

export default App;
