var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  //var newStack = Object.create(Stack.prototype);
  //Object.assign(newStack, stackMethods);
  newStack.currentSize = 0;
  newStack.storage = {};
  return newStack
};

var stackMethods = {}

//Stack.prototype.push = function(value){
stackMethods.push = function(value) {
  this.storage[this.currentSize] = value
  this.currentSize++
}
//Stack.prototype.pop = function(){
stackMethods.pop = function() {
  if(this.currentSize !== 0){
    this.currentSize--
  }
  return this.storage[this.currentSize]
}
//Stack.prototype.size = function() {
stackMethods.size = function(){
  return this.currentSize;
}

