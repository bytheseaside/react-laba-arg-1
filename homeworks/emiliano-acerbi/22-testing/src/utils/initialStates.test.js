import { calcInitialState, lastOperationInitialState } from './initialStates';

describe('Initial State', () => {
  test('Initial state should not change', () => {
    expect(calcInitialState).toStrictEqual({
      firstInput: '0',
      sign: '',
      secondInput: '',
      result: '',
    });
  });
  test('Last operation should not change', () => {
    expect(lastOperationInitialState).toStrictEqual({
      firstInput: '0',
      sign: '',
      secondInput: '',
      result: '',
    });
  });
});
