var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackCount = 0;
  console.log(newStack);
  return newStack;
};

stackMethods = {
  push(value){
    this.stackCount++;
    this.storage[this.stackCount] = value;
  },

  pop(){
    if (this.stackCount > 0) {
      var poppedItem = this.storage[this.stackCount];
      delete this.storage[this.stackCount];
      this.stackCount--;
      return poppedItem;
    }
  },

  size(){
    return this.stackCount;
  }
};




