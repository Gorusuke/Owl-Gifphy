import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ListOfGifs from './components/ListOfGifs'
import Home from './components/Home'


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/gif/:keyword' component={ListOfGifs}/>
      </Switch>
    </Router>
  );
}

export default App;
