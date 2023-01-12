import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text } = this.props;

    function setClass() {
      let styleClass = 'btn';
      if (text === '0') { styleClass = 'naught'; } else if (text === '+' || text === '-' || text === 'x' || text === '=') { styleClass = 'operand'; }
      return styleClass;
    }

    return <button type="button" className={setClass()}>{text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
