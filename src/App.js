import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is home page
      </Route>
      <Route exact path="/starred">
        this is starred page
      </Route>
      <Route>
        404, Try Again
      </Route>
    </Switch>
  );
}

export default App;
