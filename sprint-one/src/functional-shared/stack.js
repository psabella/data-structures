var Stack = function() {
  // create new stack object
  var newStack = {};
  // add a storage object to hold int keys + items
  newStack.storage = {};
  // keep track of count of items in the stack
  newStack.stackCount = 0;
  // add the methods to the new stack object
  _.extend(newStack, stackMethods);
  // return the new stack object
  return newStack;
};

// property to store the methods for Stack
var stackMethods = {};

// add the methods to the methods object
stackMethods.push = function(value) {
  this.stackCount++;
  this.storage[this.stackCount] = value;
};

stackMethods.pop = function() {
  if (this.stackCount > 0) {
    // store the value of the top item
    var poppedItem = this.storage[this.stackCount];
    // delete the key of the top item, thus removing it
    delete this.storage[this.stackCount];
    // decrement count
    this.stackCount--;
    return poppedItem;
  }
};

stackMethods.size = function() {
  return this.stackCount;
};


