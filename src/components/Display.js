import React, { Component } from "react";
import PropTypes from 'prop-types';

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
    return(
      <div className="calc__display">
        <textarea ref={ this.inputRef } value={ this.props.displayValue } className="display__input" readOnly={true}>
        </textarea>
      </div>
    );
  }
}


Display.defaultProps = {
  displayValue: "0",
};

Display.propTypes = {
  displayValue: PropTypes.string,
};


export default Display;
