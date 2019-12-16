var Queue = function() {
  this.storage = {};
  this.startIndex = 0;
  this.nextIndex = 0;
};

// enqueue(string) - Add a string to the back of the queue
Queue.prototype.enqueue = function(value) {
  // new value is set at nextIndex in storage
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

// dequeue() - Remove and return the string at the front of the queue
Queue.prototype.dequeue = function() {
  // check if there are any items in the queue
  if (this.size() !== 0) {
    var dequeuedItem = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.startIndex++;
    return dequeuedItem;
  }
};

// size() - Return the number of items in the queue
Queue.prototype.size = function() {
  return this.nextIndex - this.startIndex;
};


