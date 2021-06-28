var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.startIndex = 0;
  newQueue.endIndex = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.endIndex] = value;
  this.endIndex++;
}
queueMethods.dequeue = function () {
  if(this.startIndex !== this.endIndex) {
    this.startIndex++;
  }
  return this.storage[this.startIndex-1];
}
queueMethods.size = function () {
  return this.endIndex - this.startIndex;
}


