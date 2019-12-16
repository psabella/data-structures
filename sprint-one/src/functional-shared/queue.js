var Queue = function() {
  // create new queue object
  var newQueue = {};
  // add a storage object to hold int keys + items
  newQueue.storage = {};
  // keep track of first and last in queue
  newQueue.startIndex = 0;
  newQueue.nextIndex = 0;
  // add the methods to the new queue object
  _.extend(newQueue, queueMethods);
  // return the new queue object
  return newQueue;
};

var queueMethods = {};

// enqueue(string) - Add a string to the back of the queue
queueMethods.enqueue = function(value) {
  // new value is set at nextIndex in storage
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

// dequeue() - Remove and return the string at the front of the queue
queueMethods.dequeue = function() {
  // check if there are any items in the queue
  if (this.size() !== 0) {
    var dequeuedItem = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.startIndex++;
    return dequeuedItem;
  }
};

// size() - Return the number of items in the queue
queueMethods.size = function() {
  return this.nextIndex - this.startIndex;
};


