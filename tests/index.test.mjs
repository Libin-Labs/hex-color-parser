import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('parses short RGB', () => {
  assert.deepEqual(api.parseHexColor('#3a7'), { r: 51, g: 170, b: 119, a: 255 });
});
test('parses long RGB', () => {
  assert.deepEqual(api.parseHexColor('336699'), { r: 51, g: 102, b: 153, a: 255 });
});
test('parses shorthand alpha', () => {
  assert.deepEqual(api.parseHexColor('#3a7f'), { r: 51, g: 170, b: 119, a: 255 });
});
test('parses long alpha', () => {
  assert.deepEqual(api.parseHexColor('#33669980'), { r: 51, g: 102, b: 153, a: 128 });
});
test('defaults alpha opaque', () => {
  assert.equal(api.parseHexColor('000000').a, 255);
});
test('rejects invalid length', () => {
  assert.throws(() => api.parseHexColor('#12'), RangeError);
});
