class Queue {
  constructor() {
    this.list = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.list[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.list[this.front];
    delete this.list[this.front];
    this.front++;
    return item;
  }

  size() {
    return this.rear - this.front;
  }

  peek() {
    return this.list[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    let result = "";
    for (let item in this.list) {
      result += `${this.list[item].toString()} `;
    }
    console.log(result);
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(1);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.peek());
