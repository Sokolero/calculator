import React, { useState } from "react";

import "./Menu.css";


const menuConf = [
  'Home',
  'ToRemember',
  'Blog',
  'Contacts',
];

const openCloseSwitcher = {

}

// --- Menu Component -------------------------------------------------------
const Menu = ({ menu }) => {

  const menuClass = `menu menu--${ menu }`;

  return (
    <div className="menu-wrapper">
      <nav className={ menuClass }>
        <ul className="menu__list">
          {
             menuConf.map(item =>
              <a href="#" key={ item }>
                <li className="menu__item">{ item }</li>
              </a>)
          }
        </ul>
      </nav>
    </div>
  )
}

export default Menu;
