var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let startIndex = 0;
  let endIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endIndex] = value;
    endIndex++;
  };

  /**
   * {
   *    -0: 'a', -
   *    1: 'b',
   *    2: 'c'
   *    size: 3
   * }*/
  someInstance.dequeue = function() {
    if(startIndex !== endIndex){
      startIndex++;
    }
    return storage[startIndex - 1];
  };

  someInstance.size = function() {
    return endIndex - startIndex;
  };

  return someInstance;
};
