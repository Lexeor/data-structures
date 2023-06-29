/** First In - First Out (FIFO) */
class Queue {
  constructor() {
    this.list = {};
    this.front = 0;
    this.rear = 0;
  }

  /** Add element to the end of the queue.
   * @param {number} [element] element to be added.
   */
  enqueue(element) {
    this.list[this.rear] = element;
    this.rear++;
  }

  /** Remove element from the start of the queue.
   * @returns {number} removed element.
   */
  dequeue() {
    const item = this.list[this.front];
    delete this.list[this.front];
    this.front++;
    return item;
  }

  /** Returns current size of the queue.
   * @returns {number} queue size.
   */
  size() {
    return this.rear - this.front;
  }

  /** Returns the first element of the queue.
   *  @returns {number} first queue element.
   */
  peek() {
    return this.list[this.front];
  }

  /** Returns is queue empty or not.
   * @returns {boolean} queue is empty.
   */
  isEmpty() {
    return this.rear - this.front === 0;
  }

  /** Prints all queue to the console as object. */
  print() {
    let result = "";
    for (let item in this.list) {
      result += `${this.list[item].toString()} `;
    }
    console.log(result);
  }
}

module.exports = Queue;
