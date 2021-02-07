import capitalize from '../src/capitalize';

test('capitalize: All characters are lowercase', () => {
  expect(capitalize('courgette')).toBe('Courgette');
});

test('capitalize: All characters are uppercase', () => {
  expect(capitalize('COURGETTE')).toBe('Courgette');
});

test('capitalize: Random characters are capitalized', () => {
  expect(capitalize('cOuRGEttE')).toBe('Courgette');
});

test('capitalize: Empty string', () => {
  expect(capitalize('')).toBe('');
});
