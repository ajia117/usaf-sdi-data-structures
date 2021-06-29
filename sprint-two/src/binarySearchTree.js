/**
 * Functional constructor for BinarySearchTree object. 
 */
var BinarySearchTree = function(value) {
  let newBST = {
    left: null,
    right: null,
    value: value
  };

  newBST.insert = function(value) {
    if(value < this.value) { // traverse the left
      if(this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else { // traverse the right
      if(this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  newBST.contains = function(target) {
    if(target === this.value) {
      return true;
    } 
    if(target < this.value && this.left !== null) {
      return this.left.contains(target);
    } else if(target > this.value && this.right !== null) {
      return this.right.contains(target);
    }
    return false;
  }

  newBST.depthFirstLog = function(callFn) {
    callFn(this.value);
    if(this.left !== null) {
      this.left.depthFirstLog(callFn);
    }
    if(this.right !== null) {
      this.right.depthFirstLog(callFn);
    }
  }

  return newBST;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
