import React, { createContext, useState } from 'react';
import { calculate } from '../utils/calculate';
import { calcInitialState, lastOperationInitialState } from '../utils/initialStates';

export const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [calculator, setCalculator] = useState(calcInitialState);
  const [lastOperation, setLastOperation] = useState(lastOperationInitialState);

  // When user clicks number
  const handleNumberClick = (value) => {
    if (calculator.firstInput.toString().length + calculator.secondInput.toString().length > 8) {
      return alert('Use a smaller number please!');
    }
    // setCalculator({});
    const inputToString = value.toString();
    const inputValue = Number(calculator.firstInput + inputToString);

    setCalculator({
      ...calculator,
      firstInput: inputValue,
    });

    // If result exists, the calculator resets when clicking numbers
    if (calculator.result) {
      setCalculator({
        ...calculator,
        secondInput: '',
        firstInput: inputValue,
      });
    }
  };

  const handleSignClick = (value) => {
    if (calculator.firstInput === '0' || calculator.firstInput === 0) return;
    setCalculator({
      sign: value,
      secondInput: !calculator.secondInput && calculator.firstInput ? calculator.firstInput : calculator.secondInput,
      firstInput: '',
      result: '',
    });
  };

  const handleEqualsClick = () => {
    if (calculator.secondInput && calculator.firstInput) {
      setCalculator({
        secondInput: calculate(calculator.secondInput, calculator.firstInput, calculator.sign),
        sign: '',
        firstInput: '',
        result: calculate(calculator.secondInput, calculator.firstInput, calculator.sign),
      });
    }

    setLastOperation({
      firstInput: calculator.firstInput,
      secondInput: calculator.secondInput,
      sign: calculator.sign,
      result: calculator.result,
    });
  };

  const handleResetClick = () => {
    setCalculator(calcInitialState);
    setLastOperation(lastOperationInitialState);
  };

  const handleDotClick = () => {
    setCalculator({
      ...calculator,
      firstInput: calculator.firstInput + '.',
    });
  };

  const handleDeleteClick = () => {
    // Cant delete result
    if (calculator.secondInput && !calculator.firstInput) {
      return;
    }

    if (calculator.sign && !calculator.firstInput) return;

    const firstInputToString = calculator.firstInput.toString();
    setCalculator({
      ...calculator,
      firstInput: Number(firstInputToString.slice(0, -1)),
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        calculator,
        lastOperation,
        setCalculator,
        setLastOperation,
        handleNumberClick,
        handleSignClick,
        handleEqualsClick,
        handleResetClick,
        handleDotClick,
        handleDeleteClick,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;
