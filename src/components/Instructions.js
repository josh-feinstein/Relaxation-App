import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';

function Instructions() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Instructions</h1>
        <p>Alternate breathing in and out slowly and deliberately following the on-screen countdown.</p>
        <Link to="/meditate">Begin</Link>
      </header>
    </div>
  );
}

export default Instructions;
