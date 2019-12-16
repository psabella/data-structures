var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackCount = 0;
  return newStack;
};

stackMethods = {
  push(value){
    this.stackCount++;
    this.storage[this.stackCount] = value;
  },

  pop(){
    if (this.stackCount > 0) {
      // store the value of the top item
      var poppedItem = this.storage[this.stackCount];
      // delete the key of the top item, thus removing it
      delete this.storage[this.stackCount];
      // decrement count
      this.stackCount--;
      return poppedItem;
    }
  },

  size(){
    return this.stackCount;
  }
};




