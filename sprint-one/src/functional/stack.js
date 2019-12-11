var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (Object.keys(storage).length !== 0) {
      var keys = Object.keys(storage);
      var numKeys = keys.map(function(key){
        return parseInt(key);
      })
      var lastKey = numKeys.reduce(function(max, key){
        if (key > max) {
          max = key;
          return max;
        } else {
          return max;
        }
      });
      var newKey = lastKey + 1;
    } else {
      var newKey = 1;
    }
    storage[newKey.toString()] = value;
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length !== 0) {
      var keys = Object.keys(storage);
      var numKeys = keys.map(function(key){
        return parseInt(key);
      })
      var lastKey = numKeys.reduce(function(max, key) {
        if (key > max) {
          max = key;
          return max;
        } else {
          return max;
        }
      });
      var lastValue = storage[lastKey.toString()];
      var poppedValue = lastValue;
      delete storage[lastKey.toString()];

      return poppedValue;
    }
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
