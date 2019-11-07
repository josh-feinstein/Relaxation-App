import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Complete from './components/Complete';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Meditate from './components/Meditate';
import Settings from './components/Settings';
import './css/Home.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/complete">
            <Complete />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/meditate">
            <Meditate />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
