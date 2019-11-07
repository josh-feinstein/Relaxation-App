import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Settings from './components/Settings';
import Meditate from './components/Meditate';
import './css/Home.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
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
