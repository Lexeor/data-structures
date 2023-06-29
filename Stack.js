/** Last In - First Out (LIFO) */
class Stack {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }

  /** Adds new element to the stack
   * @param {boolean} [element] - Element to add.
   */
  push(element) {
    this.list.push(element);
  }

  /** Removes the last element of the stack.
   * @returns {number} removed element.
   */
  pop() {
    return this.list.pop();
  }

  /** Returns the last element of the stack.
   *  @returns {number} last stack element.
   */
  peek() {
    return this.list[this.list.length - 1];
  }

  /** Returns current size of the stack.
   * @returns {number} stack size.
   */
  size() {
    return this.list.length;
  }

  /** Returns is stack empty or not.
   * @returns {boolean} stack is empty.
   */
  isEmpty() {
    return this.list.length === 0;
  }

  /** Prints all stack to the console with comma separator. */
  print() {
    let reduced = this.list.reduce((acc, val) => acc + ", " + val.toString());
    console.log(reduced.toString());
  }
}

module.exports = Stack;
