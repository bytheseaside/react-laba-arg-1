/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import CalculatorProvider from '../../context/CalculatorContext';
import Button from './Button';

describe('Button functionality', () => {
  test('Button displays correct plus symbol', () => {
    render(
      <CalculatorProvider>
        <Button value={'+'}>value</Button>
      </CalculatorProvider>,
    );
    const button = screen.getByRole('button');
    expect(button.className).toBe(
      'px-4 py-7 text-2xl border border-[#242530] text-primary bg-neutral-operator text-4xl hover:bg-hover',
    );
  });

  test('Button displays correct minus symbol', () => {
    render(
      <CalculatorProvider>
        <Button value={'-'}>value</Button>
      </CalculatorProvider>,
    );
    const button = screen.getByRole('button');
    expect(button.className).toBe(
      'px-4 py-7 text-2xl border border-[#242530] text-primary bg-neutral-operator hover:bg-hover',
    );
  });
});
