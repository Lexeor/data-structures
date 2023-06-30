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
    const node = new ListNode(value);

    if (this.isEmpty()) {
      this.prepend(value);
    } else {
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
