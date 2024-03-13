/**
 * @jest-environment jsdom
 */

import Delete from './Delete';

import { render, screen } from '@testing-library/react';

describe('Delete', () => {
  test('Renders Delete component', () => {
    render(<Delete />);

    expect(screen.getByText('X')).toBeInTheDocument();
  });
});
