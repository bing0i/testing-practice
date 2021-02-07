import caesarCipher from '../src/caesarCipher';

test('caesarCipher: example 1', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});

test('caesarCipher: example 2 has spaces', () => {
  expect(caesarCipher('abcd efghijklmnopq rstuv wxyz', -1)).toBe(
    'bcde fghijklmnopqr stuvw xyza'
  );
});

test('caesarCipher: example 3 has dots', () => {
  expect(caesarCipher('abcd.efghijklmnopqrstuvw.xyz', -1)).toBe(
    'bcde.fghijklmnopqrstuvwx.yza'
  );
});

test('caesarCipher: example 4 has numbers', () => {
  expect(caesarCipher('ab878cd.efghij02145klmnopqrstuvw.xyz 342', -1)).toBe(
    'bc878de.fghijk02145lmnopqrstuvwx.yza 342'
  );
});

test('caesarCipher: example 5 has spaces with uppercase', () => {
  expect(caesarCipher('ABCD EFGHIJKLMNOPQ RSTUV WXYZ', -1)).toBe(
    'BCDE FGHIJKLMNOPQR STUVW XYZA'
  );
});

test('caesarCipher: example 6 has dots with uppercase', () => {
  expect(caesarCipher('ABCD.EFGHIJKLMNOPQRSTUVW.XYZ', -1)).toBe(
    'BCDE.FGHIJKLMNOPQRSTUVWX.YZA'
  );
});

test('caesarCipher: example 7 has numbers with uppercase', () => {
  expect(caesarCipher('AB878CD.EFGHIJ02145KLMNOPQRSTUVW.XYZ 342', -1)).toBe(
    'BC878DE.FGHIJK02145LMNOPQRSTUVWX.YZA 342'
  );
});

test('caesarCipher: example 8 has random characters with positive case', () => {
  expect(caesarCipher('AB878CD.ewrHIJ02sdfsdcvxLMdsfSTUVW.XYZ 342', 3)).toBe(
    'XY878ZA.btoEFG02pacpazsuIJapcPQRST.UVW 342'
  );
});
