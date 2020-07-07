/*
通过两个栈实现队列
思路:
- 设计两个栈,一个用于进栈,一个用于出栈
  - 进栈:直接push
  - 出栈:需要先判断出栈的栈是不是为空,在加入进栈的栈中的内容
*/
function twoStackToQueue() {
  this.stack1 = [];
  this.stack2 = [];
}
twoStackToQueue.prototype.enqueue = function (data) {
  this.stack1.push(data)
}
twoStackToQueue.prototype.dequeue = function () {
  if (this.stack1.length == 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return stack2.pop() || null
}
