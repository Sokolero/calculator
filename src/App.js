import React, { Component } from "react";

import Calc from "./components/Calc.js";
import Toggle from "./components/Toggle.js";

import "./App.css";



// ----- App component --------------------------------------------------------
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    }
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme() {
    const mapping = {
      light: "dark",
      dark: "light",
    };

    this.setState((state, props) => ({ theme: mapping[state.theme] }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <h1 className="header__heading">CALCULATE IT!</h1>
            <Toggle handleToggleTheme={ this.handleToggleTheme} theme={ this.state.theme }/>
          </div>
          <Calc />
        </div>
      </div>
    );
  }
}

// const App = (props) => {
//   return (
//     <div className="wrapper">
//       <div className="container">
//         <h1 className="heading">CALCULATE IT!</h1>
//         <Calc />
//       </div>
//     </div>
//   );
// }

export default App;
