var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // enqueue(string) - Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    // check if there are any items in the queue
    if (Object.keys(storage).length !== 0) {
      // get the keys for each item
      var keys = Object.keys(storage);
      // convert the keys to numbers
      var numKeys = keys.map(function(key){
        return parseInt(key);
      });
      // find the max number among the keys - the key of the last item
      var lastKey = numKeys.reduce(function(max, key){
        if (key > max) {
          max = key;
          return max;
        } else {
          return max;
        }
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

  // dequeue() - Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    // check if there are any items in the queue
    if (Object.keys(storage).length !== 0) {
      // get the keys for each item
      var keys = Object.keys(storage);
      // convert the keys to numbers
      var numKeys = keys.map(function(key){
        return parseInt(key);
      });
      // find the min number among the keys - the key of the first item
      var firstKey = numKeys.reduce(function(min, key){
        if (key < min) {
          min = key;
          return max;
        } else {
          return min;
        }
      });
      var firstValue = storage[firstKey.toString()];
      // debugger;
      // store the value of the first item
      var dequeuedValue = firstValue;
      // debugger;
      // delete the key of the first item, thus removing it
      delete storage[firstKey.toString()];
      // debugger;
      // return the item that was removed
      return dequeuedValue;
    }
  };

  // size() - Return the number of items in the queue
  someInstance.size = function() {
    // get the keys of the items in the queue
    var keys = Object.keys(storage);
    // return the length of the array of keys (which is the number of items currently in the queue)
    return keys.length;
  };

  return someInstance;
};
