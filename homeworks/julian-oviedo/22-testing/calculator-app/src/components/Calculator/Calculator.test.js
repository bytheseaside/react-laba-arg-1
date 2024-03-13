import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Calculator from './Calculator';

test('20 / 2 = 10', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText(2));
  fireEvent.click(screen.getByText(0));
  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText(2));
  fireEvent.click(screen.getByText('='));
  const output = screen.getByTestId('outputValue').textContent;
  expect(output).toBe('10');
});
