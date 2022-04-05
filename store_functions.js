const assert = require('assert');

const store = {
  // Keeps track of the next available ID to be assigned
  nextId: 1,
  // Creates an object to serve as a cache in which we’ll store functions
  cache: {},
  // Adds functions to the cache, but only if they’re unique
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  },
};

// Tests that all works as planned
function ninja() {}
assert(store.add(ninja), 'Function was safely added.');
assert(!store.add(ninja), 'But it was only added once.');
