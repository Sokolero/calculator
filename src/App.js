import React, { Component } from "react";

import Calc from "./components/Calc.js";

import "./App.css";

// ----- App component --------------------------------------------------------
const App = (props) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">CALCULATE IT!</h1>
        <Calc />
      </div>
    </div>
  );
}

export default App;
