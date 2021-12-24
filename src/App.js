import React, { Component } from "react";

import Calc from "./components/Calc.js";
import Toggle from "./components/Toggle.js";
import Menu from "./components/Menu.js";
import MenuToggler from "./components/MenuToggler.js";
import ErrorBoundary from "./components/ErrorBoundary.js";

import { ThemeContext, MenuContext } from "./components/themeContext.js";

import "./App.css";


// ----- App component --------------------------------------------------------
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      menu: "closed",
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

  handleToggleMenu = () => {

    const switching = {
      closed: "opened",
      opened: "closed",
    };

    this.setState((state, props) => ({ menu: switching[state.menu] }));
  }

  render() {
    return (
      <ThemeContext.Provider value={ this.state.theme }>
        <div className="wrapper">
          <div className="container">
            <div className="header">
              <h1 className="header__heading">CALCULATE IT!</h1>
              <ErrorBoundary>
                <Toggle handleToggleTheme={ this.handleToggleTheme} theme={ this.state.theme }/>
              </ErrorBoundary>
            </div>
            <div className="calc-wrapper">
              <ErrorBoundary>
                <Calc />
              </ErrorBoundary>
                            
              <ErrorBoundary>
                <MenuToggler handleToggleMenu={ this.handleToggleMenu } menu={ this.state.menu } />
                <Menu menu={ this.state.menu } />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}


export default App;
