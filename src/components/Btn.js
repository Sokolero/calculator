import React, { useContext } from "react";
import PropTypes from 'prop-types';

import { ThemeContext } from "./themeContext.js";

// ---------------------
const themedStyles = {
  light: {
    bg: "#BAB19C",
    color: "#302C2C"
  },
  dark: {
    bg: "#000",
    color: "#fff"
  },
};

// ----- Button Component -----------------------------------------------------
const Btn = (props) => {
  // ReactHook

  const theme = useContext(ThemeContext);

  const btnClassName = `${props.mainBtnClassName} ${props.mainBtnClassName}--${props.btnName}`;

  return (
    <button
     className={btnClassName}
     onClick={ () => props.handleClick(props.btnValue, props.btnName) }
     style={{
       background: themedStyles[theme].bg,
       color: themedStyles[theme].color
      }}
     >
      { props.btnValue }
    </button>
  );
}

// --- use PropTypes ---
Btn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  mainBtnClassName: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
}

export default Btn;
