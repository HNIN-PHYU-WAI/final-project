import React from 'react';
import Weather from "./weather.js";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Bangkok" />
      </div>
      <div className="link">
        <p>Coded by HNIN PHYU WAI And It Is</p>
        <a
          className="App-link"
          href="https://www.github.com/HNIN-PHYU-WAI"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
      </div>
    </div>
  );
}

export default App;
