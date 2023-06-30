class CircularQueue {
  constructor(capacity) {
    this.list = {};
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.list[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full.");
    }
  }

  dequeue() {}

  isEmpty() {
    return this.currentLength === 0;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  peek() {}

  size() {}

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let i;
      let result = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        result += `${this.list[i]}, `;
      }
      result += this.list[i];
      console.log(result);
    }
  }
}

let cl = new CircularQueue(3);
cl.enqueue(10);
cl.enqueue(10);
cl.enqueue(10);
cl.enqueue(10);
cl.print();
