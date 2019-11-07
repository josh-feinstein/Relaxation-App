import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>It's Time to Relax</h1>
        <Link to="/meditate">Meditate CLASS COMPONENT</Link>
        <Link to="/meditate-hooks">Meditate REACT HOOKS</Link>
        <Link to="/settings">Settings</Link>
      </header>
    </div>
  );
}

export default Home;
