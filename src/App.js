import React from "react";
import Weather from "./weather.js";


import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Bangkok" />
      </div>
      <p className="link">
        Coded by Hnin Phyu Wai and is 
        <a
          href="https://www.github.com/HNIN-PHYU-WAI/final-project"
          className="App-link"
        >
        {""} open source
        </a>
      </p>
    </div>
  );
}

export default App;
