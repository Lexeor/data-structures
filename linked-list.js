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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
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
list.prepend(5);
list.prepend(20);
list.prepend(70);
list.print();
