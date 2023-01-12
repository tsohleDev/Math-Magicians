import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, handleClick } = this.props;

    function setClass(text) {
      let styleClass = 'btn';
      if (text === '0') { styleClass = 'naught'; } else if (text === '+' || text === '-' || text === 'x' || text === '=') { styleClass = 'operand'; }
      return styleClass;
    }

    return <button type="button" onClick={() => { handleClick(text); }} className={setClass(text)}>{text}</button>;
  }
}

// validate the props
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,

};

export default Button;
