var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[currentSize] = value;
    currentSize++;
  };

  someInstance.pop = function() {
    if(currentSize !== 0){
    currentSize--
    }
    return storage[currentSize]
  };

  someInstance.size = function() {
    return currentSize
  };

  return someInstance;
};
