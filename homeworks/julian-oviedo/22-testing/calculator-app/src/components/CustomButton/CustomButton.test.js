import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton.jsx';

test('renders button', () => {
  const value = 8;
  const component = render(<CustomButton value={value} />);
  expect(component.container).toHaveTextContent(value);
});

test('clicking the span calls event handler once', () => {
  const value = 8;

  const mockHandler = jest.fn();

  const component = render(<CustomButton value={value} onClick={mockHandler} />);

  const span = component.getByText(8);
  fireEvent.click(span);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});
