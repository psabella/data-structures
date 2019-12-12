var Stack = function() {
  // create new stack object
  var newStack = {};
  // add the methods to the new stack object
  _.extend(newStack, Stack.stackMethods);
  // return the new stack object
  return newStack;
};

// variable to store the methods (object)
var stackMethods = {};

// add the methods to the class
Stack.stackMethods.push = function(value) {

};

Stack.stackMethods.pop = function() {

};

Stack.stackMethods.size = function() {

};


