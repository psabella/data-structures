var LinkedList = function() {
  var list = {};
  list.head = null; // {value: x, next: n}
  list.tail = null; // {value: n, next: null}
  // {1: {value: x, next: n}, 2: {value: n, next: n2}}
  // adds a node to the end of the linked list
  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      var oldTail = list.tail;
      list.tail = Node(value); // {value: 12, next: null}
      // list : { 'tail' : {value:12, next:null} }
      // next from the previous tail should now point to the newNode value
      // to do that...we must access the previous node and set the next value
      oldTail.next = list.tail.value;
    }
  };

  // removes the first node in the linked list
  // returns the removed value
  list.removeHead = function() {
    //check head is null or not
    if(list.head === null) {
      return undefined;
    } else {
      var oldHead = list.head;
      //if not null, then delete list.head and
      list.head = list.head.value; // new head
    }
    return list.head;
  };

  // checks if the target is in node the linked list
  // returns boolean
  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};
  // {value: 12, next: null}

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
