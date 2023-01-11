import PropTypes from 'prop-types';

const Button = (props) => {
  const { text } = props;

  function setClass() {
    let styleClass = 'btn';
    if (text === '0') { styleClass = 'naught'; } else if (text === '+' || text === '-' || text === 'x' || text === '=') { styleClass = 'operand'; }
    return styleClass;
  }

  return <button type="button" className={setClass()}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
