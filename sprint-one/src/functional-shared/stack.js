var Stack = function() {
  var instance = {};
  instance.storage = {};
  instance.currentSize = 0;
  Object.assign(instance, stackMethods);

  return instance;
};

var stackMethods = {};

  // Implement the methods below
stackMethods.push = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

stackMethods.pop = function() {
  if(this.currentSize !== 0){
    this.currentSize--
  }
  return this.storage[this.currentSize]
};

stackMethods.size = function() {
  return this.currentSize;
};
