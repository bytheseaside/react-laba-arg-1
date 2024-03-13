import '@testing-library/jest-dom';
import { render, screen } from '../../utils/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import Button from '.';

describe('Calculator button', () => {
  let component;

  beforeEach(() => {
    component = <Button button={{ key: '', text: 'test' }} />;
    render(component);
  });

  it('Component should render', () => {
    expect(screen.getByText('test')).toBeTruthy();
  });

  it('Should dont find a button with text', () => {
    expect(() => {
      expect(screen.getByText('button1'));
    }).toThrowError();
  });
});
