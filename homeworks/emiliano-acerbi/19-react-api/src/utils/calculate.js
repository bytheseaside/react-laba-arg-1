export const calculate = (a, b, sign) => {
  const result = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    X: (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  return result[sign](a, b);
};
