/*
通过两个队列实现栈:
- 两个队列哪个为空哪个入队,入队之后从头去取另一个队列中的元素
- 出队的时候从头部出,(顺讯调换之后,先进就后出)
*/
function twoQueuetoStack() {
  this.queue1 = [];
  this.queue2 = [];
}
twoQueuetoStack.prototype.push = function (data) {
  if (this.queue1.length == 0) {
    this.queue1.push(data);
    //取出另个不为空的队列中的元素从头取并插入
    while (this.queue2.length) {
      this.queue1.push(this.queue2.shift())
    }
  }
  if (this.queue2.length == 0) {
    this.queue2.push(data);
    while (this.queue1.length) {
      this.queue2.push(this.queue1.shift())
    }
  }
}
twoQueuetoStack.prototype.pop = function () {
  if (this.queue1.length !== 0) {
    return this.queue1.shift()
  }
  if (this.queue2.length != 0) {
    return this.queue2.shift()
  }
}