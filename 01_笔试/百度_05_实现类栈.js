class Stack {
  constructor() {
    this.stack = []
  }
  push(data) {
    this.stack.push(data)
  }
  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
    return null
  }
  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1]
    }
    return null
  }
  clear() {
    this.stack = []
  }
}