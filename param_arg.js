function skulk(ninja) {
  return performAction(ninja, 'skulking');
}

const rule = (daimyo) => performAction(daimyo, 'ruling');

const performAction = function (person, action) {
  return person + ' - ' + action;
};

skulk('Hattori');
rule('Oda Nobunaga');

console.log(skulk('Hattori'));
console.log(rule('Oda Nobunaga'));
