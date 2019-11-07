import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>It's Time to Relax</h1>
        <Link className="link" to="/meditate">Begin</Link>
        <Link className="link" to="/instructions">Instructions</Link>
        {/*<Link to="/settings">Settings</Link>}*/}
      </header>
    </div>
  );
}

export default Home;
