import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ListOfGifs from './page/ListOfGifs'
import Home from './page/Home'
import Gif from './page/Gif';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search/:keyword' component={ListOfGifs}/>
        <Route exact path='/gif/:id' component={Gif}/>
      </Switch>
    </Router>
  );
}

export default App;
