import React, { Component } from "react";

import Panel from "./Panel.js";
import Display from "./Display.js";

import { clear, backspace, typeNumber, applyAction, result, summ } from "../utils/utils.js";


// --- Buttons mapping on handler-functions ------------------------
const btnTypes = {
  clear,
  backspace,
  percent: applyAction,
  division: applyAction,
  multiple: applyAction,
  subtraction: applyAction,
  addition: applyAction,
  one: typeNumber,
  two: typeNumber,
  three: typeNumber,
  four: typeNumber,
  five: typeNumber,
  six: typeNumber,
  seven: typeNumber,
  eight: typeNumber,
  nine: typeNumber,
  nothing: (state) => state,
  null: typeNumber,
  comma: typeNumber,
  result: result,
};

// ----------- Calc Component -------------------------------------------------
class Calc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      mode: "reset", // typing, reset
      valueListing: [],
      action: summ, // summ, div, multi, subpract, percent,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnValue, btnName) {
    this.setState((state, props) => btnTypes[btnName](state, btnValue));
  }



  render() {
    return(
      <div className="calc">
        <Display displayValue={ this.state.displayValue } />
        <Panel handleClick={ this.handleClick } />
      </div>
    );
  }
}

export default Calc;
