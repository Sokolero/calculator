import React, { Component } from "react";
import PropTypes from 'prop-types';

import { ThemeContext } from "./themeContext.js";

// ------------- Display Component --------------------------------------------
class Display extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const themedClassNames = {
      light: "display__input",
      dark: "display__input display__input--dark",
    }
    return(
      <div className="calc__display">
        <textarea
          ref={ this.inputRef }
          value={ this.props.displayValue }
          className={ themedClassNames[this.context] }
          readOnly={true}>
        </textarea>
      </div>
    );
  }
}

Display.contextType = ThemeContext;


Display.defaultProps = {
  displayValue: "0",
};

Display.propTypes = {
  displayValue: PropTypes.string,
};


export default Display;
