import arrayAnalysis from '../src/arrayAnalysis';

test('arrayAnalysis: example 1', () => {
  expect(arrayAnalysis([1, 2, 3, 6])).toEqual({
    average: 3,
    min: 1,
    max: 6,
    length: 4,
  });
});

test('arrayAnalysis: example 2', () => {
  expect(arrayAnalysis([19, -4, 5, 0, 10])).toEqual({
    average: 6,
    min: -4,
    max: 19,
    length: 5,
  });
});
