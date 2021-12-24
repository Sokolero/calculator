import React, { Component } from "react";
import classNames from "classnames";


// ------ Toggle Component ----------------------------------------------------
const Toggle = ({ handleToggleTheme, theme }) => {

  let toggleClassname = classNames(
    'header__toggle',
    `header__toggle--${theme}`
  );

  return(
    <div
      className={ toggleClassname }
      onClick={ handleToggleTheme}>
    </div>
  );
};
// ----------------------------------------------------------------------------

export default Toggle;
