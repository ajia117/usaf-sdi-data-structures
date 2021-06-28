var Stack = function() {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.pop = function() {
  if(this.length !== 0) {
    this.length--;
  }
  return this.storage[this.length];
}
Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}
Stack.prototype.size = function() {
  return this.length;
}
