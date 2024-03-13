import { describe, it, expect } from 'vitest';
import { operations } from './operations';

describe('test addition operation', () => {
  it('addition operation should work on positive integer numbers', () => {
    expect(operations.addition(4000, 41)).toBe(4041);
  });

  it('addition operation should work on positive decimal numbers', () => {
    expect(operations.addition(4.3, 2.13)).toBe(6.43);
  });

  it('addition operation should work on negative integer numbers', () => {
    expect(operations.addition(-3, -6)).toBe(-9);
  });

  it('addition operation should work on negative decimal numbers', () => {
    expect(operations.addition(-4.3, -2.1)).toBe(-6.4);
  });
});

describe('test substract operation', () => {
  it('substract operation should work on positive integer numbers', () => {
    expect(operations.substract(40, 4)).toBe(36);
  });

  it('substract operation should work on negative integer numbers', () => {
    expect(operations.substract(-3, -6)).toBe(3);
  });
});

describe('test multiply operation', () => {
  it('multiply operation should work on positive integer numbers', () => {
    expect(operations.multiply(4, 4)).toBe(16);
  });

  it('multiply operation should work on negative integer numbers', () => {
    expect(operations.multiply(-4, 4)).toBe(-16);
  });
});

describe('test division operation', () => {
  it('division operation should work on positive integer numbers', () => {
    expect(operations.divide(4, 4)).toBe('1');
  });
});
