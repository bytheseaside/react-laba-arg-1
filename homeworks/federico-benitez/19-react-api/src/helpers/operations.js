const getResult = (a, b, operation) => {
  if (operation === 'substract' || operation === 'divide') return formatter.format(operations[operation](b, a));

  return formatter.format(operations[operation](a, b));
};

const getMathSymbol = (operation) => {
  const symbols = {
    addition: '+',
    substract: '-',
    multiply: 'x',
    divide: '/',
  };
  return symbols[operation];
};

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
});

const addition = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => formatter.format(a / b);

const percent = (n) => n / 100;

const removeLastNumber = (number) =>
  parseInt(
    number
      .toString()
      .split('')
      .filter((_, i) => i !== number.toString().length - 1)
      .join(''),
  ) || 0;

const isMathOperation = (operation) => operations[operation];

const isAfterGetResult = (value) => isNaN(value.previous);

const isANewOperation = (state) => state.value === 0;

const isDecimal = (value) => typeof value === 'string' && value.includes('.');

const hasAPreviuosOperation = (prev) => isNaN(prev.previous);

const isOtherOperation = (prev, operation) => prev.operation !== operation;

const handleDecimal = (current, newValue) => {
  return `${current}${newValue}`;
};

const operations = {
  addition,
  substract,
  multiply,
  divide,
  percent,
};

export {
  operations,
  isMathOperation,
  isAfterGetResult,
  isANewOperation,
  getResult,
  getMathSymbol,
  removeLastNumber,
  handleDecimal,
  isDecimal,
  hasAPreviuosOperation,
  isOtherOperation,
};
