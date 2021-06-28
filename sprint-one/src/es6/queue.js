class Queue {
  constructor() {
    this.storage = {};
    this.startIndex = 0;
    this.endIndex = 0;
  }

  enqueue(value) {
    this.storage[this.endIndex] = value;
    this.endIndex++;
  }

  dequeue() {
    if(this.startIndex !== this.endIndex) {
      this.startIndex++;
    }
    return this.storage[this.startIndex-1];
  }

  size() {
    return this.endIndex - this.startIndex;
  }
}
