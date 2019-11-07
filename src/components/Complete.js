import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';

function Complete() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Great Work</h1>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
}

export default Complete;
