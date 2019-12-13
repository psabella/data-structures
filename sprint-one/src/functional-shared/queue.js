var Queue = function() {
  // create new queue object
  var newQueue = {};
  // add a storage object to hold int keys + items
  newQueue.storage = {};
  // add the methods to the new queue object
  _.extend(newQueue, queueMethods);
  // return the new queue object
  return newQueue;
};

var queueMethods = {};

// enqueue(string) - Add a string to the back of the queue
queueMethods.enqueue = function(value) {
  // check if there are any items in the queue
  if (Object.keys(this.storage).length !== 0) {
    // get the keys for each item
    var keys = Object.keys(this.storage);
    // convert the keys to numbers
    var numKeys = keys.map(function(key){
      return parseInt(key);
    });
    // find the max number among the keys - the key of the last item
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
};

// dequeue() - Remove and return the string at the front of the queue
queueMethods.dequeue = function() {
  // check if there are any items in the queue
  if (Object.keys(this.storage).length !== 0) {
    // get the keys for each item
    var keys = Object.keys(this.storage);
    // convert the keys to numbers
    var numKeys = keys.map(function(key){
      return parseInt(key);
    });
    // find the min number among the keys - the key of the first item
    var firstKey = numKeys.reduce(function(min, key){
      if (key < min) {
        min = key;
      }
      return min;
    });
    var firstValue = this.storage[firstKey.toString()];
    // debugger;
    // store the value of the first item
    var dequeuedValue = firstValue;
    // debugger;
    // delete the key of the first item, thus removing it
    delete this.storage[firstKey.toString()];
    // debugger;
    // return the item that was removed
    return dequeuedValue;
  }
};

// size() - Return the number of items in the queue
queueMethods.size = function() {
  // get the keys of the items in the queue
  var keys = Object.keys(this.storage);
  // return the length of the array of keys (which is the number of items currently in the queue)
  return keys.length;
};


