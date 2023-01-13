import React, { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [sum, setSum] = useState({ total: 0, next: null, operation: null });
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const handleClick = (text) => {
    const sumObject = calculate(sum, text);
    setSum(sumObject);
  };

  const { total, next, operation } = sum;
  return (
    <div className="calculator">
      <Screen total={total} next={next} operation={operation} className="screen" />
      {buttons.map((button) => (
        <Button
          key={button}
          handleClick={handleClick}
          text={button}
        />
      ))}
    </div>
  );
}

export default Calculator;
