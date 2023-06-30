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

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

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

const list = new LinkedList();
list.append(13);
list.print();
list.prepend(5);
list.prepend(20);
list.prepend(70);
list.print();
list.append(13);
list.insert(17, 5);
list.insert(12, 3);
list.print();
list.removeValue(17);
list.print();
console.log(list.search(12));
console.log(list.search(71));
list.reverse();
list.print();
list.removeFromEnd();
list.print();
list.removeFromFront();
list.print();
