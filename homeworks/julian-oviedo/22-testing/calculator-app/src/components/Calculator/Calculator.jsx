import { Grid } from '@mui/material';
import React from 'react';
import './styles.css';
import CustomButton from '../CustomButton/CustomButton';
import { useState } from 'react';
import { calculatorValues } from '../../constants/calculatorValues';
import { Operators } from '../../enums/operators';

const Calculator = () => {
  const [calculatorValue, setCalculatorValue] = useState('0');
  const [secondValue, setSecondValue] = useState('');
  const [operation, setOperation] = useState(undefined);
  const [result, setResult] = useState();

  const handleClick = (value) => {
    const isNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value);
    const isOperator = ['/', 'X', '+', '-', '%'].includes(value);

    if (isNumber) {
      if (calculatorValue === '0') {
        operation !== undefined ? setSecondValue(value.toString()) : setCalculatorValue(value.toString());
      } else {
        operation !== undefined
          ? setSecondValue(secondValue.toString() + value.toString())
          : setCalculatorValue(calculatorValue.toString() + value.toString());
      }
    }
    if (value === Operators.DOT) {
      if (!calculatorValue.includes(Operators.DOT)) {
        setCalculatorValue(calculatorValue.toString() + value.toString());
      }
      if (operation !== undefined && !secondValue.includes(Operators.DOT)) {
        setSecondValue(secondValue.toString() + value.toString());
      }
    }
    if (value === Operators.CLEAN) {
      setCalculatorValue('0');
      setSecondValue('');
      setOperation(undefined);
      setResult(undefined);
    }
    if (value === Operators.REMOVE) {
      if (calculatorValue.length === 1) {
        setCalculatorValue('0');
      } else if (operation !== undefined && secondValue.length === 1) {
        setSecondValue('0');
      } else {
        operation !== undefined
          ? setSecondValue(secondValue.slice(0, secondValue.length - 1))
          : setCalculatorValue(calculatorValue.slice(0, calculatorValue.length - 1));
      }
    }
    if (isOperator) {
      if (result) {
        setCalculatorValue(result);
        setSecondValue('');
        setResult(undefined);
      }
      setOperation(value);
    }

    if (value === Operators.EQUAL) {
      const result = handleResult();
      setResult(result);
    }
  };

  const handleResult = () => {
    switch (operation) {
      case Operators.ADDITION: {
        return Number(calculatorValue) + Number(secondValue);
      }
      case Operators.SUBSTRACTION: {
        return Number(calculatorValue) - Number(secondValue);
      }
      case Operators.MULTIPLICATION: {
        return Number(calculatorValue) * Number(secondValue);
      }
      case Operators.ROUNDED_DIVISION: {
        const percentage = Number(calculatorValue) / 100;
        return Number(secondValue) * percentage;
      }
      case Operators.DIVISION: {
        const result = Number(calculatorValue) / Number(secondValue);
        if (Number(calculatorValue) % Number(secondValue) > 0) {
          return result.toFixed(9);
        }
        return result;
      }
      case Operators.EQUAL: {
        return calculatorValue;
      }
      default: {
        return 0;
      }
    }
  };

  return (
    <div className="calculator">
      <div className="result-container">
        <span className="result-container__operation">{`${calculatorValue} ${
          operation !== undefined && operation !== Operators.EQUAL ? operation : ''
        } ${result ? secondValue : ''}`}</span>
        <span className="result-container__result" data-testid="outputValue">
          {result !== undefined ? result : secondValue.length > 0 ? secondValue : calculatorValue}
        </span>
      </div>

      <Grid container className="grid-container">
        {calculatorValues.map((v, idx) => (
          <CustomButton key={idx} value={v} onClick={() => handleClick(v)} />
        ))}
      </Grid>
    </div>
  );
};

export default Calculator;
