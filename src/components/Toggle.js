import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
  }

  getClassName() {
    const theme = this.props.theme;
    const themeClasses = {
      light: "header__toggle--off",
      dark: "header__toggle--on",
    }
    return `header__toggle ${themeClasses[theme]}`;
  }

  render() {
    return(
      <div
        className={ this.getClassName() }
        onClick={ this.props.handleToggleTheme}>
      </div>
    );
  }
}

export default Toggle;
