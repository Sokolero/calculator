import React, { useState, useContext } from "react";
import classNames from "classnames";

import "./MenuToggler.css";

// ---- Component ---------------------------
const MenuToggler = (props) => {

  let topItemClass = classNames(
    'toggler__item',
    `toggler__top--${props.menu}`
  );

  let middleItemClass = classNames(
    'toggler__item',
    `toggler__middle--${props.menu}`
  );

  let bottomItemClass = classNames(
    'toggler__item',
    `toggler__bottom--${props.menu}`
  );

  return(
    <div className="menu__toggler" onClick={ props.handleToggleMenu }>
      <div className={ topItemClass }></div>
      <div className={ middleItemClass }></div>
      <div className={ bottomItemClass }></div>
    </div>
  );
};

export default MenuToggler;
