import React, { Component } from "react";

import Panel from "./Panel.js";
import Display from "./Display.js";


// =============================================================================
// --- Change types to Number --------------
const stringsToNumbers = (strings) => strings.map((item) => Number(item));

const numberToString = (number) => String(number);


// --- Simply addition of arguments ----------
const summ = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return numberToString(_numbers.reduce((previous, current) => {
    return previous + current;
  }, 0));
};

// --- Subtraction of arguments ---------------
const subtract = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return String(_numbers.length > 1 ? _numbers[0] - _numbers[1] : _numbers[0]);
};

// --- Multiplication of list of numbers -------
const multi = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return numberToString(_numbers.reduce((previous, current) => {
    return previous * current;
  }, 1));
};

// --- Division of numbers ---------------------
const div = (numbers) => {
  const _numbers = stringsToNumbers(numbers);
  return String(_numbers.length > 1 ? _numbers[0] / _numbers[1] : _numbers[0]);
};

// --- Calculate of the percent ----------------
const percent = (first, second) => {
  return (Number(first) / 100) * Number(second);
}


// --- Backspace numbers -----
const backspace = (state) => ({
  displayValue: state.displayValue.length > 1 ? state.displayValue.slice(0, state.displayValue.length - 1) : "0"
});

// --- Clear display ---------
const clear = (state) => ({
  displayValue: "0",
  mode: "reset",
  valueListing: [],
  action: summ,
});


// --- Typing number, switch mode ------
const typeNumber = (state, number) => {

  if (state.mode === "reset") {
    return {
      displayValue: number,
      mode: "typing",
      valueListing: [...state.valueListing, number],
    };
  }

  if (state.mode === "typing") {
    return {
      displayValue: state.displayValue === "0" ? number : state.displayValue + number,
      valueListing: [...state.valueListing.slice(0, -1), state.displayValue === "0" ? number : state.displayValue + number],
    };
  }
};

// --- Apply arithmetic action by clicked button -----------
const applyAction = (state, btnValue) => {
  console.log(btnValue);
  const mapping = {
    "+": summ,
    "-": subtract,
    "x": multi,
    "/": div,
    "%": percent,
  };

  return {
    mode: "reset",
    action: mapping[btnValue],
  };
};


// --- calculate current expression -------------
const result = (state, value) => {
  console.log(state);
  const mapping = {
    "addition": summ,
    "subtraction": subtract,
    "multiplicate": multi,
    "division": div,
    "percent": percent,
  };

  if (state.valueListing.length === 0) {
    console.log("notho!")
    return;
  }

  return {
    displayValue: state.action(state.valueListing),
    valueListing: [],
    mode: "reset",
  }
}

// --- Buttons mapping ------------------------
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
    // let currentValue = this.state.displayValue;
    // const mode = this.state.mode;

    // this.setState({
    //   displayValue: btnActions[btnName](currentValue),
    // });

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
