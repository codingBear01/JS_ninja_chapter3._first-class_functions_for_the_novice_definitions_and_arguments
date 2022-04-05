const assert = require('assert');

function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }

  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }

  let prime = value !== 1; // 1 is not a prime

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      // if value is not prime, prime value change to 'false'
      prime = false;
      break;
    }
  }

  return (isPrime.answers[value] = prime);
}

assert(isPrime(5), '5 is prime!');
assert(isPrime.answers[5], 'The answer was cached!');
