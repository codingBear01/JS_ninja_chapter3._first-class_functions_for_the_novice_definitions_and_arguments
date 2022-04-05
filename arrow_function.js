const assert = require('assert');

// Defines an arrow function
const greet = (name) => 'Greetings ' + name;
assert(greet('Oishii') === 'Greetings Oishii', 'Oishii is properly greeted');

// Defines a function expression
const anotherGreet = function (name) {
  return 'Greetings ' + name;
};
assert(
  anotherGreet('Oishii') === 'Greetings Oishii',
  'Again, Oishii is properly greeted'
);
