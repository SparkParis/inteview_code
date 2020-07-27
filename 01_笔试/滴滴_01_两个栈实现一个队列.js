var stack1 = [];
var stack2 = [];
function enqueue(node) {
  stack1.push(node)
}
function dequeue() {
  if (stack2.length == 0) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop() || null
}