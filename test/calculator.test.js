import calculator from '../src/calculator';

test('calculator: add example 1', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator: add example 2', () => {
  expect(calculator.add(1, -2)).toBe(-1);
});

test('calculator: subtract example 1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('calculator: subtract example 2', () => {
  expect(calculator.subtract(1, -2)).toBe(3);
});

test('calculator: multiply example 1', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('calculator: multiply example 2', () => {
  expect(calculator.multiply(1, -2)).toBe(-2);
});

test('calculator: divide example 1', () => {
  expect(calculator.divide(1, 2)).toEqual(0.5);
});

test('calculator: divide example 2', () => {
  expect(calculator.divide(1, -2)).toEqual(-0.5);
});
