var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.startIndex = 0;
  newQueue.nextIndex = 0;
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


