class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  pop() {
    if(this.length !== 0) {
      this.length--;
    }
    return this.storage[this.length];
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  size() {
    return this.length;
  }

}
