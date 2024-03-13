import Calculator from './Calculator';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('Calculator renders correctly itself and its children components', () => {
  afterEach(() => {
    cleanup();
  });
  test(`Calculator renders ok`, () => {
    render(<Calculator />);
    const calcElement = screen.getByTestId('calculator');
    expect(calcElement).toBeInTheDocument();
  });
  test(`Keyboard renders ok`, () => {
    render(<Calculator />);
    const keyboardElement = screen.getByTestId('keyboard');
    expect(keyboardElement).toBeInTheDocument();
  });
  test(`Display renders ok`, () => {
    render(<Calculator />);
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toBeInTheDocument();
  });
});

describe('Calculator renders correctly the result', () => {
  test('2 + 3 = 5', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-operator-plus'));
    fireEvent.click(screen.getByTestId('button-number-3'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('5');
  });
  test('2 + 3 - 5 = 0', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-operator-plus'));
    fireEvent.click(screen.getByTestId('button-number-3'));
    fireEvent.click(screen.getByTestId('button-operator-minus'));
    fireEvent.click(screen.getByTestId('button-number-5'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('0');
  });

  test('- 5 * 2 = -10', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-operator-minus'));
    fireEvent.click(screen.getByTestId('button-number-5'));
    fireEvent.click(screen.getByTestId('button-operator-multiply'));
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('-10');
  });

  test('5 / 2 = 2.5', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-number-5'));
    fireEvent.click(screen.getByTestId('button-operator-divide'));
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('2.5');
  });

  test('5 % 3 = 2', () => {
    //to be
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-number-5'));
    fireEvent.click(screen.getByTestId('button-percent'));
    fireEvent.click(screen.getByTestId('button-number-3'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('2');
  });
});

describe('Calculator renders correctly the previous calculation', () => {
  test('History shown after 2 + 3 = 5 is correct', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-operator-plus'));
    fireEvent.click(screen.getByTestId('button-number-3'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const calculation = screen.getByTestId('display__calculation').textContent;
    expect(calculation).toBe('2+3');
  });
  test('History shown after  - 5 * 2 is correct', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-operator-minus'));
    fireEvent.click(screen.getByTestId('button-number-5'));
    fireEvent.click(screen.getByTestId('button-operator-multiply'));
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const calculation = screen.getByTestId('display__calculation').textContent;
    expect(calculation).toBe('-5*2');
  });
  test('History shown after 5 / 2 = 2.5 is correct', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('button-number-5'));
    fireEvent.click(screen.getByTestId('button-operator-divide'));
    fireEvent.click(screen.getByTestId('button-number-2'));
    fireEvent.click(screen.getByTestId('button-equals'));
    const calculation = screen.getByTestId('display__calculation').textContent;
    expect(calculation).toBe('5/2');
  });
});

test('AC button clears the display', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId('button-number-1'));
  fireEvent.click(screen.getByTestId('button-operator-divide'));
  fireEvent.click(screen.getByTestId('button-number-7'));
  fireEvent.click(screen.getByTestId('button-equals'));
  fireEvent.click(screen.getByTestId('button-clear'));
  const result = screen.getByTestId('display__result').textContent;
  const prevCalc = screen.getByTestId('display__calculation').textContent;
  expect(result).toBe('') && expect(prevCalc).toBe('');
});

describe('Keyboard can be used to input numbers and operators', () => {
  test('all numbers are shown in display after respective keydown events', () => {
    render(<Calculator />);
    const calc = screen.getByTestId('calculator');
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => {
      fireEvent.keyDown(calc, { key: num });
    });
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('0123456789');
  });

  test('5.6*3.7 can be entered via keyboard', () => {
    render(<Calculator />);
    const calc = screen.getByTestId('calculator');
    [5, '.', 6, '*', 3, '.', 7].forEach((key) => {
      fireEvent.keyDown(calc, { key });
    });
    const result = screen.getByTestId('display__result').textContent;
    expect(result).toBe('5.6*3.7');
  });

  test('Display is cleared after pressing c on keyboard', () => {
    render(<Calculator />);
    const calc = screen.getByTestId('calculator');
    [5, '.', 6, '*', 3, '.', 7].forEach((key) => {
      fireEvent.keyDown(calc, { key });
    });
    fireEvent.keyDown(calc, { key: 'c' });
    const result = screen.getByTestId('display__result').textContent;
    const prevCalc = screen.getByTestId('display__calculation').textContent;
    expect(result).toBe('') && expect(prevCalc).toBe('');
  });

  test('Display is cleared after pressing escape on keyboard', () => {
    render(<Calculator />);
    const calc = screen.getByTestId('calculator');
    [5, '.', 6, '*', 3, '.', 7].forEach((key) => {
      fireEvent.keyDown(calc, { key });
    });
    fireEvent.keyDown(calc, { key: 'Escape' });
    const result = screen.getByTestId('display__result').textContent;
    const prevCalc = screen.getByTestId('display__calculation').textContent;
    expect(result).toBe('') && expect(prevCalc).toBe('');
  });

  test('one digit can be deleted after pressing backspace on keyboard', () => {
    render(<Calculator />);
    const calc = screen.getByTestId('calculator');
    [1, 7, '.', 0, 3, '*', 2, 0, 0, 0].forEach((key) => {
      fireEvent.keyDown(calc, { key });
    });
    const firstCalc = screen.getByTestId('display__result').textContent;
    fireEvent.keyDown(calc, { key: 'Backspace' });
    const secondCalc = screen.getByTestId('display__result').textContent;
    expect(secondCalc).toBe(firstCalc.slice(0, -1));
  });
});
