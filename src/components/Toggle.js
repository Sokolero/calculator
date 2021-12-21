import React, { Component } from "react";
import classNames from "classnames";


//   const themeClasses = {
//     light: "header__toggle--light",
//     dark: "header__toggle--dark",
//   }
//   return `header__toggle ${themeClasses[theme]}`;
// }

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
