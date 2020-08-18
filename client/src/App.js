import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Posts from './screens/Posts/Posts'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts}/>
      </Switch>
      
    </div>
  );
}

export default App;
