var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this._storage[item]) {
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item];
};

setPrototype.remove = function(item) {
  this._storage[item] = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
