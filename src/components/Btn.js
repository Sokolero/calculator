import React, { Component } from "react";
import PropTypes from 'prop-types';

// propsNames = [mainBtnClassName, btnName, btnValue]
// handling of events is made by ReactHooks
// to use propTypes

const Btn = (props) => {
  // ReactHook

  const btnClassName = `${props.mainBtnClassName} ${props.mainBtnClassName}--${props.btnName}`;
  return (
    <button
     className={btnClassName}
     onClick={ () => props.handleClick(props.btnValue, props.btnName) }
     >
      { props.btnValue }
    </button>
  );
}

// use PropTypes
Btn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  mainBtnClassName: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
}

export default Btn;
