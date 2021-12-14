import React, { Component } from "react";

import Panel from "./Panel.js";
import Display from "./Display.js";

const calculate = (expression) => {
  return expression;
};

const typeNumber = (clicked) => {
  return (currentValue) => currentValue === "0" ? clicked : currentValue + clicked;
};

const btnActions = {
  clear: (current) => "0",
  backspace: (current) => (current.length > 1 ? current.slice(0, current.length - 1) : current),
  percent: calculate("percent"),
  division: calculate("division"),
  multiple: calculate("multiplication"),
  subtraction: calculate("subtraction"),
  addition: calculate("addition"),
  one: typeNumber("1"),
  two: typeNumber("2"),
  three: typeNumber("3"),
  four: typeNumber("4"),
  five: typeNumber("5"),
  six: typeNumber("6"),
  seven: typeNumber("7"),
  eight: typeNumber("8"),
  nine: typeNumber("9"),
  nothing: (current) => "",
  null: typeNumber("0"),
  comma: (current) => current +",",
  result: (current) => "0",
}

// ----------- Calc Component -------------------------------------------------
class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      mode: "typing", // addition, subtraction, multiplication, division, percentation
      valueListing: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnValue, btnName) {
    let currentValue = this.state.displayValue;
    const mode = this.state.mode;

    this.setState({
      displayValue: btnActions[btnName](currentValue),
    });
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
