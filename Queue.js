class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(element) {
    this.list.push(element);
  }

  dequeue() {
    return this.list.shift();
  }

  size() {
    return this.list.length;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.list[0];
    }
    return null;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  print() {
    console.log(this.list.toString());
  }
}
