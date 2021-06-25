var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const instance = {};
  instance.storage = {};
  instance.curentSize = 0;
  Object.assign(instance, stackMethods);

  return instance
};

var stackMethods = {
  /**
  // Use an object with numeric keys to store values

  // Implement the methods below
  push: function(value) {
    this.storage[this.currentSize] = value;
    this.currentSize++;
  },

  pop: function() {
    if(this.currentSize !== 0){
      this.currentSize--
    }
    return this.storage[this.currentSize]
  },

  size: function() {
    return this.currentSize
  }
  */
};
stackMethods.push = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
}

