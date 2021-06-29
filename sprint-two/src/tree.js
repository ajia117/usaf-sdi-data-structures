/**
 * Functional constructor for a Tree object.
 */
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  Object.assign(newTree, treeMethods);

  return newTree;
};


/**
 * Functional shared Tree method class. 
 */
var treeMethods = {};

/**
 * O(1)
 */
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

/**
 * O(n*m), where n is the number of children and m is the depth of the tree
 */
treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  for(let child of this.children) {
    if(child.contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
