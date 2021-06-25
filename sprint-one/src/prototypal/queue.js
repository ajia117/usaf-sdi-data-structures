var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const newQueue = Object.create(Queue.prototype);
  newQueue.startIndex = 0;
  newQueue.endIndex = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

Queue.prototype.enqueue = function (value) {

  // TODO: impement enqueue
  if(this.startIndex !== this.endIndex) {
    this.startIndex++;
  }
}
Queue.prototype.dequeue = function () {
  // TODO: implement dequeue
  return true;
}
Queue.prototype.size = function () {
  // TODO: impelment size
  return true;
}


