import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ListOfGifs from './page/ListOfGifs'
import Home from './page/Home'
import Gif from './page/Gif';
import Context from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext';



function App() {
  
  return (
    <Context.Provider value={{
      name: 'Jose garcia',
      suscribed: true
    }}>
      <Router>
        <Switch>
          <GifsContextProvider>
            <Route exact path='/' component={Home}/>
            <Route exact path='/search/:keyword' component={ListOfGifs}/>
            <Route exact path='/gif/:id' component={Gif}/>
          </GifsContextProvider>
        </Switch>
      </Router>
    </Context.Provider>

  );
}

export default App;
