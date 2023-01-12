import React from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sum: { total: 0, next: null, operation: null } };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (text) => {
    const { sum } = this.state;
    const sumObject = calculate(sum, text);
    this.setState({ sum: sumObject });
  };

  render() {
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    const { sum } = this.state;
    const { total, next, operation } = sum;
    return (
      <div className="calculator">
        <Screen total={total} next={next} operation={operation} className="screen" />
        {buttons.map((button) => (
          <Button
            key={button.id}
            handleClick={this.handleClick}
            text={button}
          />
        ))}
      </div>
    );
  }
}

export default Calculator;
