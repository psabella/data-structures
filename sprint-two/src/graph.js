// Instantiate a new graph
var Graph = function() {
  //var graph = {};

  // this.nodes = [];
  //this.value
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (parseInt(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this[node].length; i++) {
    var index = this[this[node][i]].indexOf(node);
    this[this[node][i]].splice(index, 1);
  }
  // iterate over that array for each node we visit the node and remove the link
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // must check both nodes values for
  // console.log(this[fromNode].includes(toNode));
  // console.log(this[toNode].includes(fromNode));

  return this[fromNode].includes(toNode) && this[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add the value of fromNode to edges of toNode
  // add the value of toNode to edges of fromNode
  // debugger;
  // console.log(this);
  // console.log(this[fromNode]);
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //if it contains using includes
  if (this[fromNode].includes(toNode) && this[toNode].includes(fromNode)) {
    //find the index of target node in the array using indexOf
    var fromIndex = this[fromNode].indexOf(toNode);
    var toIndex = this[toNode].indexOf(fromNode);
    //use splice from that index remove splice(targetItemIndex, 1)
    this[fromNode].splice(fromIndex, 1);
    this[toNode].splice(toIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    //check if the array
    // console.log('this', this);
    if (Array.isArray(this[key])) {
      cb(parseInt(key));
    }
  }
};
/* var connectToFive = function(item) {
  graph.addEdge(item, 5);
};
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */