var Queue = function() {
  this.startIndex = 0;
  this.endIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.endIndex] = value;
  this.endIndex++;
}
Queue.prototype.dequeue = function() {
  if(this.startIndex !== this.endIndex) {
    this.startIndex++;
  }
  return this.storage[this.startIndex-1];
}
Queue.prototype.size = function() {
  return this.endIndex - this.startIndex;
}
