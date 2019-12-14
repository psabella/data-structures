var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // array
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  // return includes
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  // indexOf item in the array
  // splice it at that index
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */