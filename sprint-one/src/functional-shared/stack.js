var Stack = function() {
  // create new stack object
  var newStack = {};
  // add a storage object to hold int keys + items
  newStack.storage = {};
  newStack.count = 0;
  // add the methods to the new stack object
  _.extend(newStack, stackMethods);
  // return the new stack object
  return newStack;
};

// property to store the methods for Stack
var stackMethods = {};

// add the methods to the class
stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    // get the value of the top item
    var lastValue = this.storage[this.count];
    // store the value of the top item
    var poppedValue = lastValue;
    // delete the key of the top item, thus removing it
    delete this.storage[this.count];
    // decrement
    this.count--;
    return poppedValue;
  } else {
    return undefined;
  }
};

stackMethods.size = function() {
  // get
  // return the length of the array of keys (which is the number of items currently in the stack)
  return this.count;
};


