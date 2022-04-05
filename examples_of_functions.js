function myFun() {
  return 1;
}

(myArg) => myArg * 2;

new Function('a', 'b', 'return a + b');

function* myGen() {
  yield 1;
}

// function declarations
// Defines function samurai in the global code
function samurai() {
  return 'samurai here';
}

// Defines function ninja in the global code
console.log('----- Defines function ninja in the global code -----');

function ninja() {
  // Defines function hiddenNinja within the ninja function
  function hiddenNinja() {
    return 'ninja here';
  }

  return hiddenNinja();
}

console.log(ninja());

// function declarations & function expressions
//Standalone function declaration
function myFunctionDeclaration() {
  // Inner function declaration
  function innerFunction() {}
}

// Function expression as a part of a variable declaration assignment
const myFunc = function () {};
// Function expression as an argument of a function call
myFunc(function () {
  // Function expression as a function return value
  return function () {};
});

// Named function expression as part of a function call that will be immediately invoked
(function namedFunctionExpression() {})();

// Function expressions that will be immediately invoked, as arguments to unary operators
+(function () {})();
-(function () {})();
!(function () {})();
~(function () {})();

// How to invoke function expression
console.log('----- How to invoke function expression -----');

const test = function (str) {
  console.log('if function expression is ' + str);
};

test('variable');

function test2(arg) {
  return arg;
}

test2(test('argument of function expression'));

// Immediate function
const result = (function () {
  const test = 'immediate function!';
  return test;
})();
// 즉시 결과를 생성한다.
console.log(result);
