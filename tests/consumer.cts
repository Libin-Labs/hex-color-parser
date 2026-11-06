import * as api from '@lp-labs/hex-color-parser';
import { parseHexColor } from '@lp-labs/hex-color-parser';
console.log(parseHexColor('#3a7'));
// @ts-expect-error invalid argument must be rejected by declarations
api.parseHexColor(123);
