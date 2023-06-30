export class CircularQueue {
  constructor(capacity) {
    this.list = {};
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {}

  dequeue() {}

  isEmpty() {
    return this.currentLength === 0;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  peek() {}

  size() {}

  print() {}
}

let cl = new CircularQueue();
cl.enqueue(10);
