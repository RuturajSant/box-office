import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';


function App() {
  return (
    <div>
      <Navs/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>
          <div>404 Not Found,Try Again</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
