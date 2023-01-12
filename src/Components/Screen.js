import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  render() {
    const { total, next, operation } = this.props;

    const handleDisplay = () => {
      let string = ''; let
        assigned = false;

      if (total) { string += total; assigned = true; }
      if (operation) { string += operation; assigned = true; }
      if (next) { string += next; assigned = true; }

      if (!assigned) return '0';
      return string;
    };

    return (
      <div className="screen">
        <p>{handleDisplay()}</p>
      </div>
    );
  }
}

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Screen;
