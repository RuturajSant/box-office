import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Error from './pages/Error';
import Show from './pages/Show';


function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
  );
}

export default App;
