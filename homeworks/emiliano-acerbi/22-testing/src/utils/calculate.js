export const calculate = (a, b, sign) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('One of the arguments is not a number');
  const result = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    X: (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  return result[sign](a, b);
};
