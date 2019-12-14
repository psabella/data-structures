var Stack = function() {
  // create new stack object
  var newStack = {};
  // add a storage object to hold int keys + items
  newStack.storage = {};
  // use for alternate solution --> newStack.count = 0; update all THIS to lowercase
  // add the methods to the new stack object
  _.extend(newStack, stackMethods);
  // return the new stack object
  return newStack;
};

// property to store the methods for Stack
var stackMethods = {};

// add the methods to the methods object
stackMethods.push = function(value) {
  // check if there are any items in the stack
  if (Object.keys(this.storage).length !== 0) {
    // get the keys for each item
    var keys = Object.keys(this.storage);
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
  this.storage[newKey.toString()] = value;

  // alternate solution with count
  // THIS.count++;
  // THIS.storage[THIS.count] = value;
};

stackMethods.pop = function() {
  // check if there are any items in the stack
  if (Object.keys(this.storage).length !== 0) {
    // get the keys for each item
    var keys = Object.keys(this.storage);
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
    var lastValue = this.storage[lastKey.toString()];
    // store the value of the top item
    var poppedValue = lastValue;
    // delete the key of the top item, thus removing it
    delete this.storage[lastKey.toString()];
    // return the item that was removed
    return poppedValue;
  }

  // alternate solution with count
  // if (THIS.count > 0) {
  //   // get the value of the top item
  //   var lastValue = THIS.storage[THIS.count];
  //   // store the value of the top item
  //   var poppedValue = lastValue;
  //   // delete the key of the top item, thus removing it
  //   delete THIS.storage[THIS.count];
  //   // decrement
  //   THIS.count--;
  //   return poppedValue;
  // }
};

stackMethods.size = function() {
  // get the keys of the items in the stack
  var keys = Object.keys(this.storage);
  // return the length of the array of keys (which is the number of items currently in the stack)
  return keys.length;

  // alternate solution with count
  // return THIS.count;
};


