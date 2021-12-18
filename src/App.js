import React, { Component } from "react";

import Calc from "./components/Calc.js";
import Toggle from "./components/Toggle.js";
import { ThemeContext } from "./components/themeContext.js";

import "./App.css";


// ----- App component --------------------------------------------------------
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    }
    // this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme = () => {

    const switching = {
      light: "dark",
      dark: "light",
    };

    this.setState((state, props) => ({ theme: switching[state.theme] }));
  }

  render() {
    return (
      <ThemeContext.Provider value={ this.state.theme }>
        <div className="wrapper">
          <div className="container">
            <div className="header">
              <h1 className="header__heading">CALCULATE IT!</h1>
              <Toggle handleToggleTheme={ this.handleToggleTheme} theme={ this.state.theme }/>
            </div>
            <Calc />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}


export default App;
