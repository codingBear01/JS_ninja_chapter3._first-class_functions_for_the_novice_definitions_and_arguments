// old style for the solution of function overloading
console.log('----- old style -----');
function performAction(ninja, action) {
  action = typeof action === 'undefined' ? 'skulking' : action;
  return ninja + ' ' + action;
}

console.log(performAction('Fuma'));
console.log(performAction('Yoshi'));
console.log(performAction('Hattori'));
console.log(performAction('Yagyu', 'sneaking'));

// ES6 style for the solution of function overloading
console.log('----- ES6 style -----');
function performAction2(ninja, action = 'skulking') {
  return ninja + ' ' + action;
}

console.log(performAction2('Fuma'));
console.log(performAction2('Yoshi'));
console.log(performAction2('Hattori'));
console.log(performAction2('Yagyu', 'sneaking'));
