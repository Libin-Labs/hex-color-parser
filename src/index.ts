export interface RgbaColor {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
}
export function parseHexColor(value: string): RgbaColor {
  if (typeof value !== 'string') throw new TypeError('Expected color text');
  const text = value.startsWith('#') ? value.slice(1) : value;
  if (!/^(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(text))
    throw new RangeError('Expected 3, 4, 6, or 8 hexadecimal digits');
  const full = text.length <= 4 ? [...text].map((char) => char + char).join('') : text;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
    a: full.length === 8 ? parseInt(full.slice(6, 8), 16) : 255,
  };
}
