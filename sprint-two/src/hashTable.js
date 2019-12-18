var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newTuple = [k, v];
  this._storage.set(index, newTuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(index);
  return tuple[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element){
    if (element[0] === k) {

    }
  });
};
// want to check at the index if any of the items is the tuple where tuple[0] === key
// for each tuple, if tuple[0] === key, then find the index of the tuple and set it to a var indexToDelete
// splice out the tuple to remove at the index to delete
// what if there is nothing stored at the calculated index?




/*
 * Complexity: What is the time complexity of the above functions?
 */


