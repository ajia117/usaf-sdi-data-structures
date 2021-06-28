var Queue = function() {
  var newQueue = {
    storage: {},
    startIndex:0,
    endIndex:0
  }
  Object.assign(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.endIndex] = value;
  this.endIndex++;
}

queueMethods.dequeue = function() {
  if(this.startIndex !== this.endIndex) {
    this.startIndex++;
  }
  return this.storage[this.startIndex - 1];
}

queueMethods.size = function() {
  return this.endIndex - this.startIndex;
}
