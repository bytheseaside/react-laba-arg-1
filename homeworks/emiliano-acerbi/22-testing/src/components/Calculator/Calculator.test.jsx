/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('renders children correctly', () => {
    render(
      <Calculator>
        <span>Children Test</span>
      </Calculator>,
    );

    const main = screen.getByRole('main');
    expect(main).toContainHTML('<span>Children Test</span>');
  });
});
