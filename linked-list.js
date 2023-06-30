class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  /** Adds a value at the head of a linked list.
   * @param {number} [value] value to prepend
   */
  prepend(value) {
    const node = new ListNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /** Adds a value at the tail of a linked list.
   * @param {number} [value] value to append
   */
  append(value) {
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      const node = new ListNode(value);
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  /** Adds a value to a linked list at the given index.
   * @param {number} [value] value to insert
   * @param {number} [index] insert index
   */
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Index is invalid");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.size) {
      this.append(value);
    } else {
      let node = new ListNode(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  /** Removes first element from a linked list.
   * @returns removed value | null (if list is empty)
   */
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  /** Removes last element from a linked list.
   * @returns removed value | null (if list is empty)
   */
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  /** Removes element from a linked list at the given index.
   * @param {number} [index] index to remove
   * @returns removed value | null (if list is empty)
   */
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Index is invalid");
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  /** Removes FIRST element matched by a given value from a linked list.
   * @param {number} [value] value to remove
   * @returns removed value | null (if list is empty)
   */
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      console.log("Value not found.");
      return null;
    }
  }

  /** Search FIRST element matched by a given value from a linked list.
   * @param {number} [value] value to search
   * @returns value index | -1 (if value not found)
   */
  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head;
      let index = 0;
      while (curr) {
        if (curr.value === value) {
          return index;
        }
        curr = curr.next;
        index++;
      }
      return -1;
    }
  }

  /** Reverse linked list. */
  reverse() {
    let prev = null;
    let curr = this.head;
    this.tail = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  /** Prints linked list, comma separated string. */
  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let result = [];
      let curr = this.head;
      while (curr) {
        result.push(curr.value);
        curr = curr.next;
      }
      console.log(result.join(", "));
    }
  }
}

module.exports = {
  ListNode,
  LinkedList,
};
