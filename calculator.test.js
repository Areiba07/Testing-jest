const calculator = require('./calculator');

describe('Calculator Testing', () => {
  test('addition', () => {
    expect(calculator(2, 3, '+')).toBe(5);
  });

  test('subtraction', () => {
    expect(calculator(5, 2, '-')).toBe(3);
  });

  test('multiplication', () => {
    expect(calculator(4, 3, '*')).toBe(12);
  });

  test('division', () => {
    expect(calculator(10, 2, '/')).toBe(5);
  });

  test('invalid operator', () => {
    expect(calculator(4, 3, 'invalid')).toBe('Invalid Operator');
  });

  // Intentionally failed test case
  test('intentionally fail', () => {
    expect(calculator(1, 1, '+')).toBe(3);
  });
});
