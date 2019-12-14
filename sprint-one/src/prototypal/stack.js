var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.i = 0;
  console.log(newStack);
  return newStack;
};

stackMethods = {
  push(value){
    // add a new value at key at current i
    // i++
    this.storage[this.i] = value;
    this.i++;
  },

  pop(){
    if (this.i > 0) {
      this.i--;
      var poppedValue = this.storage[this.i];
      delete this.storage[this.i];
      return poppedValue;
    }
  },

  size(){

    return this.i;
  }
  // output - last item in the stack
  // remove last item
  // decrement i
  // return removed item
  // pop()



  // // check if there are any items in the stack
  // if (Object.keys(this.storage).length !== 0) {
  //   // get the keys for each item
  //   var keys = Object.keys(this.storage);
  //   // convert the keys to numbers
  //   var numKeys = keys.map(function(key){
  //     return parseInt(key);
  //   });
  //   // find the max number among the keys - the key of the top item
  //   var lastKey = numKeys.reduce(function(max, key){
  //     if (key > max) {
  //       max = key;
  //     }
  //     return max;
  //   });
  //   // increment the last key to get the new key
  //   var newKey = lastKey + 1;
  // } else {
  //   // if there were no items in the stack, the first key will be 1
  //   var newKey = 1;
  // }
  // // set the new key to the value
  // this.storage[newKey.toString()] = value;
};

// stackMethods.pop = function() {
//   // check if there are any items in the stack
//   if (Object.keys(this.storage).length !== 0) {
//     // get the keys for each item
//     var keys = Object.keys(this.storage);
//     // convert the keys to numbers
//     var numKeys = keys.map(function(key){
//       return parseInt(key);
//     });
//     // find the max number among the keys - the key of the top item
//     var lastKey = numKeys.reduce(function(max, key) {
//       if (key > max) {
//         max = key;
//       }
//       return max;
//     });
//     // get the value of the top item
//     var lastValue = this.storage[lastKey.toString()];
//     // store the value of the top item
//     var poppedValue = lastValue;
//     // delete the key of the top item, thus removing it
//     delete this.storage[lastKey.toString()];
//     // return the item that was removed
//     return poppedValue;
//   }
// };

// stackMethods.size = function() {
//   // get the keys of the items in the stack
//   var keys = Object.keys(this.storage);
//   // return the length of the array of keys (which is the number of items currently in the stack)
//   return keys.length;
// };



