import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';

function Settings() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Settings:</h1>
        <h3>How are you feeling?</h3>
        <select>
        <option value="anxious">Anxious/Panicky</option>
        <option value="angry">Angry/Frustrated</option>
          <option value="sad">Depressed/Sad</option>
        </select>
        <h3>Meditation Mastery:</h3>
        <select>
          <option value="5">5 seconds (Beginner)</option>
          <option value="7">7 seconds (Intermediate)</option>
          <option value="10">10 Seconds (Guru)</option>
        </select>
        <Link to="/">Back</Link>
      </header>
    </div>
  );
}

export default Settings;
