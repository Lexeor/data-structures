class Stack {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list[this.list.length - 1];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  print() {
    let reduced = this.list.reduce((acc, val) => acc + ", " + val.toString());
    console.log(reduced.toString());
  }
}
