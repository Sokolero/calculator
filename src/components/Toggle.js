import React, { Component } from "react";

const getClassName = (props) => {
  const theme = props.theme;
  const themeClasses = {
    light: "header__toggle--off",
    dark: "header__toggle--on",
  }
  return `header__toggle ${themeClasses[theme]}`;
}

class Toggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
        className={ getClassName(this.props) }
        onClick={ this.props.handleToggleTheme}>
      </div>
    );
  }
}

export default Toggle;
