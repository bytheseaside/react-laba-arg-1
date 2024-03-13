/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container functionality', () => {
  test('Container must always have the same styles', () => {
    render(
      <Container>
        <h1>Test</h1>
      </Container>,
    );
    const container = screen.getByTestId('container');
    expect(container.className).toBe('min-h-screen bg-neutral grid place-content-center font-primary');
  });
});
