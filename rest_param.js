const assert = require('assert');

// Rest parameters are prefixed with …
function multiMax(first, ...remainingNums) {
  // Sort the remaining numbers, descending.
  const sorted = remainingNums.sort((a, b) => {
    return b - a;
  });
  return first * sorted[0];
}
// The function is called just like any other function.
assert(multiMax(3, 1, 2, 3) === 9, '3 * 3 = 9 (First arg, by largest.');
