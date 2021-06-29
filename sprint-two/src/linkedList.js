var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  /**
   * O(1)
   */
  list.addToTail = function(value) {
    if(this.tail !== null) {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    } else { // head and tail are null
      this.tail = Node(value);
      this.head = this.tail;
    }
  };

  /**
   * O(1)
   */
  list.removeHead = function() {
    let value = this.head.value;
    if(this.head === this.tail) { // only one element
      this.tail = null;
    }
    this.head = this.head.next;
    return value;
  };

  /**
   * O(n)
   */
  list.contains = function(target) {
    let currentNode = this.head;
    while(currentNode !== this.tail) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next
    }
    return currentNode.value === target;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
