var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // check if there are any items in the stack
    if (Object.keys(storage).length !== 0) {
      // get the keys for each item
      var keys = Object.keys(storage);
      // convert the keys to numbers
      var numKeys = keys.map(function(key){
        return parseInt(key);
      });
      // find the max number among the keys - the key of the top item
      var lastKey = numKeys.reduce(function(max, key){
        if (key > max) {
          max = key;
        }
        return max;
      });
      // increment the last key to get the new key
      var newKey = lastKey + 1;
    } else {
      // if there were no items in the stack, the first key will be 1
      var newKey = 1;
    }
    // set the new key to the value
    storage[newKey.toString()] = value;
  };

  someInstance.pop = function() {
    // check if there are any items in the stack
    if (Object.keys(storage).length !== 0) {
      // get the keys for each item
      var keys = Object.keys(storage);
      // convert the keys to numbers
      var numKeys = keys.map(function(key){
        return parseInt(key);
      });
      // find the max number among the keys - the key of the top item
      var lastKey = numKeys.reduce(function(max, key) {
        if (key > max) {
          max = key;
        }
        return max;
      });
      // get the value of the top item
      var lastValue = storage[lastKey.toString()];
      // store the value of the top item
      var poppedValue = lastValue;
      // delete the key of the top item, thus removing it
      delete storage[lastKey.toString()];
      // return the item that was removed
      return poppedValue;
    }
  };

  someInstance.size = function() {
    // get the keys of the items in the stack
    var keys = Object.keys(storage);
    // return the length of the array of keys (which is the number of items currently in the stack)
    return keys.length;
  };

  return someInstance;
};
