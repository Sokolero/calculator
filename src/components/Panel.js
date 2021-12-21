import React, { Component } from "react";
import PropTypes from "prop-types";

import Btn from "./Btn.js";

// ---------- buttons filling ---------------------------------------
const btns = {
  clear: "C",
  backspace: "<",
  percent: "%",
  division: "/",
  multiple: "x",
  subtraction: "-",
  addition: "+",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  nothing: "",
  null: "0",
  comma: ",",
  result: "=",
};

// ------- generation of calculator buttons -----------------------------------
const generateBtnList = (btns, handleClick) => {

  const btnsList = [];

  for (const [key, value] of Object.entries(btns)) {
    btnsList.push(
      <Btn
        handleClick={ handleClick }
        mainBtnClassName="btn"
        btnName={ key }
        btnValue={ value }
        key={ key }
      />
    )
  }
  return btnsList;
};


// -------------Panel Component -----------------------------------------------
const Panel = ({ handleClick }) => {
  return(
    <div className="calc__panel grid-container">
      { generateBtnList(btns, handleClick) }
    </div>
  )
}
// ----------------------------------------------------------------------------


Panel.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Panel;
