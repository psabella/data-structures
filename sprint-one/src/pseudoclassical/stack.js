var Stack = function() {
  this.storage = {};
  this.stackCount = 0;
};

Stack.prototype.push = function(value){
  this.stackCount++;
  this.storage[this.stackCount] = value;
};

Stack.prototype.pop = function (){
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

Stack.prototype.size = function() {
  return this.stackCount;
};