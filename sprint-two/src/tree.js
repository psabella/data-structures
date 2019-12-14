var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  // add methods to new tree
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  // value is the value of a tree object
  var child = Tree(value);
  // create child node by using Tree(value)
  this.children.push(child);
  // push new node to parentTree => this.children
};

// method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  var checkTree = function(node, targetVal) {
    // check the current node
    if (node.value === targetVal) {
      return true;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        if (checkTree(node.children[i], targetVal)) {
          return true;
        }
      }
      return false;
    }
    return false;//
  };
  if (checkTree(this, target)) {
    return true;
  }
  return false;
  // if children, iterate over the children and pass the current child back to the function
};



/*
 * Complexity: What is the time complexity of the above functions?
 */