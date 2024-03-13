import React, { useContext, useMemo, createContext, useCallback, useState } from 'react';
import {
  isMathOperation,
  getMathSymbol,
  getResult,
  isAfterGetResult,
  isANewOperation,
  removeLastNumber,
  operations,
  isDecimal,
  handleDecimal,
} from '../helpers';

const CalculatorContext = createContext(null);

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('CalculatorProvider must be present to use useCalculatorContext');
  }

  return context;
}

const INITIAL_STATE = {
  current: 0,
  previous: null,
  operation: null,
};

export function CalculatorProvider({ children }) {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleOperation = (operation) => {
    const mathOperation = isMathOperation(operation);
    if (mathOperation) {
      if (!values.previous) {
        return setValues({
          previous: values.current,
          current: 0,
          operation,
        });
      } else {
        return setValues((prev) => {
          return {
            previous: isNaN(prev.previous)
              ? prev.current
              : prev.operation !== operation
              ? getResult(prev.current, prev.previous, prev.operation)
              : getResult(prev.previous, prev.current, prev.operation),
            current: 0,
            operation,
          };
        });
      }
    }

    switch (operation) {
      case 'clean':
        setValues(INITIAL_STATE);
        break;
      case 'equal':
        setValues((prev) => {
          const { previous, current, operation } = prev;
          if (!operation) return { ...prev };
          return {
            previous: `${previous} ${getMathSymbol(operation)} ${current}`,
            current: getResult(Number(current), Number(previous), operation),
          };
        });
        break;
      case 'delete':
        setValues((prev) => ({
          ...prev,
          current: removeLastNumber(prev.current),
        }));
        break;
      default:
        break;
    }
  };

  const doAction = useCallback(
    (key) => {
      if (isNaN(key.value)) {
        if (key.value === 'dot') {
          return setValues((v) => ({
            ...v,
            current: `${v.current}.`,
          }));
        }

        if (key.value === 'percent') {
          return setValues((prev) => ({
            ...prev,
            current: operations.percent(prev.current),
          }));
        }

        handleOperation(key.value);
        return;
      }

      setValues((v) => {
        //Is after get a  result
        if (isAfterGetResult(v)) return { ...INITIAL_STATE, current: key.value };
        //Is first value
        if (isANewOperation(v)) return { ...v, current: key.value };
        //if is a decimal number
        if (isDecimal(v.current)) return { ...v, current: handleDecimal(v.current, key.value) };
        //Contains previous values inserted
        return { ...v, current: key.value + v.current * 10 };
      });
    },
    [values],
  );

  const value = useMemo(
    () => ({
      previous: values.previous,
      current: values.current,
      doAction,
    }),
    [values],
  );

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}
