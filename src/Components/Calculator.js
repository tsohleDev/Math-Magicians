import Button from './Button';
import Screen from './Screen';
import './Calculator.css';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '+', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="calculator">
      <Screen className="screen" />
      {buttons.map((button) => <Button key={button.id} text={button} />)}
    </div>
  );
};

export default Calculator;
